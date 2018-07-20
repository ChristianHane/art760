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

              <button className="btn here orange">RANCHO MIRAGE</button>
            </div>
            <div className="col-4">
              <button className="btn here yellow">PALM DESERT</button>
              <br></br>

              <button className="btn here green">CATHEDRAL CITY</button>
            </div>
            <div className="col-4">
              <button className="btn here blue">INDIAN WELLS</button>
              <br></br>

              <button className="btn here purple">LA QUINTA</button>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <button className="btn here pink">INDIO</button>
              <br></br>

              <button className="btn here lightgreen">DESERT HOT SPRINGS</button>
            </div>
            <div className="col-4">
              <button className="btn here teal">HIGH DESERT</button>
              <br></br>

              <button className="btn here black">COACHELLA VALLEY</button>
            </div>
            <div className="col-4">
            </div>
          </div>
        </MediaQuery>
        <MediaQuery query='(max-width: 768px)'>
          <div className="row">
            <div className="col-4">
              <button className="btn here red">PALM SPRINGS</button>
              <br></br>

              <button className="btn here orange">PALM DESERT</button>
            </div>
            <div className="col-4">
              <button className="btn here yellow">CATHEDRAL CITY</button>
              <br></br>
              <button className="btn here green">INDIO</button>
            </div>
            <div className="col-4">
              <button className="btn here blue">LA QUINTA</button>
              <br></br>
              <button className="btn here purple">PALM SPRINGS</button>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <button className="btn here pink">INDIO</button>
              <br></br>

              <button className="btn here lightgreen">DESERT HOT SPRINGS</button>
            </div>
            <div className="col-4">
              <button className="btn here teal">HIGH DESERT</button>
              <br></br>

              <button className="btn here black">COACHELLA VALLEY</button>
            </div>
            <div className="col-4">
            </div>
          </div>
        </MediaQuery>
      </div>
    )
  }
}


export default Cities;
