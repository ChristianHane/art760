import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ResultCard extends Component {
  render() {
    const business = this.props.business;
    console.log(business);
    return(
      <li className="list-group-item">
        <div className={business.city}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p>Business Name: {business.name}</p>
                <p>Address: {`${business.streetAddress} ${business.suite} ${business.city}`}</p>
                <p>Phone: {business.phone}</p>
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
