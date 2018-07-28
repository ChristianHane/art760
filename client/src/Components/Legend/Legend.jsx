import React, {Component} from 'react';
import MediaQuery from 'react-responsive';
import { ListGroup, ListGroupItem } from 'reactstrap';
class Legend extends Component {
  render(){
    return(
      <div className="float-right">
        <MediaQuery query="(min-width: 768px)">
          <ListGroup>
            <ListGroupItem><span className="PalmSprings">Palm Springs</span></ListGroupItem>
            <ListGroupItem><span className="RanchoMirage">Rancho Mirage</span></ListGroupItem>
            <ListGroupItem><span className="PalmDesert">Palm Desert</span></ListGroupItem>
            <ListGroupItem><span className="CathedralCity">Cathedral City</span></ListGroupItem>
            <ListGroupItem><span className="IndianWells">Indian Wells</span></ListGroupItem>
            <ListGroupItem><span className="LaQuinta">La Quinta</span></ListGroupItem>
            <ListGroupItem><span className="Indio">Indio</span></ListGroupItem>
            <ListGroupItem><span className="HighDesert">High Desert</span></ListGroupItem>
            <ListGroupItem><span className="DesertHotSprings">Desert Hot Springs</span></ListGroupItem>
            <ListGroupItem><span className="CoachellaValley">Coachella Valley</span></ListGroupItem>
            <ListGroupItem><span className="Idyllwild">Idyllwild</span></ListGroupItem>
          </ListGroup>
        </MediaQuery>
        <MediaQuery query="(max-width: 767px)">
          <ListGroup>
            <ListGroupItem><span className="PalmSprings">Palm Springs</span></ListGroupItem>
            <ListGroupItem><span className="RanchoMirage">Rancho Mirage</span></ListGroupItem>
            <ListGroupItem><span className="PalmDesert">Palm Desert</span></ListGroupItem>
            <ListGroupItem><span className="CathedralCity">Cathedral City</span></ListGroupItem>
            <ListGroupItem><span className="IndianWells">Indian Wells</span></ListGroupItem>
            <ListGroupItem><span className="LaQuinta">La Quinta</span></ListGroupItem>
            <ListGroupItem><span className="Indio">Indio</span></ListGroupItem>
            <ListGroupItem><span className="HighDesert">High Desert</span></ListGroupItem>
            <ListGroupItem><span className="DesertHotSprings">Desert Hot Springs</span></ListGroupItem>
            <ListGroupItem><span className="CoachellaValley">Coachella Valley</span></ListGroupItem>
            <ListGroupItem><span className="Idyllwild">Idyllwild</span></ListGroupItem>
          </ListGroup>
        </MediaQuery>
      </div>
    )
  }
}

export default Legend;
