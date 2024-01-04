// --- Directions
// Get the user https://1m5znk06yb.execute-api.eu-central-1.amazonaws.com/api/users/bartosz from code and print the response
const axios = require('axios');
axios.get('https://1m5znk06yb.execute-api.eu-central-1.amazonaws.com/api/users/bartosz')
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.log(error);
    });