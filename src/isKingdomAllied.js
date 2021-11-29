const isKingdomAllied = (emblem, message) => {
  let charsMatched=0;
  emblem = emblem.toUpperCase()
  for (let i = 0; i < emblem.length; i++) {
    for (let j = 0; j < message.length; j++) {
      if (emblem[i] === message[j]) {
       charsMatched++;
       break;

      }
    }
  }
return (charsMatched===emblem.length);
}
module.exports = isKingdomAllied




