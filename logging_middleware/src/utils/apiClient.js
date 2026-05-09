const axios = require("axios");

const api = axios.create({
    baseURL: "http://YOUR_API_BASE_URL",
    timeout: 5000
});

module.exports = api;