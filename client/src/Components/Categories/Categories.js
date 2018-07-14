import React,  { Component } from 'react';
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
class Categories extends Component {
  render(){
    return(
      <div className="container clearfix">
        <hr className="line"></hr>
        <hr className="line2"></hr>
        <MediaQuery query='(min-width:768px)'>
          <div className="row fixme">
            <div className="col-2">
            </div>
            <div className="col-2">
              <img className="img-responsive categoryIcons " src={museum}/>
              <br></br>
              <h5>MUSEUMS</h5>
            </div>
            <div className="col-2">
              <img className="img-responsive categoryIcons " src={art}/>
              <br></br>
              <h7>ART GALLERIES</h7>
            </div>
            <div className="col-2">
              <img className="img-responsive categoryIcons " src={events}/>
              <br></br>
              <h7>EVENTS & TOURS</h7>
            </div>
            <div className="col-2">
              <img className="img-responsive categoryIcons " src={entertainment}/>
              <br></br>
              <h7>LIVE ENTERTAINMENT</h7>
            </div>
            <div className="col-2">
            </div>
          </div>
          <br></br>
          <div className="row">
            <div className="col-2">
            </div>
            <div className="col-2">
              <img className="img-responsive categoryIcons " src={organization}/>
              <br></br>
              <h7>ORGANIZATIONS</h7>
            </div>
            <div className="col-2">
              <img className="img-responsive categoryIcons " src={film}/>
              <br></br>
              <h7>FILM & MOVIES</h7>
            </div>
            <div className="col-2">
              <img className="img-responsive categoryIcons " src={retail}/>
              <br></br>
              <h7>RETAIL/OTHER</h7>
            </div>
            <div className="col-2">
              <img className="img-responsive categoryIcons " src={theatre}/>
              <br></br>
              <h7>THEATRE & STAGE</h7>
            </div>
            <div className="col-2">
            </div>
          </div>

        </MediaQuery>
        <MediaQuery query='(max-width:768px)'>
          <div className="row fixme">
            <div className="col-2">
            </div>
            <div className="col-2">
              <img className="img-responsive categoryIcons " src={museum}/>
              <br></br>
              <h5 className="categoryTitle">MUSEUMS</h5>
            </div>
            <div className="col-2">
              <img className="img-responsive categoryIcons " src={art}/>
              <br></br>
              <h7>ART GALLERIES</h7>
            </div>
            <div className="col-2">
              <img className="img-responsive categoryIcons " src={events}/>
              <br></br>
              <h7>EVENTS & TOURS</h7>
            </div>
            <div className="col-2">
              <img className="img-responsive categoryIcons " src={entertainment}/>
              <br></br>
              <h7>LIVE ENTERTAINMENT</h7>
            </div>
            <div className="col-2">
            </div>
          </div>
          <br></br>
          <div className="row">
            <div className="col-2">
            </div>
            <div className="col-2">
              <img className="img-responsive categoryIcons" src={organization}/>
              <br></br>
              <h7>ORGANIZATIONS</h7>
            </div>
            <div className="col-2">
              <img className="img-responsive categoryIcons " src={film}/>
              <br></br>
              <h7>FILM & MOVIES</h7>
            </div>
            <div className="col-2">
              <img className="img-responsive categoryIcons " src={retail}/>
              <br></br>
              <h7>RETAIL/OTHER</h7>
            </div>
            <div className="col-2">
              <img className="img-responsive categoryIcons " src={theatre}/>
              <br></br>
              <h7>THEATRE & STAGE</h7>
            </div>
            <div className="col-2">
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
// <MediaQuery query='(min-width:768px)'>
//   <div className="col-xs-12 col-md-12 float-left">
//     <hr className="line"></hr>
//     <hr className="line2"></hr>
//     <ul className="categoryList">
//       <li><img className="img-responsive" src="http://via.placeholder.com/100x100"/></li>
//       <li><img className="img-responsive" src="http://via.placeholder.com/100x100"/></li>
//       <li><img className="img-responsive" src="http://via.placeholder.com/100x100"/></li>
//       <li><img className="img-responsive" src="http://via.placeholder.com/100x100"/></li>
//       <li><img className="img-responsive" src="http://via.placeholder.com/100x100"/></li>
//       <li><img className="img-responsive" src="http://via.placeholder.com/100x100"/></li>
//       <li><img className="img-responsive" src="http://via.placeholder.com/100x100"/></li>
//       <li><img className="img-responsive" src="http://via.placeholder.com/100x100"/></li>
//     </ul>
//     <hr className="line"></hr>
//     <hr className="line2"></hr>
//   </div>
// </MediaQuery>
// <MediaQuery query='(max-width:768px)'>
//   <div className="col-12">
//     <hr className="line"></hr>
//     <hr className="line2"></hr>
//     <ul className="categoryList2">
//       <li><img className="img-responsive" src="http://via.placeholder.com/100x100"/></li>
//       <li><img className="img-responsive" src="http://via.placeholder.com/100x100"/></li>
//       <li><img className="img-responsive" src="http://via.placeholder.com/100x100"/></li>
//       <li><img className="img-responsive" src="http://via.placeholder.com/100x100"/></li>
//       <li><img className="img-responsive" src="http://via.placeholder.com/100x100"/></li>
//       <li><img className="img-responsive" src="http://via.placeholder.com/100x100"/></li>
//       <li><img className="img-responsive" src="http://via.placeholder.com/100x100"/></li>
//       <li><img className="img-responsive" src="http://via.placeholder.com/100x100"/></li>
//     </ul>
//     <hr className="line"></hr>
//     <hr className="line2"></hr>
//   </div>
// </MediaQuery>
