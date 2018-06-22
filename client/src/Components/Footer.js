import React, {Component} from 'react';
var iconStyle={
    padding: "20px",
    width: "50px",
    background: "#3B5998",
    color: 'white'
}
var iconStyle2={
    padding: "20px",
    width: "50px",
    background: '#55ACEE',
    color: 'white'
}

class Footer extends Component {
  render(){
    return(

      <div className="container-fluid">
          <div className="col-md-4">
            <p>ART760 - The K I P Group</p>
            <p>1775 East Palm Canyon Drive Ste 110-250</p>
            <p>Palm Springs, CA 92264</p>
            <p>VM/Txt/Fax: 760.837.1800 ext 4</p>
          </div>
          <div className="col-md-4">
            <p>kip@art760.com</p>
            <p>www.art760.com</p>
            <a href="" style={iconStyle}class="fa fa-facebook"></a>
            <a href="#" style={iconStyle2} class="fa fa-twitter"></a>
          </div>
          <div className="col-md-4">

          </div>
      </div>
    )
  }
}

export default Footer;
