// Importing dependencies
const AuthRouter = require('express').Router();

// Routes:
AuthRouter.get("/login")
AuthRouter.get("/signup");
AuthRouter.get("/signout")


// Exporting
module.exports = AuthRouter;