// Import
const {createHeader} = require('./stars.js');

// Get user input
const [numberOfStars, title] = process.argv.slice(2);

// Return
console.log(createHeader(numberOfStars, title));
