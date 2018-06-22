import React, {Component} from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

var tabsStyle= {
  color: 'gray'
}
var homeStyle={
  backgroundColor: '#90ee90'
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
        <Nav tabs style={tabsStyle}>
          <NavItem>
            <NavLink style={tabsStyle, homeStyle}href="#" active>HOME</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" style={tabsStyle}>ABOUT</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" style={tabsStyle}>CONTACT</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default Navbar;
