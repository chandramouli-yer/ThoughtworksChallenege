const decipherSecretMessage = (key, message) => {

    let cipherKey = key.length;
    let decipheredMessage = "";
    let aplhabetCount = 26;
    let asciiValueOfA = 65;
    for (let i = 0; i < message.length; i++) {
        decipheredMessage += originalCharacter(message[i], cipherKey)
    }
    //  console.log(key,message,decipheredMessage);
    return decipheredMessage;
}
const originalCharacter = (letter, cipherLength) => {
    return String.fromCharCode((letter.charCodeAt(0) + (aplhabetCount - cipherLength) - asciiValueOfA) % aplhabetCount + asciiValueOfA);
}
module.exports = decipherSecretMessage;