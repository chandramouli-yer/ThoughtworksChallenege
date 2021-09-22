const hasUniqueAllies=(alliances)=>{
    var merged = [].concat.apply([], alliances);
    let uniqueAllies=[...new Set(merged) ];
    if(uniqueAllies.length>=3) return true;
    else return false;
}

module.exports=hasUniqueAllies;