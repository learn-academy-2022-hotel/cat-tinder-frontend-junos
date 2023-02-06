import React from "react"
import biggerlogo from '../assets/biggerlogo.gif'

const Home = () => {
  return (
    <>
      <div className="homeMain">
        <div className="wrapper nine">
          <h1 className="rotate" style={{fontFamily:'sunglasstype'}}>
            <span>T</span>
            <span>i</span>
            <span>n</span>
            <span>d</span>
            <span>e</span>
            <span>r</span>
            <span>T</span>
            <span>o</span>
            <span>o</span>
            <span>n</span>
            <span>s</span>
          </h1>
        </div>
        <div className="bgContainer">
          <img 
            src={biggerlogo} 
            className="homeBackground"
            alt="TinderToons Logo"
          />
        </div>
      </div>
    </>
  )
}

export default Home
