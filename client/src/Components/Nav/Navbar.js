import React, {Component} from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import './Navbar.css'
import MediaQuery from 'react-responsive';
var navStyle= {
  color: 'gray'
}
var desktopPills= {
  padding: '30px'
}
var homeStyle={
  backgroundColor: '#90ee90'
}
var tabletPills = {
padding: '15px'
}

var phonePills = {
 padding: '0'
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
        <MediaQuery query="(min-device-width:768px)">
          <hr className="lines"></hr>
          <Nav pills>
            <NavItem>
              <NavLink style={desktopPills, navStyle, homeStyle}href="#" active>HOME</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" style={desktopPills, navStyle} >ABOUT</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" style={desktopPills, navStyle}>CONTACT</NavLink>
            </NavItem>
          </Nav>
          <hr className="lines"></hr>
        </MediaQuery>
        <MediaQuery query="(max-device-width:767px)">
          <hr className="lines"></hr>
          <Nav pills>
            <NavItem>
              <NavLink style={phonePills, navStyle, homeStyle}href="#" active>HOME</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" style={phonePills, navStyle} >ABOUT</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" style={phonePills, navStyle}>CONTACT</NavLink>
            </NavItem>
          </Nav>
          <hr className="lines"></hr>
        </MediaQuery>


      </div>
    );
  }
}
// <MediaQuery minDeviceWidth={1224}>
// </MediaQuery>
// <MediaQuery maxDeviceWidth={576}>
//   <p>phone</p>
// </MediaQuery>
export default Navbar;
