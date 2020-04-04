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
const keyboard = document.getElementById('qwerty');
const keyboardKeys = document.getElementsByClassName("key");

//event listener to call handleInteraction method everytime a letter is clicked on the onscreen keyboard
keyboard.addEventListener("click", (event) =>{
    if (event.target.tagName==="BUTTON"){ 
    game.handleInteraction(event.target);
    }
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
    let i, j;
    //when "Start Game" button is visible on the overlay, can start the game by pressing the enter key 
    if (event.key==="Enter" && overlay.style.display===''){ 
        startResetGame(); 
    } else {    
        //for loop to match the event key with its corresponding oncscreen keyboard letter
        for (i=0; i<keyboardKeys.length; i++){
            if (event.key===keyboardKeys[i].textContent){ 
                game.handleInteraction(keyboardKeys[i]);
            }
        }
    }
});




  


