import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Cities.css';
import MediaQuery from 'react-responsive';
class Cities extends Component {
  render(){
    return(
      <div>
        <MediaQuery query='(min-width: 768px)'>
          <div className="row">
            <div className="col-4">
              <Link to='/results?type=city&city=Palm Springs' ><button className="btn here red">PALM SPRINGS</button></Link>
              <br></br>

              <Link to='/results?type=city&city=Rancho Mirage' ><button className="btn here orange">RANCHO MIRAGE</button></Link>
            </div>
            <div className="col-4">
              <Link to='/results?type=city&city=Palm Desert' ><button className="btn here yellow">PALM DESERT</button></Link>
              <br></br>

              <Link to='/results?type=city&city=Cathedral City' ><button className="btn here green">CATHEDRAL CITY</button></Link>
            </div>
            <div className="col-4">
              <Link to='/results?type=city&city=Indian Wells' ><button className="btn here blue">INDIAN WELLS</button></Link>
              <br></br>

              <Link to='/results?type=city&city=La Quinta' ><button className="btn here purple">LA QUINTA</button></Link>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <Link to='/results?type=city&city=Indio' ><button className="btn here pink">INDIO</button></Link>
              <br></br>

              <Link to='/results?type=city&city=Desert Hot Springs' ><button className="btn here lightgreen">DESERT HOT SPRINGS</button></Link>
            </div>
            <div className="col-4">
              <Link to='/results?type=city&city=High Desert' ><button className="btn here teal">HIGH DESERT</button></Link>
              <br></br>

              <Link to='/results?type=city&city=Coachella' ><button className="btn here black">COACHELLA VALLEY</button></Link>
            </div>
            <div className="col-4">
            </div>
          </div>
        </MediaQuery>
        <MediaQuery query='(max-width: 767px)'>
          <div className="row">
            <div className="col-4">
              <Link to='/results?type=city&city=Palm Springs' ><button className="btn here red">PALM SPRINGS</button></Link>
              <br></br>

              <Link to='/results?type=city&city=Rancho Mirage' ><button className="btn here orange">RANCHO MIRAGE</button></Link>
            </div>
            <div className="col-4">
              <Link to='/results?type=city&city=Palm Desert' ><button className="btn here yellow">PALM DESERT</button></Link>
              <br></br>
              <Link to='/results?type=city&city=Cathedral City' ><button className="btn here green">CATHEDRAL CITY</button></Link>
            </div>
            <div className="col-4">
              <Link to='/results?type=city&city=Indian Wells' ><button className="btn here blue">INDIAN WELLS</button></Link>
              <br></br>
              <Link to='/results?type=city&city=La Quinta' ><button className="btn here purple">LA QUINTA</button></Link>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <Link to='/results?type=city&city=Indio' ><button className="btn here pink">INDIO</button></Link>
              <br></br>

              <Link to='/results?type=city&city=Desert Hot Springs' ><button className="btn here lightgreen">DESERT HOT SPRINGS</button></Link>
            </div>
            <div className="col-4">
              <Link to='/results?type=city&city=High Desert' ><button className="btn here teal">HIGH DESERT</button></Link>
              <br></br>

              <Link to='/results?type=city&city=Coachella' ><button className="btn here black">COACHELLA VALLEY</button></Link>x
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
