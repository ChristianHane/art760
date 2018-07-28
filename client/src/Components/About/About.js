import React, {Component} from 'react';
import Navbar from '../Nav/Navbar.js';
import Ads from '../Ads/Ads.js';
import {Media} from 'reactstrap';
import MediaQuery from 'react-responsive';
import './About.css';

class About extends Component {
  render(){
    return(
      <div className="container clearfix">

        <MediaQuery query='(min-width:768px)'>
          <div className="row">
            <div className="col-8 col-xs-12 float-left">
              <Navbar></Navbar>
              <br></br>
                <Media>
                  <Media body>
                    <Media heading>
                      About Art 760
                    </Media>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </Media>
                </Media>
              <br></br>
              <br></br>
              <Media>
                <Media left href="#">
                  <Media object src="http://via.placeholder.com/150x150" alt="Generic placeholder image" />
                </Media>
                <Media body className="body">
                  <Media heading>
                    About Kip
                  </Media>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </Media>
              </Media>
            </div>
            <div className="col-4  float-right">
              <Ads></Ads>
            </div>
          </div>
        </MediaQuery>

        <MediaQuery query='(max-width:767px)'>
          <div className="row">
            <div className="col-12">
              <Navbar></Navbar>
              <br></br>
              <Media>
                <Media body>
                  <Media heading>
                    About Art 760
                  </Media>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Media>
              </Media>
              <br></br>
              <br></br>
              <Media>
                <Media left href="#">
                  <Media object src="http://via.placeholder.com/150x150" alt="Generic placeholder image" />
                </Media>
                <Media body className="body">
                  <Media heading>
                    About Kip
                  </Media>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </Media>
              </Media>
            </div>
            <div className="col-xs-12">
              <Ads></Ads>
            </div>
          </div>
        </MediaQuery>


      </div>
    )
  }
}

export default About;
//
