import React, {Component} from 'react';
import './Cities.css';
import MediaQuery from 'react-responsive';
class Cities extends Component {
  render(){
    return(
      <div>
        <MediaQuery query='(min-width: 768px)'>
          <div className="row">
            <div className="col-4">
              <button className="btn here red">PALM SPRINGS</button>
              <br></br>
              <br></br>
              <button className="btn here orange">PALM DESERT</button>
            </div>
            <div className="col-4">
              <button className="btn here yellow">CATHEDRAL CITY</button>
              <br></br>
              <br></br>
              <button className="btn here green">INDIO</button>
            </div>
            <div className="col-4">
              <button className="btn here blue">LA QUINTA</button>
              <br></br>
              <br></br>
              <button className="btn here purple">PALM SPRINGS</button>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery query='(max-width: 768px)'>
          <div className="row">
            <div className="col-4">
              <button className="btn here red">PALM SPRINGS</button>
              <br></br>
              <br></br>
              <button className="btn here orange">PALM DESERT</button>
            </div>
            <div className="col-4">
              <button className="btn here yellow">CATHEDRAL CITY</button>
              <br></br>
              <br></br>
              <button className="btn here green">INDIO</button>
            </div>
            <div className="col-4">
              <button className="btn here blue">LA QUINTA</button>
              <br></br>
              <br></br>
              <button className="btn here purple">PALM SPRINGS</button>
            </div>
          </div>
        </MediaQuery>
      </div>
    )
  }
}


export default Cities;
