import React,  { Component } from 'react';
import MediaQuery from 'react-responsive';
import './Categories.css';

class Categories extends Component {
  render(){
    return(
      <div className="container clearfix">
        <hr className="line"></hr>
        <hr className="line2"></hr>
        <MediaQuery query='(min-width:768px)'>
          <div className="row">
            <div className="col-2">
            </div>
            <div className="col-2">
              <img className="img-responsive" src="http://via.placeholder.com/100x100"/>
            </div>
            <div className="col-2">
              <img className="img-responsive" src="http://via.placeholder.com/100x100"/>
            </div>
            <div className="col-2">
              <img className="img-responsive" src="http://via.placeholder.com/100x100"/>
            </div>
            <div className="col-2">
              <img className="img-responsive" src="http://via.placeholder.com/100x100"/>
            </div>
            <div className="col-2">
            </div>
          </div>
          <br></br>
          <div className="row">
            <div className="col-2">
            </div>
            <div className="col-2">
              <img className="img-responsive" src="http://via.placeholder.com/100x100"/>
            </div>
            <div className="col-2">
              <img className="img-responsive" src="http://via.placeholder.com/100x100"/>
            </div>
            <div className="col-2">
              <img className="img-responsive" src="http://via.placeholder.com/100x100"/>
            </div>
            <div className="col-2">
              <img className="img-responsive" src="http://via.placeholder.com/100x100"/>
            </div>
            <div className="col-2">
            </div>
          </div>

        </MediaQuery>
        <MediaQuery query='(max-width:768px)'>
          <div className="row">
            <div className="col-2">
            </div>
            <div className="col-2">
              <img className="img-responsive" src="http://via.placeholder.com/100x100"/>
            </div>
            <div className="col-2">
              <img className="img-responsive" src="http://via.placeholder.com/100x100"/>
            </div>
            <div className="col-2">
              <img className="img-responsive" src="http://via.placeholder.com/100x100"/>
            </div>
            <div className="col-2">
              <img className="img-responsive" src="http://via.placeholder.com/100x100"/>
            </div>
            <div className="col-2">
            </div>
          </div>
          <br></br>
          <div className="row">
            <div className="col-2">
            </div>
            <div className="col-2">
              <img className="img-responsive" src="http://via.placeholder.com/100x100"/>
            </div>
            <div className="col-2">
              <img className="img-responsive" src="http://via.placeholder.com/100x100"/>
            </div>
            <div className="col-2">
              <img className="img-responsive" src="http://via.placeholder.com/100x100"/>
            </div>
            <div className="col-2">
              <img className="img-responsive" src="http://via.placeholder.com/100x100"/>
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
