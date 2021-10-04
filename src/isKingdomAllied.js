const isKingdomAllied = (emblem, message) => {
  const charReplace = '$';
  emblem = emblem.toUpperCase();
  for (let i = 0; i < emblem.length; i++) {
    let flag = 0;
    for (let j = 0; j < message.length; j++) {
      if (emblem[i] === message[j]) {
        message = message.substring(0, j) + charReplace + message.substring(j + 1);
        flag = 1;
        break;
      }
    }
    if (flag === 0) return 0;
  }
  return 1;
}
module.exports = isKingdomAllied;
