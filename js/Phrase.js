/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
    constructor (phrase, hint){
        this.phrase=phrase.toLowerCase();
        this.hint=hint; //represents hint associated with each phrase 
    }

    /**
     * Display phrase on game board
     * Restores all hearts and keyboard keys to default setting when the new phrase displays
     */
    addPhraseToDisplay(){ 
        //variables representing each heart
        const heart1=document.getElementById("heart-one");
        const heart2=document.getElementById("heart-two");
        const heart3=document.getElementById("heart-three");
        const heart4=document.getElementById("heart-four");
        const heart5=document.getElementById("heart-five");

        //keypad div variables
        const qpRow = document.getElementById('qpRow');
        const alRow = document.getElementById('alRow');
        const zmRow = document.getElementById('zmRow');

        const phraseUl = document.getElementById("phrase-ul");
        
        //variable to split the current phrase into invididual letters
        const splitPhrase = this.phrase.split('');

        //remove any displayed phrases before add new phrase
        if(phraseUl.hasChildNodes()){
            while(phraseUl.hasChildNodes()){
            phraseUl.removeChild(phraseUl.lastChild);
        }
        }
        
        //reset the class of all the key buttons 
        keyA.className="key";
        keyB.className="key";
        keyC.className="key";
        keyD.className="key";
        keyE.className="key";
        keyF.className="key";
        keyG.className="key";
        keyH.className="key";
        keyI.className="key";
        keyJ.className="key";
        keyK.className="key";
        keyL.className="key";
        keyM.className="key";
        keyN.className="key";
        keyO.className="key";
        keyP.className="key";
        keyQ.className="key";
        keyR.className="key";
        keyS.className="key";
        keyT.className="key";
        keyU.className="key";
        keyV.className="key";
        keyW.className="key";
        keyX.className="key";
        keyY.className="key";
        keyZ.className="key";

        //re-enable all key buttons
        for(let i=0; i<qpRow.children.length; i++){
            qpRow.children[i].disabled=false;
        }
        for(let j=0; j<zmRow.children.length; j++){
            zmRow.children[j].disabled=false;
        }
        for(let k=0; k<alRow.children.length; k++){
            alRow.children[k].disabled=false;
        }

        //function to change heart image from lost to live
        const makeHeartLive = (heart) => { 
            heart.src='images/liveHeart.png';
        };

        //restore all hearts to "live hearts"
        makeHeartLive(heart1);
        makeHeartLive(heart2);
        makeHeartLive(heart3);
        makeHeartLive(heart4);
        makeHeartLive(heart5);

        //display phrase
        splitPhrase.forEach(letter => {
            const newLi =document.createElement('li');
            phraseUl.appendChild(newLi);
            newLi.textContent = `${letter}`;
            if (letter===" "){
                newLi.className="space";
            }else{
                newLi.className=`hide letter ${letter}`;
            }
        });
    }

    /**
     * Checks if passed letter is in phrase
     * @param (string) letter - Letter to check
     */
    checkLetter(letter) {
        if(this.phrase.includes(letter)){
            return true;
        } else {
            return false;
        }
    }

    /**
     * Displays passed letter on screen after a match is found
     * @param (string) letter - Letter to display
     */
    showMatchedLetter(letter) {
        const matchedLetters = document.getElementById("phrase-ul").children;
        for (let i=0; i<matchedLetters.length; i++){
            if (matchedLetters[i].textContent===letter){
                    matchedLetters[i].className = "show";
            }
        }
    }

}
