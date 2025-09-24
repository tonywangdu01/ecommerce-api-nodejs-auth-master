const prisma = require('../prisma/client');

// Create a new order
exports.createOrder = async (req, res) => {
    const { userId, productId, quantity } = req.body;

    try {
        const order = await prisma.order.create({
            data: {
                userId,
                productId,
                quantity,
            },
        });
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create order' });
    }
};

// Get all orders for a user
exports.getUserOrders = async (req, res) => {
    const userId = req.user.id;

    try {
        const orders = await prisma.order.findMany({
            where: { userId },
        });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve orders' });
    }
};

// Get a specific order by ID
exports.getOrderById = async (req, res) => {
    const { id } = req.params;

    try {
        const order = await prisma.order.findUnique({
            where: { id: Number(id) },
        });
        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve order' });
    }
};