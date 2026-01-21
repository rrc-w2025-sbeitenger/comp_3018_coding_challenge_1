export function checkStatsByID(playerId: number): any {
    return {
        name: playerId.name,
        wins: playerId.wins,
        losses: playerId.losses,
        totalScore: playerId.totalScore
    }
}

