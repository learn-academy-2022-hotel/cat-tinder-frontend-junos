import React, { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ToonEdit from "./pages/ToonEdit"
import ToonIndex from "./pages/ToonIndex"
import ToonNew from "./pages/ToonNew"
import ToonShow from "./pages/ToonShow"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Favorites from "./pages/Favorites"
import './App.css'


const App = () => {
  const [toons, setToons] = useState([])

  useEffect(() => { readToons() }, [])

  const readToons = () => {
    fetch('http://localhost:3000/toons')
      .then(response => response.json())
      .then(payload => setToons(payload))
      .catch(error => console.log(error))     
  }

  const createToon = (newToonObject) => {
    fetch('http://localhost:3000/toons', {
      body: JSON.stringify(newToonObject),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then(response => response.json())
      .then(payload => readToons())
      .catch(errors => console.log("createToon errors", errors))
  }

  const deleteToon = (toonObj) => {
    fetch(`http://localhost:3000/toons/${toonObj.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: null
    })
      .then(response => response.json())
      .then(payload => readToons())
      .catch(errors => console.log("createToon errors", errors))
  }
  
  const updateToon = (toonObj, id) => {
    console.log(toonObj)
    fetch(`http://localhost:3000/toons/${id}`, {
      body: JSON.stringify(toonObj),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
      .then(response => response.json())
      .then(payload => readToons())
      .catch(errors => console.log("createToon errors", errors))
    }

  const [liked, setLiked] = useState([])

  const likedToons = (toonObj) => {
    if(!liked.includes(toonObj)) {
      setLiked(liked.push(toonObj));
    }
    console.log(liked);
  }


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/toonindex" element={<ToonIndex toons={toons} />} />
        <Route path="/toonshow/:id" element={<ToonShow toons={toons} deleteToon={deleteToon} likedToons={likedToons} />} />
        <Route path="/toonnew" element={<ToonNew createToon={createToon} />} />
        <Route path="/toonedit/:id" element={toons.length > 0 && <ToonEdit updateToon={updateToon} toons={toons} />} />
        <Route path="/favorites" element={<Favorites liked={liked} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
