const ReadFile = require('./ReadFile.js');
// const decipherMessage = require('./decipherMessage.js');
// const checkAlliance = require('./checkAlliance.js');
// const getSecretMessage = require('./getSecretMessage.js');
// const checkWarResult = require('./checkWarResult.js');

let allianceCount = 0;

const fileName = process.argv[2];
 ReadFile(fileName);

// let allianceCount = 0;
// let allianceResult = [];
// const alliances = [];
// let secretText = '';
// const SPACE_COUNT = 2;
// const VICTORY_COUNT = 3;

// for (let i = 0; i < inputData.length; i++) {
//   const message = inputData[i].split(' ');
//   const kingdom = message[0];
//   secretText = getSecretMessage(message, SPACE_COUNT);
//   const secretMessage = decipherMessage(EMBLEM[kingdom], secretText);
//   allianceResult = checkAlliance(kingdom, secretMessage, EMBLEM[kingdom]);
//   allianceCount = allianceCount + allianceResult[0];
//   alliances.push(allianceResult[1]);
// };

