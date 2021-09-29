const checkAlliance = (kingdom, secretMessage, emblem) => {
  const isKingdomAllied = require('./isKingdomAllied.js')
  let victories = 0
  const alliances = []

  if(isKingdomAllied(emblem,secretMessage)){
      victories=victories+1;
      alliances.push(kingdom);
  }
  return [victories, alliances]
}

module.exports = checkAlliance
