const ReadFile = require('./ReadFile.js');

const decipherSecretMessage = require('./decipherMessage.js')

const checkAlliance = require('./checkAlliance.js')

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

for (let i = 0; i < inputData.length; i++) {
    let message = inputData[i].split(' ');
    let kingdom = message[0];
    let secretText = message[1].toUpperCase();
     console.log("Kingdom",kingdom);
    console.log("Emblem",Emblem[kingdom])
    let secretMessage = decipherSecretMessage(Emblem[kingdom], secretText);
    allianceResult = checkAlliance(kingdom, secretMessage);
    console.log("Alliance Result",allianceResult)
    allianceCount =allianceCount+ allianceResult[0];
     console.log("No of victories:", allianceCount);
    alliances.push(allianceResult[1]);
};

if(allianceCount>=3){
    let allies="SPACE ";
    for(let i=0;i<alliances.length;i++){
        if(alliances[i].length){
            allies+=(alliances[i]);
        allies+=" ";
        }
        
    }
    console.log(allies);
}else{
    console.log("NONE")
}
