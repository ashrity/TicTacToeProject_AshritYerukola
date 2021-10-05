import Game from "./game.js"
import GameView from "./gameView.js"

let game = new Game();
let gameView = new GameView();

document.querySelector(".restart").addEventListener("click", ()=>{
    console.log("new game");
    newGame();
})

let tiles = document.querySelectorAll(".board-tile");
tiles.forEach((tile)=>{
    tile.addEventListener("click", ()=>{
        onTileClick(tile.dataset.index);
    })
})

function onTileClick(i){
    game.makeMove(i);
    gameView.updateBoard(game);
    game.winCheck();
    game.nextTurn();

}

function newGame(){
    game= new Game();
    gameView.updateBoard(game);
    
}

gameView.updateBoard(game);
