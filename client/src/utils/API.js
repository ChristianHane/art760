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
  }
}
