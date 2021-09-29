const hasUniqueAllies = (alliances) => {
  const merged = [].concat.apply([], alliances)
  const uniqueAllies = [...new Set(merged)]
  if (uniqueAllies.length >= 3) return true
  else return false
}

module.exports = hasUniqueAllies
