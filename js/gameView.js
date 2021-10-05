export default class GameView{

    constructor(){
        console.log("hi");
    }

    updateBoard(game){
        this.updateTurn(game);
        const winningCombo=game.winCheck();
        console.log("board within gameview")
        console.log(game.board);
        for (let i =0; i<game.board.length;i++){
            const tile=document.querySelector(`.board-tile[data-index='${i}']`);
            tile.classList.remove("tile-winner");
            tile.textContent=game.board[i];

            let tileType=game.board[i] == 'X' ? "tile-x" : "tile-o" ;
            tile.innerHTML=`<span class ="${tileType}">${game.board[i]?game.board[i]:""}</span>`

            if(winningCombo && winningCombo.includes(i)){
                tile.classList.add("tile-winner");
            }
        }
    }

    updateTurn(game){
        let playerX=document.querySelector(".Player-X");
        let playerO=document.querySelector(".Player-O");
         
         
        playerO.classList.remove('active');
        if (game.turn=='O'){
            playerX.classList.add('active');
           playerO.classList.remove('active');
        }
        else{
            playerO.classList.add('active');
            playerX.classList.remove('active');

        }

    }
}