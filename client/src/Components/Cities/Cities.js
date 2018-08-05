import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Cities.css';
import MediaQuery from 'react-responsive';
class Cities extends Component {
  render(){
    return(
      <div className="cities">
        <p className="intro">THIS IS A COLOR CODED ALPHABETICAL LISTING OF ALL THE VENUES, GALLERIES, SHOPS, RESTAURANTS AND EVERYTHING ELSE THE PALM SPRINGS AREA HAS TO OFFER</p>
        <MediaQuery query='(min-width: 768px)'>
          <div className="row rowA">
            <div className="col-4">
              <Link to='/results?type=city&city=Palm Springs' ><button className="btn here2 PalmSprings">PALM SPRINGS</button></Link>
              <br></br>

              <Link to='/results?type=city&city=Rancho Mirage' ><button className="btn here2 RanchoMirage">RANCHO MIRAGE</button></Link>
            </div>

            <div className="col-4">
              <Link to='/results?type=city&city=Palm Desert' ><button className="btn here2 PalmDesert">PALM DESERT</button></Link>
              <br></br>

              <Link to='/results?type=city&city=Cathedral City' ><button className="btn here2 CathedralCity">CATHEDRAL CITY</button></Link>
            </div>

            <div className="col-4">
              <Link to='/results?type=city&city=Indian Wells' ><button className="btn here2 IndianWells">INDIAN WELLS</button></Link>
              <br></br>

              <Link to='/results?type=city&city=La Quinta' ><button className="btn here2 LaQuinta">LA QUINTA</button></Link>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <Link to='/results?type=city&city=Indio' ><button className="btn here2 Indio">INDIO</button></Link>
              <br></br>

              <Link to='/results?type=city&city=Desert Hot Springs' ><button className="btn here2 DesertHotSprings">DESERT HOT SPRINGS</button></Link>

            </div>

            <div className="col-4">
              <Link to='/results?type=city&city=High Desert' ><button className="btn here2 HighDesert">HIGH DESERT</button></Link>
              <br></br>

              <Link to='/results?type=city&city=Coachella' ><button className="btn here2 CoachellaValley">COACHELLA VALLEY</button></Link>

            </div>

            <div className="col-4">
              <Link to="/results?type=city&city=Idyllwild"><button className="btn here2 Idyllwild">IDYLLWILD</button></Link>
            </div>
          </div>
        </MediaQuery>
        <MediaQuery query='(max-width: 767px)'>
          <div className="row rowB">
            <div className="col-4">
              <Link to='/results?type=city&city=Palm Springs' ><button className="btn here3 PalmSprings">PALM SPRINGS</button></Link>
              <br></br>

              <Link to='/results?type=city&city=Rancho Mirage' ><button className="btn here3 RanchoMirage">RANCHO MIRAGE</button></Link>

            </div>

            <div className="col-4">

              <Link to='/results?type=city&city=Palm Desert' ><button className="btn here3 PalmDesert">PALM DESERT</button></Link>
              <br></br>
              <Link to='/results?type=city&city=Cathedral City' ><button className="btn here3 CathedralCity">CATHEDRAL CITY</button></Link>

            </div>

            <div className="col-4">

              <Link to='/results?type=city&city=Indian Wells' ><button className="btn here3 IndianWells">INDIAN WELLS</button></Link>
              <br></br>
              <Link to='/results?type=city&city=La Quinta' ><button className="btn here3 LaQuinta">LA QUINTA</button></Link>

            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <Link to='/results?type=city&city=Indio' ><button className="btn here3 Indio">INDIO</button></Link>
              <br></br>

              <Link to='/results?type=city&city=Desert Hot Springs' ><button className="btn here3 DesertHotSprings"><span className="dHS">DESERT HOT SPRINGS</span></button></Link>

            </div>

            <div className="col-4">
              <Link to='/results?type=city&city=High Desert' ><button className="btn here3 HighDesert">HIGH DESERT</button></Link>
              <br></br>

              <Link to='/results?type=city&city=Coachella' ><button className="btn here3 CoachellaValley">COACHELLA VALLEY</button></Link>

            </div>

            <div className="col-4">
              <Link to="/results?type=city&city=Idyllwild"><button className="btn here3 Idyllwild">IDYLLWILD</button></Link>
            </div>
          </div>
        </MediaQuery>
      </div>
    )
  }
}


export default Cities;
