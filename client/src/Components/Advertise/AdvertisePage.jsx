import React, {Component} from 'react';
import MediaQuery from 'react-responsive';
import Navbar from '../Nav/Navbar.js';
import Ads from '../Ads/Ads.js';
class AdvertisePage extends Component {
  render(){
    return(
      <div className="container clearfix">
        <MediaQuery query='(min-width: 1166px)'>
          <div className="row">
            <div className="col-8 col-xs-12 float-left">
              <Navbar/>
              <br></br>
              Advertise here
            </div>
            <div className="col-4 col-xs-12 float-right">
              <Ads/>
            </div>
          </div>
        </MediaQuery>
      </div>
    )
  }
}

export default AdvertisePage;
