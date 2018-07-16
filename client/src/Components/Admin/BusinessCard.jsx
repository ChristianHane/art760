import React, { Component } from 'react';

class BusinessCard extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <p>{this.props.business.name}</p>
            <p>{`${this.props.business.streetAddress} ${this.props.business.city} ${this.props.business.zipCode}`}</p>
          </div>
          <div className='col-md-6'>
            
          </div>
        </div>
      </div> 
    )
  }
}

export default BusinessCard;
