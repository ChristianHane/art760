import axios from "axios";

export default {
  searchBusinessesByCat: async function(category) {
    try {
      const businesses = await axios.get('/api/businesses/' + category);
      return businesses;
    } catch(err) {
      throw err;
    }
  },
  addBusiness: async function(businessInfo) {
    try {
      console.log(businessInfo);
      const businessAdded = await axios.post('/api/business', businessInfo);
      return businessAdded;
    } catch (err) {
      throw err;
    }
  },
  removeBusiness: async function(businessID) {
    try {
      const removedBusiness = await axios.delete('/api/business', businessID);
      return removedBusiness;
    } catch(err) {
      throw err;
    }
  },
  getAllBusinesses: async function() {
    try {
      const allBusinesses = await axios.get('/api/businesses');
      console.log(allBusinesses.data);
      return allBusinesses.data;
    } catch(err) {
      throw err;
    }
  },
  getCategoryResults: async function(category) {
    try {
      const categoryBusinesses = await axios.get(`/api/businesses/${category}`, {
        category: category,
      })
      return categoryBusinesses.data;
    } catch(err) {
      throw err;
    }
  },
  getCityResults: async function(city) {
    try {
      const cityBusinesses = await axios.get('/api/city', {
        city: city,
      })
      return cityBusinesses;
    } catch(err) {
      throw err;
    }
  }
}
