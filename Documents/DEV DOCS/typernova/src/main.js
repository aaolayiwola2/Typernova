import { calculateEMA, calculateWPM } from "./typingEngine";

let typedHistory = [];
const EMAConstant = 0.1;
let smoothedSpeed = 0;
let rawWPM = 0;
let correctCharacters = 0;
let startTime = null; //stopwatch hasnt started yet
let currentIndex = 0;
let targetWord = "I know you love to play but you just have to make this right";

window.addEventListener("keydown", (e) => {
  // check if this is the very firststroke to start the stopwatch
    if (startTime === null) {
    startTime = Date.now();
    }

  // validate if the character is correct and update the correctChars count
    if (e.key === targetWord[currentIndex]) {
    correctCharacters++;
    typedHistory.push(event.key);
    }
    currentIndex++;
    
    if (e.key === "Backspace") {
        // move the count backward
        currentIndex--;
        
        // capture erasedChar
        const erasedChar = typedHistory.pop();

        // validate the correctness and deduct or leave correctWords count appropriately
        if (erasedChar === targetWord[currentIndex]) {
            correctCharacters--;
        }


    }
  // calculate new speeds by calling new functions    r
    let currentTime = Date.now();
    rawWPM = calculateWPM(correctCharacters, startTime, currentTime);
    smoothedSpeed = calculateEMA(EMAConstant, rawWPM, smoothedSpeed);

    console.log({
    key: event.key,
    index: currentIndex,
    score: correctCharacters,
    wpm: rawWPM,
    ema: smoothedSpeed
});
});
