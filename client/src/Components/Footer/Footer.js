import React, {Component} from 'react';
import './Footer.css';
// var iconStyle={
//     padding: "20px",
//     width: "50px",
//     background: "#3B5998",
//     color: 'white'
// }
// var iconStyle2={
//     padding: "20px",
//     width: "50px",
//     background: '#55ACEE',
//     color: 'white'
// }

class Footer extends Component {
  render(){
    return(

      <div className="footer">
      <div className="container-fluid  clearfix">
          <div className="float-left">
            <h6>ART760 - The K I P Group</h6>
            <h6>1775 East Palm Canyon Drive Ste 110-250</h6>
            <h6>Palm Springs, CA 92264</h6>
            <h6>VM/Txt/Fax: 760.837.1800 ext 4</h6>
          </div>
          <div >
            <h6>kip@art760.com</h6>
            <h6>www.art760.com</h6>
            <a href=""class="fa fa-facebook iconStyle"></a>
            <a href="#"class="fa fa-twitter iconStyle2"></a>
          </div>
          <div className=" float-right">
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;
