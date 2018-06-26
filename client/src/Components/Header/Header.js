import React, {Component} from 'react';
import './Header.css';


class Header extends Component {
  render() {
    return (
      <header className="header">
      <hr className="lines2"></hr>
      <hr className="lines"></hr>
      <br></br>
      <br></br>
        <div className="container-fluid clearfix">
          <div className="col-md-6 float-left">
            <h3>Art760</h3>
            </div>
          <div className="col-md-6 float-right">
            <h4>Your Desert guide to </h4>
            <h4>all things <span id="art">ART</span> and more!</h4>
          </div>
        </div>
        <br></br>
        <br></br>
        <hr className="lines"></hr>
        <hr className="lines2"></hr>
      </header>
    )
  }
}

export default Header;
