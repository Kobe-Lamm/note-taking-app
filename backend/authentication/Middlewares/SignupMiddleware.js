
const isPasswordStrong = (req, res, next) => {
    // Getting user input from request body:
    const { password, confirmPassword} = req.body;
    if (password.length < 7) {
        res.status(500).json({msg: "Invalid password formatting"})
    }
    next()
}