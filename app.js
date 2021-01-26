const axios = require('axios');

const data = {
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
};

axios.post('https://reqres.in/api/login', data)
    .then((res) => {
        console.log(`Status: ${res.status}`);
        console.log('Body: ', res.data);
    }).catch((err) => {
        console.error(err);
    });
