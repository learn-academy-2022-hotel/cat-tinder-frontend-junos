import { React, useState } from 'react'
import firelogo from '../assets/firelogo.mp4'
import { Fragment } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'

const Header = () => {
  const [toggled, setToggled] = useState(false)

  const toggle = () => {
    setToggled(!toggled)
  }

  return (
    <Fragment>
      <Navbar color="light" light expand="md">
        <div className='leftSide'>
          <NavbarBrand>TinderToons</NavbarBrand>
          <NavbarBrand href="/">
            <video src={firelogo} style={{height:'7vh'}}></video>
          </NavbarBrand>
        </div>
        <NavbarToggler onClick={toggle} />
        <div className='logo'>
          <Collapse isOpen={toggled} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink>Testing</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Testing</NavLink>
              </NavItem>
              <NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>Options</DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Option 1</DropdownItem>
                    <DropdownItem>Option 2</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Reset</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </Fragment>
  )
}

export default Header