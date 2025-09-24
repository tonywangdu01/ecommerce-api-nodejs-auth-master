const express = require('express');
const { createOrder, getOrder } = require('../controllers/orderController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Route to create a new order
router.post('/', authMiddleware, createOrder);

// Route to get an order by ID
router.get('/:id', authMiddleware, getOrder);

module.exports = router;