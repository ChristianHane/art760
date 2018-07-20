const express = require('express');
const businessController = require('../controllers/businessController');

const router = express.Router();

router.route('/api/businesses/:category?').get(businessController.get);
router.route('/api/category').get(businessController.getByCategory);
router.route('/api/city').get(businessController.getByCity);
router.route('/api/business').post(businessController.post);

module.exports = router;
