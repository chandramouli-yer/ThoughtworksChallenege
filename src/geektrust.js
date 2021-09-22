const ReadFile = require('./ReadFile.js');
const decipherSecretMessage = require('./decipherMessage.js')
const checkAlliance = require('./checkAlliance.js')
const hasUniqueAllies=require('../src/hasUniqueAllies.js')

const filename = process.argv[2];

const Emblem = {
    SPACE: 'Gorilla',
    LAND: 'Panda',
    WATER: 'Octopus',
    ICE: 'Mammoth',
    AIR: 'Owl',
    FIRE: 'Dragon'
};
let inputData = ReadFile(filename);

let allianceCount = 0;
let alliances = [];
let messageWithSpaces=[]
let secretText="";
let spaceCount=2;
let victoryCount=3;

for (let i = 0; i < inputData.length; i++) {
    let message = inputData[i].split(' ');
    let kingdom = message[0];
    if(message.length>spaceCount){
        for(let i=1;i<message.length;i++){
            messageWithSpaces.push(message[i]);
        }
        secretText=messageWithSpaces.join('').toUpperCase();
    }else{
        secretText = message[1].toUpperCase();
    }
     
    let secretMessage = decipherSecretMessage(Emblem[kingdom], secretText);
    allianceResult = checkAlliance(kingdom, secretMessage);
    allianceCount =allianceCount+ allianceResult[0];
    alliances.push(allianceResult[1]);
};

if(allianceCount>=victoryCount&&hasUniqueAllies(alliances)){
    let allies="SPACE ";
    for(let i=0;i<alliances.length;i++){
        if(alliances[i].length){
            allies+=(alliances[i]);
        allies+=" ";
        }
        
    }
    console.log(allies.trim());
}else{
    console.log("NONE")
}
