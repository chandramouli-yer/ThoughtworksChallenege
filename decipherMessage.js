function decipherSecretMessage(key, message) {

    let cipherKey = key.length;
    let decipheredMessage = "";
    for (let i = 0; i < message.length; i++) {
        decipheredMessage += nextCharacter(message[i], cipherKey)
    }
    console.log(message,decipheredMessage);
    return decipheredMessage;
}
function nextCharacter(c, l) {
    return String.fromCharCode((c.charCodeAt(0) + (26 - l) - 65) % 26 + 65);
}
module.exports = decipherSecretMessage;