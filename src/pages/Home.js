import React from "react"
import biggerlogo from '../assets/biggerlogo.gif'

const Home = () => {
  return (
    <>
      <div className="bgContainer">
        <img 
          src={biggerlogo} 
          className="homeBackground"
          alt="TinderToons Logo"
        />
      </div>
    </>
  )
}

export default Home
