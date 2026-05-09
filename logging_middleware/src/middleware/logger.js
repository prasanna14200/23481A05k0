const axios = require("axios");
const config = require("../config");

async function Log(stack, level, packageName, message) {

    try {

        const response = await axios.post(

            config.LOG_API_URL,

            {
                stack: stack,
                level: level,
                package: packageName,
                message: message
            },

            {
                headers: {
                    Authorization: `Bearer ${config.AUTH_TOKEN}`,
                    "Content-Type": "application/json"
                }
            }
        );

        console.log("Log Sent Successfully");
        console.log(response.data);

    } catch (error) {

        console.log(
            "Logging Failed:",
            error.response?.data || error.message
        );

    }
}

module.exports = Log;