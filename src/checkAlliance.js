const isKingdomAllied = require('./isKingdomAllied.js');
const checkAlliance = (kingdom, secretMessage, emblem) => {
  let victories = 0;
  const alliances = [];
  if(isKingdomAllied(emblem,secretMessage)){
      victories=victories+1;
      alliances.push(kingdom);
  }
  //return [victories, alliances];
  return kingdom;
};

module.exports = checkAlliance;
