const ReadFile = require('./ReadFile.js');
const decipherMessage = require('./decipherMessage.js')
const checkAlliance = require('./checkAlliance.js')
const getSecretMessage=require('./getSecretMessage.js');
const checkWarResult=require('./checkWarResult.js');
const fileName = process.argv[2];

const EMBLEM = {
    SPACE: 'Gorilla',
    LAND: 'Panda',
    WATER: 'Octopus',
    ICE: 'Mammoth',
    AIR: 'Owl',
    FIRE: 'Dragon'
};
let inputData = ReadFile(fileName);

let allianceCount = 0;
let alliances = [];
let secretText="";
const SPACE_COUNT=2;
const VICTORY_COUNT=3;

for (let i = 0; i < inputData.length; i++) {
    let message = inputData[i].split(' ');
    let kingdom = message[0];
     secretText=getSecretMessage(message,SPACE_COUNT);
    let secretMessage = decipherMessage(EMBLEM[kingdom], secretText);
    allianceResult = checkAlliance(kingdom, secretMessage,EMBLEM[kingdom]);
    allianceCount =allianceCount+ allianceResult[0];
    alliances.push(allianceResult[1]);
};
checkWarResult(allianceCount,VICTORY_COUNT,alliances);
