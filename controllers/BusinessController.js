const db = require("../models");

async function get(req, res) {
  try {
    console.log(req.params);
    const business = await db.Business.find({ category: req.params.category });
    res.status(200).json(business);
  } catch (err) {
    throw err;
  }
}

async function post(req, res) {
  console.log(req.body);
  const { name, streetAddress, suite, zipCode, phone, website, category } = req.body;
  try {
    const business = await db.Business.create({
      name,
      streetAddress,
      suite,
      zipCode,
      phone,
      website,
      category
    });
    res.status(200).json(business);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  get,
  post
};
