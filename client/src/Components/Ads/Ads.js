import React, {Component} from 'react';
import ImageResponsive from 'react-image-responsive';
import './Ads.css';
import MediaQuery from 'react-responsive';
const sources = [
  {maxWidth: 189, src:'http://via.placeholder.com/189x125' }
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
                sources={sources}
                height= '125px'
                />
            </figure>
            <figure>
              <ImageResponsive
                width="20%"
                sources={sources}
                height= '125px'
                />
            </figure>
            <figure>
              <ImageResponsive
                width="20%"
                sources={sources}
                height= '125px'
                />
            </figure>
            <figure>
              <ImageResponsive
                width="20%"
                sources={sources}
                height= '125px'
                />
            </figure>
            <figure>
              <ImageResponsive
                width="20%"
                sources={sources}
                height= '125px'
                />
            </figure>
            <figure>
              <ImageResponsive
                width="20%"
                sources={sources}
                height= '125px'
                />
            </figure>
          </div>
        </MediaQuery>
        <MediaQuery query="(max-width:768px)">
          <div className="ads2">
            <figure>
              <ImageResponsive
                width="20%"
                sources={sources}
                height= '125px'
                />
            </figure>
            <figure>
              <ImageResponsive
                width="20%"
                sources={sources}
                height= '125px'
                />
            </figure>
            <figure>
              <ImageResponsive
                width="20%"
                sources={sources}
                height= '125px'
                />
            </figure>
            <figure>
              <ImageResponsive
                width="20%"
                sources={sources}
                height= '125px'
                />
            </figure>
            <figure>
              <ImageResponsive
                width="20%"
                sources={sources}
                height= '125px'
                />
            </figure>
            <figure>
              <ImageResponsive
                width="20%"
                sources={sources}
                height= '125px'
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
