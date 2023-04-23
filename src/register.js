const { bcrypt, crypto, User, nodemailer, mongoose, express, createToken, returnUser } = require('../modules');
const router = express.Router();

router.post('/api/signup', async (req, res) => {
    const { userName, email, password, firstName, lastName } = req.body;
    try {
        // Check if a user with the same username already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).send('email already registered');
        }

        // Hash and salt the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create a new user in the database
        const user = new User({
            userName,
            email,
            password: hashedPassword,
            firstName,
            lastName,
        });
        await user.save();

        // Return a success response
        res.status(200).send('User created successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal server error');
    }
});