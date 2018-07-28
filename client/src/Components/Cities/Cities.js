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
              <button className="btn here PalmSprings">PALM SPRINGS</button>
              <br></br>
              <button className="btn here RanchoMirage">RANCHO MIRAGE</button>
            </div>

            <div className="col-4">
              <button className="btn here PalmDesert">PALM DESERT</button>
              <br></br>
              <button className="btn here CathedralCity">CATHEDRAL CITY</button>
            </div>

            <div className="col-4">
              <button className="btn here IndianWells">INDIAN WELLS</button>
              <br></br>
              <button className="btn here LaQuinta">LA QUINTA</button>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <button className="btn here Indio">INDIO</button>
              <br></br>
            </div>

            <div className="col-4">
              <button className="btn here HighDesert">HIGH DESERT</button>
              <br></br>
              <button className="btn here DesertHotSprings">DESERT HOT SPRINGS</button>
            </div>

            <div className="col-4">
              <button className="btn here CoachellaValley">COACHELLA VALLEY</button>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery query='(max-width: 767px)'>
          <div className="row">
            <div className="col-4">
              <button className="btn here PalmSprings">PALM SPRINGS</button>
              <br></br>
              <button className="btn here RanchoMirage">RANCHO MIRAGE</button>
            </div>

            <div className="col-4">
              <button className="btn here PalmDesert">PALM DESERT</button>
              <br></br>
              <button className="btn here CathedralCity">CATHEDRAL CITY</button>
            </div>

            <div className="col-4">
              <button className="btn here IndianWells">INDIAN WELLS</button>
              <br></br>
              <button className="btn here LaQuinta">LA QUINTA</button>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <button className="btn here Indio">INDIO</button>
              <br></br>
            </div>

            <div className="col-4">
              <button className="btn here HighDesert">HIGH DESERT</button>
              <br></br>
              <button className="btn here DesertHotSprings">DESERT HOT SPRINGS</button>
            </div>

            <div className="col-4">
              <button className="btn here CoachellaValley">COACHELLA VALLEY</button>
            </div>
          </div>
        </MediaQuery>
      </div>
    )
  }
}


export default Cities;
