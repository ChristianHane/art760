import React, {Component} from 'react';
import MediaQuery from 'react-responsive';
import Navbar from '../Nav/Navbar.js';
import Ads from '../Ads/Ads.js';


class NoMatch extends Component {
  render(){
    return(
      <div>
        <div className="container clearfix">
          <MediaQuery query="(min-width:768px)">
            <div className="row">
              <div className="col-8 col-xs-12 float-left">
                <Navbar></Navbar>
                <br></br>
                  <h3>Oops!</h3>
                  <p>That page was not found</p>
              </div>

              <div className="col-4 col-xs-12 float-right">
                <Ads></Ads>
              </div>
            </div>

          </MediaQuery>
          <MediaQuery query="(max-width: 767px)">
            <div className="row">
              <div className="col-12">
                <Navbar></Navbar>
                <br></br>
                <h3>Oops!</h3>
                <p>That page was not found</p>
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

export default NoMatch;
