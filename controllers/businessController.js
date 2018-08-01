const db = require("../models");

async function get(req, res) {
  if (req.params.category) {
    try {
      const business = await db.Business.find({ category: req.params.category });
      res.status(200).json(business);
    } catch (err) {
      throw err;
    }
  } else {
    try {
      const businesses = await db.Business.find({});
      res.status(200).json(businesses);
    } catch(err) {
      throw err;
    }
  }
}

async function post(req, res) {
  console.log(req.body);
  const { name, streetAddress, city, suite, zipCode, phone, website, email, category } = req.body;
  try {
    const business = await db.Business.create({
      name,
      streetAddress,
      suite,
      city,
      zipCode,
      phone,
      website,
      email,
      category
    });
    res.status(200).json(business);
  } catch (err) {
    console.log(err);
  }
}

async function getByCategory(req, res) {
  if (req.params.category) {
    try {
      const business = await db.Business.find({ category: req.params.category });
      res.status(200).json(business);
    } catch (err) {
      throw err;
    }
  } else {
    try {
      const businesses = await db.Business.find({});
      res.status(200).json(businesses);
    } catch(err) {
      throw err;
    }
  }
}

async function getByCity(req, res) {
  if (req.params.category) {
    try {
      const business = await db.Business.find({ category: req.params.category });
      res.status(200).json(business);
    } catch (err) {
      throw err;
    }
  } else {
    try {
      const businesses = await db.Business.find({});
      res.status(200).json(businesses);
    } catch(err) {
      throw err;
    }
  }
}

module.exports = {
  get,
  post,
  getByCategory,
  getByCity
};
