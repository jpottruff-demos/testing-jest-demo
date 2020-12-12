
const axios = require('axios');
const functions = {
    add: (num1, num2) => num1 + num2,
    // add: (num1, num2) => num1 + num2 + 1,
    isNull: () => null,
    isUndefined: () => undefined,
    checkValue: x => x,
    createUser: () => {
        const user = {fname: 'Joe', lname: 'John'};
        return user;
    },
}

module.exports = functions;