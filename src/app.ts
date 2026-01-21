import express, { Express } from "express";

// Initialize Express application
const app: Express = express();

// Define a route
app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.get("/services", (req, res) => {
    res.send("Hello, Services!");
});


export default app;

