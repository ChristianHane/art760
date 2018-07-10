import React, {Component} from 'react';
import MediaQuery from 'react-responsive';
import Ads from '../Ads/Ads.js';
import Navbar from '../Nav/Navbar.js';

class Contact extends Component {
  render(){
    return(
      <div className="container clearfix">
        <MediaQuery query="(min-width: 768px)">
          <div className="row">
            <div className="col-8 float-left">
              <Navbar></Navbar>
              <br></br>
              Let's Chat!
              We'd love to learn more about your business!

            </div>
          </div>
          <div className="row">
            <div className="col-4 float-right">
              <Ads></Ads>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery query="(max-width: 768px)">
          <div className="row">
            <div className="col-12 ">
              <Navbar></Navbar>
              <br></br>
                Let's Chat!
                We'd love to learn more about your business!

            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Ads></Ads>
            </div>
          </div>
        </MediaQuery>
      </div>
    )
  }
}

export default Contact;
