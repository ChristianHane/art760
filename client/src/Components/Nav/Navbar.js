import React, {Component} from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import './Navbar.css'
var tabsStyle= {
  color: 'gray',
  padding: '30px'
}
var homeStyle={
  backgroundColor: '#90ee90',
  padding:'30px',
  color: 'gray'
}

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div>
        <hr className="lines"></hr>
        <Nav pills>
          <NavItem>
            <NavLink style={homeStyle}href="#" active>HOME</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" style={tabsStyle}>ABOUT</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" style={tabsStyle}>CONTACT</NavLink>
          </NavItem>
        </Nav>
        <hr className="lines"></hr>
      </div>
    );
  }
}

export default Navbar;
