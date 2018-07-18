import React, {Component} from 'react';
import './Header.css';
import logo from '../../Images/art760Logo.png';
import MediaQuery from 'react-responsive';
class Header extends Component {
  render() {
    return (
      <div>
    <MediaQuery query="(min-width: 768px)">
      <div className="header">
      <hr className="lines2"></hr>
      <hr className="lines"></hr>
        <div className="container-fluid clearfix">
          <div className="col-md-6 float-left">
            <img className="logo"src={logo}/>
            </div>
          <div className="col-md-6 float-right">
            <div className="side">
              <h4>Your Desert guide to </h4>
              <h4>all things <span id="art">ART</span> and more!</h4>
            </div>

          </div>
        </div>

        <hr className="lines"></hr>
        <hr className="lines2"></hr>
      </div>
    </MediaQuery>
    <MediaQuery query="(max-width:768px)">
      <div className="header2">
      <hr className="lines2"></hr>
      <hr className="lines"></hr>
        <div className="container-fluid clearfix">
          <div className="col-md-6 float-left">
            <img className="logo"src={logo}/>
            </div>
          <div className="col-md-6 float-right">
            <div className="side">
              <h4>Your Desert guide to </h4>
              <h4>all things <span id="art">ART</span> and more!</h4>
            </div>

          </div>
        </div>

        <hr className="lines"></hr>
        <hr className="lines2"></hr>
      </div>
    </MediaQuery>
  </div>
    )
  }
}

export default Header;
