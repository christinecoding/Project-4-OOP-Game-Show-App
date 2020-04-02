/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//variable for game overlay (will appear when page first loads and when user wins or loses a game) 
const overlay = document.getElementById('overlay');

let game;
const startGameButton = document.getElementById("btn__reset");

//variables for additional button elements at bottom of page
const colorThemeReset = document.getElementById('btn-color-reset');
const darkColorTheme = document.getElementById('btn-dark-colors');
const skipPhrase = document.getElementById('btn-skip');
const hintButton = document.getElementById('btn-hint');
const hintDisplay = document.getElementById('hint-text'); //variable to display hint text

//css link element 
const cssSheet = document.getElementById("css-styles");

//variables for keyboard keys
const keyA = document.getElementById('a');
const keyB = document.getElementById('b');
const keyC = document.getElementById('c');
const keyD = document.getElementById('d');
const keyE = document.getElementById('e');
const keyF = document.getElementById('f');
const keyG = document.getElementById('g');
const keyH = document.getElementById('h');
const keyI = document.getElementById('i');
const keyJ = document.getElementById('j');
const keyK = document.getElementById('k');
const keyL = document.getElementById('l');
const keyM = document.getElementById('m');
const keyN = document.getElementById('n');
const keyO = document.getElementById('o');
const keyP = document.getElementById('p');
const keyQ = document.getElementById('q');
const keyR = document.getElementById('r');
const keyS = document.getElementById('s');
const keyT = document.getElementById('t');
const keyU = document.getElementById('u');
const keyV = document.getElementById('v');
const keyW = document.getElementById('w');
const keyX = document.getElementById('x');
const keyY = document.getElementById('y');
const keyZ = document.getElementById('z');

//event listeners to call handleInteraction method everytime a letter is clicked on the onscreen keyboard
keyA.addEventListener("click", () =>{
    game.handleInteraction(keyA);
});
keyB.addEventListener("click", () =>{
    game.handleInteraction(keyB);
});
keyC.addEventListener("click", () =>{
    game.handleInteraction(keyC);
});
keyD.addEventListener("click", () =>{
    game.handleInteraction(keyD);
});
keyE.addEventListener("click", () =>{
    game.handleInteraction(keyE);
});
keyF.addEventListener("click", () =>{
    game.handleInteraction(keyF);
});
keyG.addEventListener("click", () =>{
    game.handleInteraction(keyG);
});
keyH.addEventListener("click", () =>{
    game.handleInteraction(keyH);
});
keyI.addEventListener("click", () =>{
    game.handleInteraction(keyI);
});
keyJ.addEventListener("click", () =>{
    game.handleInteraction(keyJ);
});
keyK.addEventListener("click", () =>{
    game.handleInteraction(keyK);
});
keyL.addEventListener("click", () =>{
    game.handleInteraction(keyL);
});
keyM.addEventListener("click", () =>{
    game.handleInteraction(keyM);
});
keyN.addEventListener("click", () =>{
    game.handleInteraction(keyN);
});
keyO.addEventListener("click", () =>{
    game.handleInteraction(keyO);
});
keyP.addEventListener("click", () =>{
    game.handleInteraction(keyP);
});
keyQ.addEventListener("click", () =>{
    game.handleInteraction(keyQ);
});
keyR.addEventListener("click", () =>{
    game.handleInteraction(keyR);
});
keyS.addEventListener("click", () =>{
    game.handleInteraction(keyS);
});
keyT.addEventListener("click", () =>{
    game.handleInteraction(keyT);
});
keyU.addEventListener("click", () =>{
    game.handleInteraction(keyU);
});
keyV.addEventListener("click", () =>{
    game.handleInteraction(keyV);
});
keyW.addEventListener("click", () =>{
    game.handleInteraction(keyW);
});
keyX.addEventListener("click", () =>{
    game.handleInteraction(keyX);
});
keyY.addEventListener("click", () =>{
    game.handleInteraction(keyY);
});
keyZ.addEventListener("click", () =>{
    game.handleInteraction(keyZ);
});

//function to be called whenever need to start a new game/generate a new phrase
const startResetGame = ()=>{
    game=new Game();
    game.startGame();
    hintButton.disabled=false;
    hintButton.className='hint-abled';
    hintButton.style.display='';
    hintDisplay.style.display='none';
};

