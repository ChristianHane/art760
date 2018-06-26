import React,  { Component } from 'react';
import './Categories.css';

class Categories extends Component {
  render(){
    return(
      <div className="container clearfix categories">

        <div className="col-sm-8 float-left">
          <hr className="line"></hr>
          <hr className="line2"></hr>
          <ul className="categoryList">
            <li><a href=""><img className="img-responsive" src="http://via.placeholder.com/100x100"/></a></li>
            <li><a href=""><img className="img-responsive" src="http://via.placeholder.com/100x100"/></a></li>
            <li><a href=""><img className="img-responsive" src="http://via.placeholder.com/100x100"/></a></li>
            <li><a href=""><img className="img-responsive" src="http://via.placeholder.com/100x100"/></a></li>
          </ul>
          <br></br>
          <ul className="categoryList">
            <li><a href=""><img className="img-responsive" src="http://via.placeholder.com/100x100"/></a></li>
            <li><a href=""><img className="img-responsive" src="http://via.placeholder.com/100x100"/></a></li>
            <li><a href=""><img className="img-responsive" src="http://via.placeholder.com/100x100"/></a></li>
            <li><a href=""><img className="img-responsive" src="http://via.placeholder.com/100x100"/></a></li>
          </ul>
          <hr className="line"></hr>
          <hr className="line2"></hr>
        </div>

      </div>
    )
  }
}

export default Categories;
