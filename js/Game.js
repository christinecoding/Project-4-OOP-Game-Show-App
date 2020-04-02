/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed=0; // will track the number of the useer's missed (incorrect) guesses 
        this.phrases=this.createPhrases(); //An array of Phrase objects to use with the game 
        this.activePhrase=null; // Phrase object that’s currently in play
    }

    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases (and their corresponding hints) that could be used in the game */
    createPhrases() {
        return [
            new Phrase('A blessing in disguise', 'a good thing that initially seemed bad' ),
            new Phrase('Through thick and thin', 'during good and bad times'),
            new Phrase('Best of both worlds', 'having the advantages of two contrasting things at the same time'),
            new Phrase('Like two peas in a pod', 'two people who are always together'),
            new Phrase('Weather the storm', 'to endure a trial or hardship'),
            ];
    }

    /**
     * Selects random phrase from phrases property
     * @return {Object} Phrase object chosen to be used
     */
    getRandomPhrase() {
        return this.phrases[Math.floor(Math.random()*(this.phrases.length))];
    }

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        overlay.style.display = "none";
        this.activePhrase=this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    /**
     * Checks for winning move
     * @return {boolean} True if game has been won, false if game wasn't
    won */
    checkForWin() {
        const letters = document.getElementById("phrase-ul").children;
        let showClassCount=0;
        let hideClassCount=0;
        let spaceClassCount=0;

        for (let i=0; i<letters.length; i++){ 
            if (letters[i].classList.contains('show')){
                showClassCount +=1;
            } else if (letters[i].className==='space'){
                spaceClassCount +=1;
            } else {
                hideClassCount +=1;
            }   
        }

         //the game is won only when no letters have a class of "hide"
        if(hideClassCount===0){ 
            return true; 
        } else {
            return false;
        }
    }

    /**
     * Increases the value of the missed property
     * Removes a life from the scoreboard
     * Disables hint button if only one life left
     * Checks if player has remaining lives and ends game if player is out
     */  

    removeLife() {
        //variables for each heart 
        const heart1=document.getElementById("heart-one");
        const heart2=document.getElementById("heart-two");
        const heart3=document.getElementById("heart-three");
        const heart4=document.getElementById("heart-four");
        const heart5=document.getElementById("heart-five");

        //function to test if a heart is currently live or lost
        const liveHeartTest=(heart)=>{ 
            if(heart.getAttribute("src")=== "images/liveHeart.png"){
                return true;
            }else{
                return false;
            }
        };

        //function to change heart image from live to lost 
        const changeHeartImage = (heart) => { 
            heart.src='images/lostHeart.png';
        };

        if(liveHeartTest(heart1)===true){
            changeHeartImage(heart1);
        }else if(liveHeartTest(heart2)===true){
            changeHeartImage(heart2);
        }else if(liveHeartTest(heart3)===true){
            changeHeartImage(heart3);
        }else if(liveHeartTest(heart4)===true){
            changeHeartImage(heart4);
        }else{
            changeHeartImage(heart5);
        };

        this.missed+=1;

        //disable hint button if only one live heart left
        if(this.missed===4){
            hintButton.disabled=true; 
            hintButton.classList="hint-disabled";
        }
        //if the number of missed guesses is equal to 5 then the user lost the game
        if(this.missed===5){
            this.gameOver(false);
        }
    }
    
    /**
     * Displays game over message
     * @param {boolean} gameWon - Whether or not the user won the game
     */
    gameOver(gameWon) {
        const overlayH1 = document.getElementById('game-over-message');
        if(gameWon===false){
            overlayH1.textContent="Sorry, the game has ended for you because you ran out of hearts";
            overlay.className="lose";
            overlay.style.display = '';
        } else {
            overlayH1.textContent="Great job, you figured out the phrase!";
            overlay.className="win";
            overlay.style.display = '';   
        }
    }

    /**
     * Handles onscreen keyboard button clicks and keydown events when computer keyboard is used
     * @param (HTMLButtonElement or keyboard key) button - The clicked button element or the clicked key on keyboard
     */

    handleInteraction(button){
        //disable button once clicked
        button.disabled=true; 
        if(this.activePhrase.checkLetter(button.textContent)===false){
            button.className = "wrong";
            this.removeLife();
        } else {
            button.className = "chosen";
            this.activePhrase.showMatchedLetter(button.textContent); 
            //if after this guess, the player has won the game, call the gameOver method.
            if(this.checkForWin()===true){
                this.gameOver(true);
            }
        }
    }
}
