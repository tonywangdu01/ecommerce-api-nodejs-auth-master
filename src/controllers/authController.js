const prisma = require('../prisma/client');
const jwt = require('../utils/jwt');

// User sign-up
exports.signup = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await prisma.user.create({
            data: {
                email,
                password, // In a real application, make sure to hash the password
            },
        });

        const token = jwt.generateToken(user.id);
        res.status(201).json({ user, token });
    } catch (error) {
        res.status(500).json({ error: 'User registration failed' });
    }
};

// User login
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await prisma.user.findUnique({ where: { email } });

        if (!user || user.password !== password) { // In a real application, compare hashed passwords
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = jwt.generateToken(user.id);
        res.status(200).json({ user, token });
    } catch (error) {
        res.status(500).json({ error: 'Login failed' });
    }
};