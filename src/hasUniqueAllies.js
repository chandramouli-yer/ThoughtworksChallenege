const hasUniqueAllies = (alliances) => {
  const uniqueAllies = [...new Set(alliances)];
  if (uniqueAllies.length >= 3) return true;
  else return false;
}

module.exports = hasUniqueAllies;
