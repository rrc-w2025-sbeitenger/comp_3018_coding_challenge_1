interface Player {
    id: number;
    name: string;
    wins: number;
    losses: number;
    totalScore: number;
}

const players: Player[] = [
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

export function checkStatsByID(id: number): any {
    for (const playerId of players) {
        if (playerId.id === id) {
            return {
                name: playerId.name,
                wins: playerId.wins,
                losses: playerId.losses,
                totalScore: playerId.totalScore
            };
        }
    }
}

