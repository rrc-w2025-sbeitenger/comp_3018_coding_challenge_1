import express, { Express } from "express";
import { checkStatsByID } from "./services/playerService";

// Initialize Express application
const app: Express = express();

// Define a route
app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.get("/services", (req, res) => {
    let player_id = req.query.id;
    res.send(checkStatsByID(Number(player_id)));    
});

export default app;

