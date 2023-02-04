import React, { useState } from "react"
import mockToons from './mockToon.js'
import { Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import ToonEdit from "./pages/ToonEdit"
import ToonIndex from "./pages/ToonIndex"
import ToonNew from "./pages/ToonNew"
import ToonShow from "./pages/ToonShow"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import './App.css'


const App = () => {
  const [toons, setToon] = useState(mockToons)

  const addToon = (newToonObj) => {
    console.log(newToonObj)
  }

  const editToon = (newToonObj) => {
    console.log(newToonObj)
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/toonindex" element={<ToonIndex toons={toons} />} />
        <Route path="/toonshow/:id" element={<ToonShow toons={toons} />} />
        <Route path="/toonnew" element={<ToonNew addToon={addToon} />} />
        <Route path="/toonedit/:id" element={<ToonEdit editToon={editToon} toons={toons} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
