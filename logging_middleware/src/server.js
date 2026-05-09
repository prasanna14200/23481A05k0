const app = require("./app");

const startService = require("./services/sampleService");

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

startService();