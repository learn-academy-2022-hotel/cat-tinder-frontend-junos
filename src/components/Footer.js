import React from "react"
import { Navbar } from "reactstrap"

const Footer = () => {
  return (
    <>
      <Navbar 
        style={{
          backgroundColor: 'rgb(97, 97, 97)', 
          height:'3.5vh',
          color:'rgb(151,253,254)'
        }}
        fixed="bottom"
      >
        Created by: © JUNOS Inc. Octavio Sifuentes | Chris Lee
      </Navbar>
    </>
  )
}

export default Footer
