export default class Game{
    constructor(){
        console.log("init");
        this.turn="X";
        this.board=new Array(9).fill(null)
        console.log(this.board);
    }

    nextTurn(){
        if(this.endOfGame()){
            return;
        }
        if(this.turn == "X"){
            this.turn = "O";
        }
        else{
            this.turn="X";
        }
    }

    makeMove(i){
        if(this.endOfGame()){
            return;
        }
        if(this.board[i]){
            return;
        }
        this.board[i]=this.turn; 
        let winCombo = this.winCheck();
        console.log("This is the winner: ", winCombo)
    }

    winCheck(){
        const winCombos=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [6,4,2]
        ]

        for(const combination of winCombos){
            const [a,b,c]=combination;
            if(this.board[a] &&(this.board[a]===this.board[b] && this.board[a]===this.board[c])){
                return combination;
            }
        }            
        return null;

    }

    endOfGame(){
        let winCombo = this.winCheck();
        if (winCombo){
            return true;
        }
        else{
            return false;
        }
    }
}