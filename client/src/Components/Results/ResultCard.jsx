import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ResultCard extends Component {
  render() {
    const business = this.props.business;
    console.log(business);
    return(
      <div className={business.city}>
        <span>{business.name}</span>
        <span>{`${business.streetAddress} ${business.suite} ${business.city}`}</span>
        <span>{business.phone}</span>
        <Link to={business.website} target="_blank">{`Visit ${business.name}'s Website`}</Link>
      </div>
    )
  }
}

export default ResultCard;
