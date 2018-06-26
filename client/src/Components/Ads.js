import React, {Component} from 'react';
import { Media } from 'reactstrap';
import MediaQuery from 'react-responsive';


class Ads extends Component {
  render(){
    return(

        <div className="float-right">
          <MediaQuery query="(max-device-width: 1224px)">
          <br></br>
          <br></br>
          <img className="img-responsive" src="http://via.placeholder.com/200x150"/>
          <br></br>
          <br></br>
          <img className="img-responsive" src="http://via.placeholder.com/200x150"/>
          <br></br>
          <br></br>
          <img className="img-responsive" src="http://via.placeholder.com/200x150"/>
          <br></br>
          <br></br>
          <img className="img-responsive" src="http://via.placeholder.com/200x150"/>
          <br></br>
          <br></br>
          </MediaQuery>
          <MediaQuery query="(max-device-width: 425px)">
            <p>Phone or tablet</p>
          </MediaQuery>
        </div>


    )
  }
}
 export default Ads;
