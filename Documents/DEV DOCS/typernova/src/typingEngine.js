export function calculateEMA(EMAConstant, rawWPM, smoothedSpeed) {
  return  rawWPM * EMAConstant + smoothedSpeed * (1 - EMAConstant);
}

export function calculateWPM(correctCharacters, startTime, currentTime) {
    const elapsedTime = ((currentTime - startTime) / 60000);
    const correctWords = correctCharacters / 5;
    return (correctWords / elapsedTime);
}