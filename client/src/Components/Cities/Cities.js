import React, {Component} from 'react';
import './Cities.css';
import MediaQuery from 'react-responsive';
class Cities extends Component {
  render(){
    return(
      <div className="cities">
        <p className="intro">THIS IS A COLOR CODED ALPHABETICAL LISTING OF ALL THE VENUES, GALLERIES, SHOPS, RESTAURANTS AND EVERYTHING ELSE THE PALM SPRINGS AREA HAS TO OFFER</p>
        <MediaQuery query='(min-width: 768px)'>
          <div className="row">
            <div className="col-4">
              <button className="btn here2 PalmSprings">PALM SPRINGS</button>
              <br></br>
              <button className="btn here2 RanchoMirage">RANCHO MIRAGE</button>
            </div>

            <div className="col-4">
              <button className="btn here2 PalmDesert">PALM DESERT</button>
              <br></br>
              <button className="btn here2 CathedralCity">CATHEDRAL CITY</button>
            </div>

            <div className="col-4">
              <button className="btn here2 IndianWells">INDIAN WELLS</button>
              <br></br>
              <button className="btn here2 LaQuinta">LA QUINTA</button>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <button className="btn here2 Indio">INDIO</button>
              <br></br>
              <button className="btn here2 Idyllwild">IDYLLWILD</button>
            </div>

            <div className="col-4">
              <button className="btn here2 HighDesert">HIGH DESERT</button>
              <br></br>
              <button className="btn here2 DesertHotSprings">DESERT HOT SPRINGS</button>
            </div>

            <div className="col-4">
              <button className="btn here2 CoachellaValley">COACHELLA VALLEY</button>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery query='(max-width: 767px)'>
          <div className="row">
            <div className="col-4">
              <button className="btn here2 PalmSprings">PALM SPRINGS</button>
              <br></br>
              <button className="btn here2 RanchoMirage">RANCHO MIRAGE</button>
            </div>

            <div className="col-4">
              <button className="btn here2 PalmDesert">PALM DESERT</button>
              <br></br>
              <button className="btn here2 CathedralCity">CATHEDRAL CITY</button>
            </div>

            <div className="col-4">
              <button className="btn here2 IndianWells">INDIAN WELLS</button>
              <br></br>
              <button className="btn here2 LaQuinta">LA QUINTA</button>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <button className="btn here2 Indio">INDIO</button>
              <br></br>
              <button className="btn here2 Idyllwild">IDYLLWILD</button>
            </div>

            <div className="col-4">
              <button className="btn here2 HighDesert">HIGH DESERT</button>
              <br></br>
              <button className="btn here2 DesertHotSprings">DESERT HOT SPRINGS</button>
            </div>

            <div className="col-4">
              <button className="btn here2 CoachellaValley">COACHELLA VALLEY</button>
            </div>
          </div>
        </MediaQuery>
      </div>
    )
  }
}


export default Cities;
