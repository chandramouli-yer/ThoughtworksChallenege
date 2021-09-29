const hasUniqueAllies = require('../src/hasUniqueAllies.js')
const checkWarResult = (allianceCount, VICTORY_COUNT, alliances) => {
  if (allianceCount >= VICTORY_COUNT && hasUniqueAllies(alliances)) {
    let allies = 'SPACE '
    for (let i = 0; i < alliances.length; i++) {
      if (alliances[i].length) {
        allies += (alliances[i])
        allies += ' '
      }
    }
    console.log(allies.trim())
  } else {
    console.log('NONE')
  }
}
module.exports = checkWarResult
