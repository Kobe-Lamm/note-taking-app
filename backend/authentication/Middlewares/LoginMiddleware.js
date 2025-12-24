// Logging in requires: username, email, password
// Ensure user inputs are correct: username are correct, email is correct, password is correctly typed
// Checks that user inputs are correctly formatted: removes username spaces, email is correct
const isEmailCorrect =  (req, res, next) => {
    next();
};
const isUsernameCorrect = () => {
    next();
};
// Sanitizes user inputs

// exports
module.exports = {
    isEmailCorrect,
    isUsernameCorrect,
}