import express, { Express } from "express";
import { checkStatsByID } from "./services/playerService";

// Initialize Express application
const app: Express = express();

// Define a route
app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.get("/services", (req, res) => {
    let player_id = Number(req.query.id);
    if (player_id <= 3 || player_id > 0) {
        return res.send(checkStatsByID(player_id));
    }
    else {
        return res.send("Error 404");
    }   
});

export default app;

