const { PrismaClient } = require('@prisma/client');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const prisma = new PrismaClient();

exports.processPayment = async (req, res) => {
    const { amount, currency, source } = req.body;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency,
            payment_method: source,
            confirm: true,
        });

        // Save payment details to the database
        await prisma.payment.create({
            data: {
                amount: paymentIntent.amount,
                currency: paymentIntent.currency,
                status: paymentIntent.status,
                userId: req.user.id, // Assuming user ID is available in req.user
            },
        });

        res.status(200).json({
            success: true,
            message: 'Payment processed successfully',
            paymentIntent,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Payment processing failed',
            error: error.message,
        });
    }
};

exports.getPaymentHistory = async (req, res) => {
    try {
        const payments = await prisma.payment.findMany({
            where: {
                userId: req.user.id, // Assuming user ID is available in req.user
            },
        });

        res.status(200).json({
            success: true,
            payments,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to retrieve payment history',
            error: error.message,
        });
    }
};