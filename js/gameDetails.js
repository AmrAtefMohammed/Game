"use strict"

import { Games } from './game.js';

class Details extends Games{
    constructor(gameCategory = "shooter") {
        super(gameCategory);  
        this.resultAPI;
    }

    async callAPI(gameID) {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameID}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '1f479e6791msh03bc1742d33f1ccp127d8djsnd5160401fdd5',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    try {
        
        this.showEffect();

        const response = await fetch(url, options);
        this.resultAPI = await response.json();
        /* console.log(this.resultAPI); */
        
        this.hideEffect();

    } catch (error) {
        console.log(error);
    }
}
}

/* (async function()
{
    let object = new Details();
    await object.callAPI(15);


}) (); */


export {
    Details,
};