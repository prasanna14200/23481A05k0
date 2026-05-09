const express = require("express");

const app = express();

const schedulerRoutes = require("./routes/schedulerRoutes");

app.use(express.json());

app.use("/api/scheduler", schedulerRoutes);

module.exports = app;