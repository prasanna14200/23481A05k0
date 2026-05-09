const axios = require("axios");
const config = require("../config");
const access_token = config.access_token
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
                    Authorization: `Bearer ${access_token}`,
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