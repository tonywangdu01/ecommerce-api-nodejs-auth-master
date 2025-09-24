const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware');

// Route to get all products
router.get('/', productController.getAllProducts);

// Route to get a single product by ID
router.get('/:id', productController.getProductById);

// Route to create a new product
router.post('/', authMiddleware, productController.createProduct);

// Route to update a product by ID
router.put('/:id', authMiddleware, productController.updateProduct);

// Route to delete a product by ID
router.delete('/:id', authMiddleware, productController.deleteProduct);

module.exports = router;