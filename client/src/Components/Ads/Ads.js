import React, {Component} from 'react';
import ImageResponsive from 'react-image-responsive';
import './Ads.css';
import MediaQuery from 'react-responsive';
import business1 from '../../Images/yourAD.png';
import business2 from '../../Images/yourAD2.png';
// import business3 from '../../Images/business3.jpeg';
// import business4 from '../../Images/business4.jpeg';
// import business5 from '../../Images/business5.jpeg';
// import business6 from '../../Images/business6.jpeg';
const ad1 = [
  {maxWidth: 350, src:business1}
];
const ad2 = [
  {maxWidth: 350, src:business2}
];


class Ads extends Component {
  render(){
    return(
      <div>
        <MediaQuery query='(min-width: 768px)'>
          <div className="ads float-right">
            <figure>
              <ImageResponsive
                width="20%"
                sources={ad1}
                height= '180px'
                />
            </figure>
            <figure>
              <ImageResponsive
                width="20%"
                sources={ad2}
                height= '180px'
                />
            </figure>
            <figure>
              <ImageResponsive
                width="20%"
                sources={ad1}
                height= '180px'
                />
            </figure>
            <figure>
              <ImageResponsive
                width="20%"
                sources={ad2}
                height= '180px'
                />
            </figure>
            <figure>
              <ImageResponsive
                width="20%"
                sources={ad1}
                height= '180px'
                />
            </figure>
            <figure>
              <ImageResponsive
                width="20%"
                sources={ad2}
                height= '180px'
                />
            </figure>
          </div>
        </MediaQuery>
        <MediaQuery query="(max-width:767px)">
          <div className="ads2">
            <figure>
              <ImageResponsive
                width="20%"
                sources={ad1}
                height= '180px'
                />
            </figure>
            <figure>
              <ImageResponsive
                width="20%"
                sources={ad2}
                height= '180px'
                />
            </figure>
            <figure>
              <ImageResponsive
                width="20%"
                sources={ad1}
                height= '180px'
                />
            </figure>
            <figure>
              <ImageResponsive
                width="20%"
                sources={ad2}
                height= '180px'
                />
            </figure>
            <figure>
              <ImageResponsive
                width="20%"
                sources={ad1}
                height= '180px'
                />
            </figure>
            <figure>
              <ImageResponsive
                width="20%"
                sources={ad2}
                height= '180px'
                />
            </figure>
          </div>

        </MediaQuery>


      </div>

    )
  }
}
 export default Ads;

            //  <img className="img-responsive" src="http://via.placeholder.com/189x125"/>
            //  <br></br>
            //  <br></br>
            //  <img className="img-responsive" src="http://via.placeholder.com/189x125"/>
            //  <br></br>
            //  <br></br>
            //  <img className="img-responsive" src="http://via.placeholder.com/189x125"/>
            //  <br></br>
            //  <br></br>
            //  <img className="img-responsive" src="http://via.placeholder.com/189x125"/>
            //  <br></br>
            //  <br></br>
            //  <img className="img-responsive" src="http://via.placeholder.com/189x125"/>
            //  <br></br>
            //  <br></br>
            //    <img className="img-responsive" src="http://via.placeholder.com/189x125"/>
            //    <br></br>
            //    <br></br>
