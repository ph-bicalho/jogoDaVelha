let board = ['', '', '','', '', '','', '', ''];
let playerTime = 0 ;
let symbols = ["o", "x"];
let gameOver = false;
let winStates = [   [0,1,2],
                    [3,4,5],
                    [6,7,8],
                    [0,3,6],
                    [1,4,7],
                    [2,5,8],
                    [0,4,8],
                    [2,4,6],]



function jogadores(){ 
    if(playerTime == 0){
    return "Jogador O"} 
else if (playerTime == 1){
    return "Jogador X"}
};


function handleMove(position){
    if (gameOver){
        return;
    }

    if (board[position] == ''){
        board[position] = symbols[playerTime];  

        gameOver = win();

        if (gameOver == false){
            playerTime = (playerTime == 0) ? 1 : 0;
    };
    }
    return gameOver
}

function win(){
   
    for(let i = 0; i < winStates.length; i++){
    let seq = winStates[i];

    let posicao1 = seq[0]
    let posicao2 = seq[1]
    let posicao3 = seq[2]

    if(board[posicao1] == board[posicao2] &&
        board[posicao1] == board[posicao3] &&
        board[posicao1] != ''){
            return true;}
    }
    return false
              
};
