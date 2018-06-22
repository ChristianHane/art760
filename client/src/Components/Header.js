import React, {Component} from 'react';
import {
  Badge,
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
  DropdownItem } from 'reactstrap';

var hStyle={
  color: 'white'
}
var artStyle = {
  color: '#90ee90'
}

class Header extends Component {
  render() {
    return (
      <Navbar color="dark" dark expand="lg">
        <NavbarBrand href="/">Art<Badge color="secondary">760</Badge></NavbarBrand>
        <Nav className="ml-auto">
        <NavItem>
          <NavLink href="/components/"><h4 style={hStyle}>Your Desert guide to <br></br>
          all things <span style={artStyle}><b> ART</b></span> and more!</h4></NavLink>
        </NavItem>

        </Nav>

      </Navbar>
    )
  }
}

export default Header;
