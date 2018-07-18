import React, { Component } from 'react';
import AddBusinessModal from './AddBusinessModal';
import BusinessCard from './BusinessCard';
import API from '../../utils/API';

class AdminPage extends Component {
  state = {
    businesses: [],
  }

  componentDidMount = async () => {
    try {
      const businesses = await API.getAllBusinesses();
      this.setState({businesses});
    } catch(err) {
      console.log(err);
    }
  }

  render() {
    console.log(this.state);
    return (
      <div className="container">
        <div className="row">
          <div className="col-8">
            <AddBusinessModal />
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <ul className="list-group">
              {this.state.businesses.map(business => {
                return <BusinessCard business={business} />
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default AdminPage;
