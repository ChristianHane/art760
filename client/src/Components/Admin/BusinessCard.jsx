import React, { Component } from 'react';
const btnStyle = {
  marginLeft: 10
}


class BusinessCard extends Component {

  render() {
    const businessCity =  this.props.business.city.split(' ').join("");
    return (
      <li className="list-group-item">
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <div className={businessCity}>
                <p>Business Name:  {this.props.business.name}</p>
                <p>Address:  {`${this.props.business.streetAddress} ${this.props.business.city} ${this.props.business.zipCode}`}</p>
                <p>Website:  {this.props.business.website}</p>
                <p>Phone:  {this.props.business.phone}</p>
                <p>Category: {this.props.business.category}</p>
              </div>
            </div>
            <div className='col-md-6'>
              <button className="btn-primary">Edit</button>
              <button style={btnStyle}className="btn-danger">Remove</button>
            </div>
          </div>
        </div>
      </li>
    )
  }
}

export default BusinessCard;
