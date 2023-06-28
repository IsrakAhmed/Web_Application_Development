const { v4: uuidv4 } = require('uuid');

const users = [
    {
        id  :   uuidv4(),
        username    :   "Israk Ahmed",
        email       :   "israkahmed7@gmail.com"
    },
    {
        id  :   uuidv4(),
        username    :   "Esrat Jahan Riya",
        email       :   "esratjahanriya1201@gmail.com"
    },
];

module.exports = users;