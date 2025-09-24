const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create a new product
exports.createProduct = async (req, res) => {
    const { name, description, price, stock } = req.body;
    try {
        const product = await prisma.product.create({
            data: {
                name,
                description,
                price,
                stock,
            },
        });
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create product' });
    }
};

// Get all products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await prisma.product.findMany();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve products' });
    }
};

// Get a single product by ID
exports.getProductById = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await prisma.product.findUnique({
            where: { id: Number(id) },
        });
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve product' });
    }
};

// Update a product
exports.updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, description, price, stock } = req.body;
    try {
        const product = await prisma.product.update({
            where: { id: Number(id) },
            data: {
                name,
                description,
                price,
                stock,
            },
        });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update product' });
    }
};

// Delete a product
exports.deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.product.delete({
            where: { id: Number(id) },
        });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete product' });
    }
};