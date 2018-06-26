import React, {Component} from 'react';

import Navbar from './Nav/Navbar.js';
import Carousel from'./Carousel.js';
import Ads from './Ads.js';
import MediaQuery from 'react-responsive';
import Categories from './Categories/Categories.js';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="container clearfix">
          <div className="col-sm-8 float-left">
            <Navbar></Navbar>
            <br></br>
            <Carousel></Carousel>
          </div>
          <div className="col-sm-4 float-right">
            <Ads></Ads>
          </div>
        </div>
        <Categories></Categories>
      </div>

    )
  }
}

export default Home;
