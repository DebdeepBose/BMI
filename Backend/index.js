const express = require("express");
const app = express();

// Middleware to parse JSON data
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend is running!");
});

// Test API to receive data
app.post("/test", (req, res) => {
    console.log(req.body); // Logs the received JSON data
    res.send({ message: "Data received", data: req.body });
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
