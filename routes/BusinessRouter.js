const express = require('express');
const businessController = require('../controllers/businessController');

const router = express.Router();

router.route('/api/business/:name').get(businessController.get);
router.route('/api/business').post(businessController.post);

module.exports = router;
