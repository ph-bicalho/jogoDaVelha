//saber qual quadrado clicou
document.addEventListener('DOMContentLoaded', ()=>{//verifica se o documento html foi carregado e executa a arrowfuncion

    let squares = document.querySelectorAll(".square")

    squares.forEach((squares)=>{      
        squares.addEventListener ("click", handleClick)} //pega os quadrados e adiciona o evento de clicar
    )
}); 

function handleClick(event) {
    
    let square = event.target;
    let position = square.id;
    if (handleMove(position)){
      setTimeout(() => {
          alert('O jogo acabou, o jogador vencedor foi : ' + jogadores(playerTime)) }, 15);
    };
        updateSquare(position)  
};
function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbols = board[position];
    square.innerHTML = `<div class="${symbols}"></div> `
    mostrarVez()
};
function mostrarVez(){
    let vez = document.querySelector('.vez')
    if(playerTime == 0){
        vez.innerHTML = "Vez de: Jogador O"
    } else{
        vez.innerHTML = "Vez de: Jogador X"
    }
};