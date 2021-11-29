const hasUniqueAllies = (alliances) => {
  const merged = [].concat.apply([], alliances)
  const uniqueAllies = [...new Set(merged)]
  return (uniqueAllies.length >= 3) 
}

module.exports = hasUniqueAllies
