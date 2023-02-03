import { React, useState } from 'react'
import biggerlogo from '../assets/biggerlogo.gif'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap'

const Header = () => {
  const [toggled, setToggled] = useState(false)

  const toggle = () => {
    setToggled(!toggled)
  }

  return (
    <>
      <Navbar color="light" light expand="md">
        <Container className='leftSide'>
          <NavbarBrand>TinderToons</NavbarBrand>
          <NavbarBrand href="/">
            <img 
              src={biggerlogo} 
              style={{
                height:'7vh',
                borderRadius:'50px'
              }} 
              alt="TinderToons Logo"
            />
          </NavbarBrand>
        </Container>
        <NavbarToggler onClick={toggle} />
        <Container>
          <Collapse isOpen={toggled} navbar className='logo'>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink href="/toonindex">Browse</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/toonnew">Create Profile</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/toonedit">Settings</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header

