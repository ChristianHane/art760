import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ResultCard.css';
class ResultCard extends Component {
  render() {
    const business = this.props.business;
    var businessCity = business.city.split(" ").join("");
    console.log(business);
    console.log(businessCity);
    return(
      <li className="list-group-item">
        <div className={businessCity}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p> {business.name}</p>
                <p> {`${business.streetAddress} ${business.suite} ${business.city}`}</p>
                <p>{business.phone}</p>
                <a href={business.website} target="_blank">{`Visit ${business.name}'s Website`}</a>
              </div>
            </div>
          </div>
        </div>
      </li>

    )
  }
}

export default ResultCard;
