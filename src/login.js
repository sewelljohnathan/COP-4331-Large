/*router.post('/api/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Look up the user in the database
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).send('Invalid email or password');
        }

        // Compare the password hash
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send('Invalid username or password');
        }

        // Create a JWT token
        const token = createToken(user._id, user.email);

        // Send the token to the client
        res.json({ token : token, firstName :user.firstName, userName: user.email});

    } catch (err) {
        console.error(err);
        res.status(500).send('Internal server error');
    }
});
*/
