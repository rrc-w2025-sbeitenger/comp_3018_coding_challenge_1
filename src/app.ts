import express, { Express } from "express";
import { allPlayerData } from "./services/playerService";
import {rating} from "./services/playerService";
//Initialize Express application
const app: Express = express();

/*
*player interface
*/
export interface Player{
    id: number;
    name: string;
    wins: number;
    losses: number;
    totalScore: number;
}

/*
*health check interface
*/
interface healthCheckResponse {
    status: String;
    uptime: Number;
    timestamp: String;
    version: String;
}

export const player: Player[] = [
    {
        id: 1,
        name: 'ShadowStrike',
        wins: 15,
        losses: 5,
        totalScore: 28500
    },
    {
        id:2,
        name:'NoobMaster',
        wins: 3,
        losses: 12,
        totalScore: 4200
    },
    {
        id:3,
        name:'Progamer99',
        wins: 0,
        losses: 0,
        totalScore: 0
    }
]

app.get("/api/v1/health", (req, res) => {
    //response object that matches our healthCheckResponse interface.
    const healthData: healthCheckResponse = {
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0"
    }

    res.json(healthData);
});

app.get("/api/v1/players/:id/rating", (req, res) => {
    let playerId = Number(req.query.id);
    let playerObject = player[playerId];
    const playerRating = rating(playerObject);
    res.send(playerRating);
});

app.get("/api/v1/players", (req, res) => {
    const player = allPlayerData();

    if(!player){
        res.status(404)
    }
    res.json(player)
});

export default app;
