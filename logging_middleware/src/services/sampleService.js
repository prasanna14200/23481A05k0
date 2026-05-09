const Log = require("../middleware/logger");

async function startService() {

    await Log(
        "backend",
        "info",
        "service",
        "Backend service started successfully"
    );

    console.log("Service Running");

}

module.exports = startService;