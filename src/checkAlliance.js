const checkAlliance = (kingdom, secretMessage, emblem) => {
  const isKingdomAllied = require('./isKingdomAllied.js')
  let victories = 0
  const alliances = []
  const Kingdoms = {
    Land: 'LAND',
    water: 'WATER',
    Ice: 'ICE',
    Air: 'AIR',
    Fire: 'FIRE'
  }
  switch (kingdom) {
    case Kingdoms.Land:
      if (isKingdomAllied(emblem, secretMessage)) {
        victories = victories + 1
        alliances.push(Kingdoms.Land)
      }
      break
    case Kingdoms.water:
      if (isKingdomAllied(emblem, secretMessage)) {
        victories = victories + 1
        alliances.push(Kingdoms.water)
      }
      break
    case Kingdoms.Ice:
      if (isKingdomAllied(emblem, secretMessage)) {
        victories = victories + 1
        alliances.push(Kingdoms.Ice)
      }
      break
    case Kingdoms.Air:
      if (isKingdomAllied(emblem, secretMessage)) {
        victories = victories + 1
        alliances.push(Kingdoms.Air)
      }
      break
    case Kingdoms.Fire:
      if (isKingdomAllied(emblem, secretMessage)) {
        victories = victories + 1
        alliances.push(Kingdoms.Fire)
      }
      break
  }
  return [victories, alliances]
}

module.exports = checkAlliance
