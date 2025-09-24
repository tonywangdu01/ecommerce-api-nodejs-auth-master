const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');

// Route for processing payments
router.post('/process', paymentController.processPayment);

// Route for retrieving payment status
router.get('/status/:paymentId', paymentController.getPaymentStatus);

module.exports = router;