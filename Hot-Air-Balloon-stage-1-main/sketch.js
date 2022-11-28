const playerX = 'x';
const playerO = 'o';
const winning_combinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8][2,4,6]];


const cellElements = document.querySelectorAll('(data-cell)'); //help you determine if the game is over or not
const boardElelment = document.getElementById('board');
const winningMessageElelment = document.getElementById('winningMessage');
const restartElement = document.getElementById('restartButton'); 

let isPlayer_O_turn = false; 


var bgImage;
var redImage;
var blueImage;
var bg;
var cross;
var circle;

function preload(){
bgImage = loadImage("assets/bgImage.png");

redImage = loadImage("assets/redImage.png");

blueImage = loadImage("assets/blueImage.png");
}

function setup(){

//background image
bg = createSprite(200,200,400,400);
bg.addImage(bgImage);
bg.scale = 0.7;

      
//creating cross  
cross = createSprite(100,200,20,50);
cross.addImage(blueImage);
cross.scale = 0.2;

//creating circle
circle = createSprite(100,200,10,15);
circle.addImage(redImage)
circle.scale = 0.1;



}

function draw() {
  
  background("black");



   
   drawSprites();
        
}

function gameStart(){
  isPlayer_O_turn = false; 
  cellElements.forEach(cell=>{
    cell.classList.remove(PLAYER_X_CLASS);
    cell.classList.remove(PLAYER_O_CLASS);
    call.removeEventListener('click', handleCellClick);
    cell.addEventListener('click', handleCellClick, {once:true})
  })
  setBoardHoverClass()
  winningMessageElement.classList.remove('show')
}

function HandleCellClick(e){ //handle the mouse click events for the ceels in the code
  const cell = e.target
  const currentClass = isPlayer_O_turn ? PLAYER_O_CLASS : PLAYER_X_CLASS
  placeMark(cell, currentClass)
  if(checkWin(currentClass)){
    endGame(false)
  } else if(isDraw()){
    endGame(true)
  } else{
    swapTurns()
    setBoardHoverClass()
  }
}

function endGame(draw){
  if(draw){
    winningMessageTextElement.innerText = "It's a draw!"
  } else{
    winningMessageTextElement.innerText = `Player with ${isPlayer_O_turn ? "O's" : "X's"} wins!`
  } 
  winningMessageElement.classList.add('show')
}

function isDraw(){ //will return the values in case it's a draw
  return [...cellElements].every(cell=>{
    return cell.classList.contains(PLAYER_X_CLASS) || cell.classList.contains(PLAYER_O_CLASS)
  })
}

function placemark(cell, currentClass){
  cell.classList.add(currentClass)
}

function swapTurns(){
  isPlayer_O_turn = !isPlayer_O_turn
}