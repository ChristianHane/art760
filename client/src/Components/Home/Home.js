import React, {Component} from 'react';

import Navbar from '../Nav/Navbar.js';
import Carousel from'../Carousel.js';
import Ads from '../Ads/Ads.js';
import Categories from '../Categories/Categories.js';
import Cities from '../Cities/Cities.js';
import MediaQuery from 'react-responsive';

class Home extends Component {
  render() {
    return (
      <div>
          <div className="container clearfix">

              <MediaQuery query='(min-width:1166px)'>
                <div className="row">
                  <div className="col-8 col-xs-12 float-left">
                    <Navbar></Navbar>
                    <br></br>
                    <Carousel></Carousel>
                    <br></br>
                    <Categories></Categories>
                    <br></br>
                    <Cities></Cities>
                  </div>
                  <div className="col-4 col-xs-12 float-right">
                    <Ads></Ads>
                  </div>
                </div>
              </MediaQuery>


              <MediaQuery query="(max-width:1165px)">
                <div className="row">
                  <div className="col-12">
                    <Navbar></Navbar>
                    <br></br>
                    <Carousel></Carousel>
                    <br></br>
                    <Categories></Categories>
                    <br></br>
                    <Cities></Cities>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12">
                    <Ads></Ads>
                  </div>
                </div>
              </MediaQuery>
          </div>
      </div>
    )
  }
}

  //
  // <div>
  //     <div className="container clearfix">
  //       <div className="col-8 col-xs-12 float-left">
  //         <Navbar></Navbar>
  //         <br></br>
  //         <Carousel></Carousel>
  //       </div>
  //       <div className="col-4 col-xs-12 float-right">
  //         <Ads></Ads>
  //       </div>
  //     </div>
  //     <Categories></Categories>
  // </div>
export default Home;
