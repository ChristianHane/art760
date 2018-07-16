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
      <div>
        <AddBusinessModal />
        {this.state.businesses.map(business => {
          return <BusinessCard business={business} />
        })}
      </div>
    )
  }
}

export default AdminPage;
