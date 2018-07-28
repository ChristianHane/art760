import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import './Categories.css';
import museum from '../../Images/museum.png';
import art from "../../Images/palette.png";
import events from "../../Images/bus.png";
import entertainment from '../../Images/guitar.png';
import organization from '../../Images/organization.png';
import film from '../../Images/film.png';
import retail from '../../Images/retail.png';
import theatre from '../../Images/theatre.png';

const organizationLeft = {
  marginLeft: -30,
}

class Categories extends Component {
  render(){
    return(
      <div className="container clearfix">
        <hr className="line2"></hr>
        <hr className="line"></hr>
          <MediaQuery query='(min-width:768px)'>
            <div className="row fixme">
              <div className="col-3">
                <Link to='/results?type=category&category=Museum' ><img className="img-fluid categoryIcons " src={museum}/></Link>
                <br></br>
                <a href="#"className="btn museum">MUSEUMS</a>
              </div>
              <div className="col-3">
                <Link to='/results?type=category&category=Art Galleries' ><img className="img-fluid categoryIcons " src={art}/></Link>
                <br></br>
                <a href="#" className="btn">ART GALLERIES</a>
              </div>
              <div className="col-3">
                <Link to='/results?type=category&category=Events and Tours' ><img className="img-fluid categoryIcons " src={events}/></Link>
                <br></br>
                <a href="#" className="btn">EVENTS & TOURS</a>
              </div>
              <div className="col-3">
                <Link to='/results?type=category&category=Live Entertainment' ><img className="img-fluid categoryIcons " src={entertainment}/></Link>
                <br></br>
                <a href="#" className="btn">LIVE ENTERTAINMENT</a>
              </div>
            </div>
            <br></br>
            <div className="row">
              <div className="col-3">
                <Link to='/results?type=category&category=Organizations' ><img className="img-fluid float-left categoryIcons compIcons " src={organization}/></Link>
                <br></br>
                <a href="#" className="btn">ORGANIZATIONS</a>
              </div>
              <div className="col-3">
                <Link to='/results?type=category&category=Films and Movies' ><img className="img-fluid categoryIcons compIcons" src={film}/></Link>
                <br></br>
                <a href="#" className="btn">FILM & MOVIES</a>
              </div>
              <div className="col-3">
                <Link to='/results?type=category&category=Retail and Other' ><img className="img-fluid categoryIcons compIcons" src={retail}/></Link>
                <br></br>
                <a href="#" className="btn">RETAIL/OTHER</a>
              </div>
              <div className="col-3">
                <Link to='/results?type=category&category=Theatre and Stage' ><img className="img-fluid categoryIcons compIcons" src={theatre}/></Link>
                <br></br>
                <a href="#" className="btn">THEATRE & STAGE</a>
              </div>
            </div>

          </MediaQuery>
          <MediaQuery query='(max-width:767px)'>
            <div className="row fixme">
              <div className="col-3">
                <img className="img-fluid categoryIcons " src={museum}/>
                <br></br>
                <a href="#" className="btn here">MUSEUM</a>
              </div>
              <div className="col-3">
                <img className="img-fluid categoryIcons " src={art}/>
                <br></br>
                <a href="#" className="btn here">ART GALLERIES</a>
              </div>
              <div className="col-3">
                <img className="img-fluid categoryIcons " src={events}/>
                <br></br>
                <a href="#" className="btn here">EVENTS & TOURS</a>
              </div>
              <div className="col-3">
                <img className="img-fluid categoryIcons " src={entertainment}/>
                <br></br>
                <a href="#" className="btn here">LIVE ENTERTAINMENT</a>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <img className="img-fluid floar-right categoryIcons" src={organization}/>
                <br></br>
                <a href="#" className="btn here" style={organizationLeft}>ORGANIZATIONS</a>
              </div>
              <div className="col-3">
                <img className="img-fluid categoryIcons " src={film}/>
                <br></br>
                <a href="#" className="btn here">FILM & MOVIES</a>
              </div>
              <div className="col-3">
                <img className="img-fluid categoryIcons " src={retail}/>
                <br></br>
                <a href="#" className="btn here">RETAIL/OTHER</a>
              </div>
              <div className="col-3">
                <img className="img-fluid categoryIcons " src={theatre}/>
                <br></br>
                <a href="#" className="btn here">THEATRE & STAGE</a>
              </div>
            </div>

          </MediaQuery>

        <hr className="line"></hr>
        <hr className="line2"></hr>
      </div>
    )
  }
}

export default Categories;
