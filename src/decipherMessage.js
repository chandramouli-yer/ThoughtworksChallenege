const decipherSecretMessage = (key, message) => {

    let cipherKey = key.length;
    let decipheredMessage = "";
    for (let i = 0; i < message.length; i++) {
        decipheredMessage += originalCharacter(message[i], cipherKey)
    }
    return decipheredMessage;
}
const originalCharacter = (letter, cipherLength) => {
    let aplhabetCount = 26;
    let asciiValueOfA = 65;
    return String.fromCharCode((letter.charCodeAt(0) + (aplhabetCount - cipherLength) - asciiValueOfA) % aplhabetCount + asciiValueOfA);
}
module.exports = decipherSecretMessage;