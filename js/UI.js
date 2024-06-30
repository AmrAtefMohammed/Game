'use strict'

import { Details } from "./gameDetails.js"

class UserInterface extends Details{
    constructor(category = "mmorpg") {
        super(category);
    }
    async displayGames() {
        await this.callApi();
        this.#displayAll(this.gameArr);   
        this.#gameClick();
    }
    #displayAll(arr) {
        let cartoona = '';
        for (let i = 0; i < arr.length; i++) {
            cartoona += `
                <div class="col-xl-3 col-lg-4 col-md-6 p-3 gameContainer">
                    <div class="game h-100">
                        <figure class="rounded-4 overflow-hidden">
                            <img src="${arr[i].thumbnail}" class="w-100" alt="">
                        </figure>
                        <div class="body">
                            <div class="top d-flex justify-content-between align-items-center mb-3">
                                <h6>${arr[i].title}</h6>
                                <span class="bg-primary">Free</span>
                            </div>
                            <p class="bodyText text-center mb-3 fw-bolder">${arr[i].short_description.slice(0, 50)}</p>
                            
                            <div class="breakLine"></div>

                            <div class="footer d-flex justify-content-between align-items-center mb-3">
                                <span>${arr[i].genre}</span>
                                <span>${arr[i].platform}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `
        }
    document.querySelector("main .container .row.games").innerHTML = cartoona;
    
    /* gameClick(); */
    }
    #displayDetails(game) {
        let cartoona = `
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog w-100 h-100 d-grid">
                <div class="modal-content m-auto">
                    
                    <div class="modal-body">
                        <img src="${game.thumbnail}" class="w-100" alt="">
                    </div>
                </div>
            </div>
        </div>
            <div class="container position-relative">
                <i class="fa-solid fa-circle-xmark fa-2xl cursor-pointer position-absolute closeBtn"></i>
                <h2 class="mb-5 fw-bolder">Details Game</h2>
                <div class="row row-gap-4 row-gap-md-0">
                    <div class="col-md-5">
                        <div>
                            <figure class="rounded-4 overflow-hidden cursor-pointer" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <img src="${game.thumbnail}" class="w-100" alt="">
                            </figure>
                        </div>
                    </div>
                    <div class="col-md-7">
                        <div>
                            <h3 class="title fw-bolder mb-4">Title: ${game.title}</h3>
                            <div class="gameType">
                                <p>
                                    Category:
                                    <span> ${game.genre}</span>
                                </p>
                                <p>
                                    Platform:
                                    <span> ${game.platform}</span>
                                </p>
                                <p>
                                    Status:
                                    <span> ${game.status}</span>
                                </p>
                            </div>
                            <p class="description fw-medium my-4">${game.description}</p>

                            <a href="${game.game_url}" target ="_blank" class="btn btn-outline-warning text-white">Show Game</a>
                        </div>

                    </div>
                </div>
            </div>
        `


        document.querySelector(".gameDetails").innerHTML = cartoona;

        document.querySelector(".gameDetails").classList.remove("d-none");
        this.#closeBtn();
        document.querySelector(".basicSection").classList.add("d-none");
    }

    #gameClick() {
        let gameContainer = document.querySelectorAll(".gameContainer .game");
        let that = this;
        for (let i = 0; i < gameContainer.length; i++) {
            gameContainer[i].addEventListener("click", async function () {
                /* console.log("Clicked"); */
                await that.callAPI(that.gameArr[i].id);
                /* console.log(that.resultAPI); */
                that.#displayDetails(that.resultAPI);
            })  
        }
        
    }
    #closeBtn() {
        let closeButton = document.querySelector("i.closeBtn");
        let that = this;
        closeButton.addEventListener("click", function () {
            that.#closeDetails();
        })

        document.addEventListener("keydown", function (e) {
            let gameDetails = document.querySelector(".gameDetails");
            if (!(gameDetails.classList.contains("d-none"))) {
                if (e.key == "Escape") {
                    that.#closeDetails();
                }
            }
        })
    }
    #closeDetails() {
        document.querySelector(".gameDetails").classList.add("d-none");
        document.querySelector(".basicSection").classList.remove("d-none");
    }

}


/* (async function () {
    let object = new UserInterface("pixel");
    await object.displayGames();
    
}()); */



export {
    UserInterface,
};