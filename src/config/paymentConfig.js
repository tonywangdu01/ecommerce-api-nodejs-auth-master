module.exports = {
    stripe: {
        apiKey: process.env.STRIPE_API_KEY,
        webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
    },
    paypal: {
        clientId: process.env.PAYPAL_CLIENT_ID,
        clientSecret: process.env.PAYPAL_CLIENT_SECRET,
        mode: process.env.PAYPAL_MODE || 'sandbox', // or 'live'
    },
};