import { React, useState } from 'react'
import biggerlogo from '../assets/biggerlogo.gif'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

const Header = () => {
  const [toggled, setToggled] = useState(false)

  const toggle = () => {
    setToggled(!toggled)
  }

  return (
    <>
      <Navbar color="light" light expand="md">
        <div className='leftSide'>
          <NavbarBrand>TinderToons</NavbarBrand>
          <NavbarBrand href="/">
            <img 
              src={biggerlogo} 
              style={{
                height:'7vh'
              }} 
              alt="TinderToons Logo"
            />
          </NavbarBrand>
        </div>
        <NavbarToggler onClick={toggle} />
        <div className='logo'>
          <Collapse isOpen={toggled} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink>Testing1</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Testing2</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Testing3</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </>
  )
}

export default Header

