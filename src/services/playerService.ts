import { Player } from "src/app";
import { player } from "src/app";

export function rating(player: Player){
    let totalGames = player.wins + player.losses;

    if(totalGames === 0){
        const zeroRatingObject ={
            id: player.id,
            name: player.name,
            rating: 0,
            totalGames: totalGames
        };
        
        return zeroRatingObject;

    }
    //need to still add rounding
    const rating: number = (player.wins/ totalGames) * 100 + (player.totalScore / totalGames);

    const playerRatingObject = {
        id: player.id,
        name: player.name,
        rating: rating,
        totalGames: totalGames
    };

    return playerRatingObject;
}

export function allPlayerData(){
    //let count = 0;
    //for (const players in player){
    //    count ++;
    //}; 
    return player;
}