//start new game when "Start Game" button is clicked
startGameButton.addEventListener("click", () =>{ 
    startResetGame();
});

//hide "Light Color Theme" button when page initially loads (because the light color theme is the app's default setting)
    colorThemeReset.style.display="none";

//event listeners to change color theme once a color theme button is clicked
colorThemeReset.addEventListener("click", () =>{
    cssSheet.href="css/styles.css";
    colorThemeReset.style.display="none";
    darkColorTheme.style.display='';
});

darkColorTheme.addEventListener("click", () =>{
    cssSheet.href="css/altstyle.css";
    colorThemeReset.style.display='';
    darkColorTheme.style.display='none';
});

//event listener to display hint and lose one heart when hint button clicked
hintButton.addEventListener("click", () =>{
    const hintDisplay = document.getElementById('hint-text');
    hintDisplay.textContent=`Hint: ${ game.activePhrase.hint}`;
    hintDisplay.style.display='';
    hintButton.style.display="none";
    game.removeLife();
});

//event listener to generate a new phrase when "Skip This Phrase" button is clicked
skipPhrase.addEventListener("click", () =>{
    startResetGame();
});

//Event listener for keyboard presses. Pressing a physical keyboard key will generate the same actions as clicking on a key on the onscreen keyboard 
document.addEventListener("keydown", event => {
    if(event.key==="a" && keyA.disabled===false){
        game.handleInteraction(keyA);
    } else if(event.key==="b" && keyB.disabled===false) {
        game.handleInteraction(keyB);
    } else if(event.key==="c" && keyC.disabled===false) {
        game.handleInteraction(keyC);
    } else if(event.key==="d" && keyD.disabled===false) {
        game.handleInteraction(keyD);
    } else if(event.key==="e" && keyE.disabled===false) {
        game.handleInteraction(keyE);
    } else if(event.key==="f" && keyF.disabled===false) {
        game.handleInteraction(keyF);
    } else if(event.key==="g" && keyG.disabled===false) {
        game.handleInteraction(keyG);
    } else if(event.key==="h"&& keyH.disabled===false) {
        game.handleInteraction(keyH);
    } else if(event.key==="i" && keyI.disabled===false) {
        game.handleInteraction(keyI);
    } else if(event.key==="j" && keyJ.disabled===false) {
        game.handleInteraction(keyJ);
    } else if(event.key==="k" && keyK.disabled===false) {
        game.handleInteraction(keyK);
    } else if(event.key==="l" && keyL.disabled===false) {
        game.handleInteraction(keyL);
    } else if(event.key==="m" && keyM.disabled===false) {
        game.handleInteraction(keyM);
    } else if(event.key==="n" && keyN.disabled===false) {
        game.handleInteraction(keyN);
    } else if(event.key==="o" && keyO.disabled===false) {
        game.handleInteraction(keyO);
    } else if(event.key==="p" && keyP.disabled===false) {
        game.handleInteraction(keyP);
    } else if(event.key==="q" && keyQ.disabled===false) {
        game.handleInteraction(keyQ);
    } else if(event.key==="r" && keyR.disabled===false) {
        game.handleInteraction(keyR);
    } else if(event.key==="s" && keyS.disabled===false) {
        game.handleInteraction(keyS);
    } else if(event.key==="t" && keyT.disabled===false) {
        game.handleInteraction(keyT);
    } else if(event.key==="u" && keyU.disabled===false) {
        game.handleInteraction(keyU);
    } else if(event.key==="v" && keyV.disabled===false) {
        game.handleInteraction(keyV);
    } else if(event.key==="w" && keyW.disabled===false) {
        game.handleInteraction(keyW);
    } else if(event.key==="x" && keyX.disabled===false) {
        game.handleInteraction(keyX);
    } else if(event.key==="y" && keyY.disabled===false) {
        game.handleInteraction(keyY);
    } else if(event.key==="z" && keyZ.disabled===false) {
        game.handleInteraction(keyZ);
    } else if(event.which===13 && overlay.style.display===''){ 
       startResetGame(); //when "Start Game" button is visible on the overlay, can start the game by pressing the enter key 
    }
  });

  


