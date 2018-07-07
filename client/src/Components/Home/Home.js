import React, {Component} from 'react';

import Navbar from '../Nav/Navbar.js';
import Carousel from'../Carousel.js';
import Ads from '../Ads/Ads.js';
import MediaQuery from 'react-responsive';
import Categories from '../Categories/Categories.js';


class Home extends Component {
  render() {
    return (
      <div>
          <div className="container clearfix">

              <MediaQuery query='(min-width:768px)'>
                <div className="row">
                  <div className="col-8 col-xs-12 float-left">
                    <Navbar></Navbar>
                    <br></br>
                    <Carousel></Carousel>
                    <br></br>
                    <Categories></Categories>
                  </div>
                  <div className="col-4 col-xs-12 float-right">
                    <Ads></Ads>
                  </div>
                </div>
              </MediaQuery>


              <MediaQuery query="(max-width:768px)">
                <div className="row">
                  <div className="col-12">
                    <Navbar></Navbar>
                    <br></br>
                    <Carousel></Carousel>
                    <br></br>
                    <Categories></Categories>
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
