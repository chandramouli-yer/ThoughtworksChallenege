function decipherSecretMessage(key, message) {

    let cipherKey = key.length;
    let decipheredMessage = "";
    for (let i = 0; i < message.length; i++) {
        decipheredMessage += originalCharacter(message[i], cipherKey)
    }
   // console.log(message,decipheredMessage);
    return decipheredMessage;
}
function originalCharacter(letter, cipherLength) {
    return String.fromCharCode((letter.charCodeAt(0) + (26 - cipherLength) - 65) % 26 + 65);
}
module.exports = decipherSecretMessage;