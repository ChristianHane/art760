import React, {Component} from 'react';
import MediaQuery from 'react-responsive';
import Ads from '../Ads/Ads.js';
import Navbar from '../Nav/Navbar.js';
import './Contact.css';
import mailPin from '../../Images/mapPin.png';
import email from '../../Images/email.png';
import phone from '../../Images/phone.png';
class Contact extends Component {
  render(){
    return(
      <div className="container clearfix">
        <MediaQuery query="(min-width: 768px)">
          <div className="row">
            <div className="col-8 float-left contact">
              <Navbar></Navbar>
              <br></br>
              <h3>Let's Chat!</h3>
              <br></br>
              We'd love to learn more about your business!
              <br></br>
              <div className="row assets">
                <div className="col-4">
                  <img src={phone} className="icons" />
                  <br></br>
                  (760)837-1800 ext.4
                </div>
                <div className="col-4">
                  <img src={email} className="icons"/>
                  <br></br>
                  kip@art760.com
                </div>
                <div className="col-4">
                  <img className="icons" src={mailPin}/>
                  <br></br>
                  1775 East Palm Canyon Drive Ste. 110-250
                  Palm Springs, CA 92264
                </div>
              </div>
            </div>
            <div className="col-4 float-right">
              <Ads></Ads>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery query="(max-width: 768px)">
          <div className="row">
            <div className="col-12 contact">
              <Navbar></Navbar>
              <br></br>
                <h3>Let's Chat!</h3>
                <br></br>
                We'd love to learn more about your business!

                <div className="row assets">
                  <div className="col-4">
                    <img src={phone} className="icons" />
                    <br></br>
                    (760)837-1800 ext.4
                  </div>
                  <div className="col-4">
                    <img src={email} className="icons"/>
                    <br></br>
                    kip@art760.com
                  </div>
                  <div className="col-4">
                    <img className="icons" src={mailPin}/>
                    <br></br>
                    1775 East Palm Canyon Drive Ste. 110-250
                    Palm Springs, CA 92264
                  </div>
                </div>

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
