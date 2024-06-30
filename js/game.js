

class Games{
    #cssLoading;
    #navbar;
    gameArr;
    #category
    
    constructor(category = "pixel") {
        this.#cssLoading = document.querySelector(".loaderContainer");
        this.#navbar = document.querySelector("nav");
        this.#category = category;
    }
    async callApi()
    {
        const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${this.#category}`;
        const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '1f479e6791msh03bc1742d33f1ccp127d8djsnd5160401fdd5',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
        }
        try {
            
            this.showEffect();

            const response = await fetch(url, options);
            this.gameArr = await response.json();
            
            this.hideEffect();
            
           /*  console.log(this.gameArr); */
            /* displayAll(gameArr); */
        } catch (error) {
            console.error(error);
        }
    }
    getGames() {
        return this.gameArr;
    }
    
    showEffect() {
        this.#cssLoading.classList.remove("d-none");
        this.#navbar.classList.add("d-none");
    }
    hideEffect() {
        this.#cssLoading.classList.add("d-none");
        this.#navbar.classList.remove("d-none");
    }
};

(async function() {
    let gameObject = new Games("permadeath");
    await gameObject.callApi();
    /* console.log(gameObject.getGames()); */
} ());




export {
    Games,
}