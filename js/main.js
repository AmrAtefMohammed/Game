"use strict"

import { UserInterface as UI } from "./UI.js";

let gameCategories = document.querySelectorAll(".nav-item .nav-link");
let activeCategory = document.querySelector(".nav-item .nav-link.active");


for (let i = 0; i < gameCategories.length; i++) {
    gameCategories[i].addEventListener("click",async function () {
        activeCategory.classList.remove("active");
        gameCategories[i].classList.add("active");
        activeCategory = gameCategories[i];
        let gameObject = new UI(gameCategories[i].id);
        await gameObject.displayGames();
    })
}


(async function() {
    let gameStart = new UI("mmorpg");
    await gameStart.displayGames();
} )();
