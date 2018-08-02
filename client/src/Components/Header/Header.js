import React, {Component} from 'react';
import './Header.css';
import ImageResponsive from 'react-image-responsive';
import logo1 from '../../Images/art760Logo.png';
import logo2 from '../../Images/art760LogoSmall.png';
import MediaQuery from 'react-responsive';

const logo = [
  {maxWidth: 800, src:logo1},
  {maxWidth: 300, src:logo2}
]
// <figure>
//   <ImageResponsive
//     width= "20%"
//     sources={logo}
//     height="200px"
//     />
// </figure>
class Header extends Component {
  render() {
    return (
      <div>
    <MediaQuery query="(min-width: 769px)">
      <div className="header">
      <hr className="lines2"></hr>
      <hr className="lines"></hr>
        <div className="container-fluid clearfix">
          <div className="col-md-6 float-left">
            <a href="/">
              <img className="logo"src={logo1} alt="logo"/>
            </a>
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
          <div className="col-md-12 float-left">
            <a href="/">
              <figure>
                <ImageResponsive
                  width= "20%"
                  sources={logo}
                  height="200px"
                  />
              </figure>
            </a>
          </div>
          <div className="col-md-12 float-right">
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
