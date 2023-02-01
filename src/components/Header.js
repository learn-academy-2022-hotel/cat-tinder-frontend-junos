import React from 'react';
import firelogo from '../assets/firelogo.mp4'
import { Fragment } from 'react';
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
} from 'reactstrap';

// https://www.canva.com/design/DAFZR1T4EMw/ahIyP1q8yEYNyLZU04B_GQ/watch?utm_content=DAFZR1T4EMw&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return <Fragment>
      {/* <Navbar color="primary" light expand="md">
        <NavbarBrand>TinderToons</NavbarBrand>
        <NavbarBrand href="/">
            <video src={firelogo} className="logo" style={{height:'7vh'}}></video>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <div className='logo'>
          <Nav className="logo" navbar>
            <NavItem>
            <div className='logo'>
              <NavLink href="/components/">Find Toons</NavLink>
            </div>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Toon Profile</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
                </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                  </DropdownItem>
                <DropdownItem>
                  Option 2
                  </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                  </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          </div>
        </Collapse>
      </Navbar> */}
      {/* </Fragment> */}


      <Navbar color="light" light expand="md">
        <div className='leftSide'>
            <NavbarBrand>TinderToons</NavbarBrand>
            <NavbarBrand href="/">
                <video src={firelogo} style={{height:'7vh'}}></video>
            </NavbarBrand>
        </div>
        <NavbarToggler onClick={this.toggle} />
      <div className='logo'>
        <Collapse isOpen={this.state.isOpen} navbar>
      <Nav className='ml-auto' navbar>
      <NavItem>
            <NavLink>Testing</NavLink>
        </NavItem>
        <NavItem>
            <NavLink>Testing</NavLink>
        </NavItem>
        <NavItem>
            <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                Options
                </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                  </DropdownItem>
                <DropdownItem>
                  Option 2
                  </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                  </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
        </NavItem>
      </Nav>
      </Collapse>
      </div>
      </Navbar>
    </Fragment>
  }
}