const axios = require('axios');

const asyncFunctions = {
    fetchUser: () => {
        return axios
            .get('https://jsonplaceholder.typicode.com/users/1')
            .then(res => res.data)
            .catch(err => `There was a problem: ${err}`)
    }
};

module.exports = asyncFunctions;