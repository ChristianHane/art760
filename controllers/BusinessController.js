const db = require("../models");

async function get(req, res) {
  try {
    const business = await db.Business.find({ category: req.params.name });

    res.status(200).json(business);
  } catch (err) {
    throw err;
  }
}

async function post(req, res) {
  const {
    name,
    streetAdress,
    zipCode,
    phone,
    website,
    category
  } = req.body;
  try {
    const business = await db.Game.create({
      name,
      streetAdress,
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
