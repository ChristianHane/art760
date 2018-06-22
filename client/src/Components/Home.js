import React, {Component} from 'react';

import Navbar from './Navbar.js';
import Carousel from'./Carousel.js';
import Ads from './Ads.js';

class Home extends Component {
  render() {
    return (
        <div className="container clearfix">
          <div className="col-md-8 float-left">
            <Navbar></Navbar>
            <br></br>
            <Carousel></Carousel>
          </div>
          <div className="col-md-4 float-right">
            <Ads></Ads>
          </div>
        </div>
    )
  }
}

export default Home;
