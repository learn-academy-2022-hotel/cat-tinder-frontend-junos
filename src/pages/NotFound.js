import React from "react"

const NotFound = () => {
  return (
    <>
      <div 
        className="notfound" 
        style={{
          height:'97vh', 
          width:'100vw', 
          textAlign:'center',
          backgroundSize:'cover',
          backgroundPosition:'center',
          display:'flex',
          justifyContent:'center',
          alignItems:'center'
        }}
      >
        <h1 className="errorMessage">
          404 NOT FOUND
        </h1>
      </div>
    </>
  )
}

export default NotFound
