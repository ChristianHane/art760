const axios = require("axios");

function fetchData() {
  return new Promise(async (resolve, reject) => {
    try {
      const business = await axios.get("/api/businesses/art");
      resolve(business);
    } catch(err) {
      console.log(err);
      reject(err);
    }
  })
}

test("business api/business/:category route to return list of businesses with category of art", () => {
  return expect(fetchData()).resolves.toEqual([
    {
      "category": [
        "art"
      ],
      "_id": "5b2b0fb54ae407e07b05ccb3",
      "name": "business",
      "streetAddress": "1234 business st",
      "zipCode": "92201",
      "phone": "760-487-2222",
      "website": "business.com",
      "__v": 0
    }
  ])
})
