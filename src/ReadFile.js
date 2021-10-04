const fs = require('fs');
const decipherMessage = require('./decipherMessage.js');
const checkAlliance = require('./checkAlliance.js');
const getSecretMessage = require('./getSecretMessage.js');
const checkWarResult = require('./checkWarResult.js');
const newLine = '\n';
const carriageReturn = '\r';
const charSet = 'utf8';
let kingdom='';
let secretMessage='';
let allianceCount = 0;
let allianceResult = [];
const alliances = [];
let secretText = '';
const SPACE_COUNT = 3;
const VICTORY_COUNT = 3;
let senderKingdom='';
let recieverKingdom='';
const EMBLEM = {
  SPACE: 'Gorilla',
  LAND: 'Panda',
  WATER: 'Octopus',
  ICE: 'Mammoth',
  AIR: 'Owl',
  FIRE: 'Dragon'
};
const Victories = {
  SPACE: 0,
  LAND: 0,
  WATER: 0,
  ICE: 0,
  AIR: 0,
  FIRE: 0
};
const ReadFile = (fileName) => {
  const data=fs.readFileSync(fileName, charSet).split(/\r?\n/).forEach(function(line){
   // console.log(line);
    const message = line.split(' ');
   senderKingdom = message[0];
   recieverKingdom=message[1];
   secretText = getSecretMessage(message, SPACE_COUNT);
  const secretMessage = decipherMessage(EMBLEM[recieverKingdom], secretText);
   allianceResult = checkAlliance(senderKingdom, secretMessage, EMBLEM[recieverKingdom]);
   //console.log(allianceResult);
  //allianceCount = allianceCount + allianceResult[0];
 // alliances.push(allianceResult[1]);
 Victories[allianceResult]++;
 //console.log(Victories);
  })
  checkWarResult(Victories);
  // try {
  //   const data = fs.readFileSync(fileName, charSet);
  //   let content = [];
  //   let text = '';
  //   for (let i = 0; i < data.length; i++) {
  //     if (data[i] === newLine || data[i] === carriageReturn) {
  //     ///  console.log(text);
  //     if(text!==' '){
  //       kingdom=text.split(' ')[0];
  //       secretMessage=text.split(' ')[1];
  //       console.log(message,secretMessage)
  //     }
     
  //       content.push(text);
  //       text = '';
  //     } else text += data[i];
  //   }
  //   content.push(text);
  //   content = content.filter(n => n);
  //   return content;
  // } catch (err) {
  //   console.error(err);
  // }
}
module.exports = ReadFile;
