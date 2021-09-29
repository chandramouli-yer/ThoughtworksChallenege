const decipherMessage = (key, message) => {
  const cipherKey = key.length
  let decipheredMessage = ''
  for (let i = 0; i < message.length; i++) {
    decipheredMessage += originalCharacter(message[i], cipherKey)
  }
  return decipheredMessage
}
const originalCharacter = (letter, cipherLength) => {
  const ALPHABET_COUNT = 26
  const ASCII_VALUE_OF_A = 65
  return String.fromCharCode((letter.charCodeAt(0) + (ALPHABET_COUNT - cipherLength) - ASCII_VALUE_OF_A) % ALPHABET_COUNT + ASCII_VALUE_OF_A)
}
module.exports = decipherMessage
