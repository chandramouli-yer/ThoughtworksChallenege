// const hasUniqueAllies = require('../src/hasUniqueAllies.js');
// const checkWarResult = (allianceCount, VICTORY_COUNT, alliances) => {
//   if (allianceCount >= VICTORY_COUNT && hasUniqueAllies(alliances)) {
//     let allies = 'SPACE ';
//     for (let i = 0; i < alliances.length; i++) {
//       if (alliances[i].length) {
//         allies += (alliances[i]);
//         allies += ' ';
//       }
//     }
//     console.log(allies.trim());
//   } else {
//     console.log('NONE');
//   }
// };
const checkWarResult=(Victories)=>{
  let MAX=-9999;
  let wonKingdom='';
  for (const key in Victories) {
    // if (Object.hasOwnProperty.call(object, key)) {
    //   const element = object[key];
    //   console.log(element);
      
    // }
    if(Victories[key]>=MAX) {
      MAX=Victories[key];
      wonKingdom=key;
    };
    //console.log(Victories[key]);
  }
  console.log(wonKingdom);

}
module.exports = checkWarResult;
