
const getSecretMessage = (message, SPACE_COUNT) => {
  const messageWithSpaces = []
  if (message.length > SPACE_COUNT) {
    for (let i = 1; i < message.length; i++) {
      messageWithSpaces.push(message[i])
    }
    return messageWithSpaces.join('').toUpperCase()
  } else {
    return message[1].toUpperCase()
  }
}

module.exports = getSecretMessage
