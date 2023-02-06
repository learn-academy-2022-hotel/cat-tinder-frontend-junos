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
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const [toggled, setToggled] = useState(false)

  const toggle = () => {
    setToggled(!toggled)
  }

  const navigate = useNavigate()

  const goHome = () => {
    navigate("/")
  }
  return (
    <>
      <Navbar fixed='top' light expand="md" style={{backgroundColor:'rgb(97,97,97)', maxHeight:'6.5vh'}}>
        <Container className='leftSide' style={{display:'flex', justifyContent:'left'}}>
          <NavbarBrand style={{
            display:'flex', 
            justifyContent:'left', 
            alignItems:'center',
            }}
          >
            <h4 className='flicker'>
              TinderToons
            </h4>
            <img 
              className='toonLogo'
              src={biggerlogo} 
              style={{
                height:'6.5vh',
                borderRadius:'50px',
                marginLeft:'2.5%'
              }} 
              alt="TinderToons Logo"
              onClick={goHome}
            />
          </NavbarBrand>
        </Container>
        <NavbarToggler className='ml-auto' onClick={toggle} />
        <Container>
          <Collapse isOpen={toggled} navbar className='logo'>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink 
                  href="/toonindex" 
                  style={{color: 'rgb(151,253,254)'}}
                >
                  Browse
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink 
                  href="/toonnew" 
                  style={{color: 'rgb(151,253,254)'}}
                >
                  Create Profile
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink 
                  href="/favorites"
                  style={{color: 'rgb(151,253,254)'}}
                >
                  Favorites
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header

