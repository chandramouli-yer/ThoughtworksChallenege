const checkAlliance=(kingdom, secretMessage) =>{
    console.log(kingdom,secretMessage);
    let victories = 0;
    let alliances = new Array();
    let Kingdoms={
        Land:"LAND",
        water:"WATER",
        Ice:"ICE",
        Air:"AIR",
        Fire:"FIRE"
    }
    switch (kingdom) {
        case Kingdoms.Land:
            if (isLandKingdomAllied(secretMessage)) {
                victories = victories + 1;
                alliances.push("LAND")
                console.log("victories",victories)
            }
            break;
        case Kingdoms.water:
            if (isWaterKingdomAllied(secretMessage)) {
                victories = victories + 1;
                alliances.push("WATER")
                console.log("victories",victories)

            }
            break;
        case Kingdoms.Ice:
            if (isIceKingdomAllied(secretMessage)) {
                victories = victories + 1;
                alliances.push("ICE")
                console.log("victories",victories)

            }
            break;
        case Kingdoms.Air:
            console.log("Inside Air");
            if (isAirKingdomAllied(secretMessage)) {
                console.log("Deep inside if AIR")
                victories = victories + 1;
                alliances.push("AIR")
                console.log("victories",victories)

            }
            break;
        case Kingdoms.Fire:
            if (isFireKingdomAllied(secretMessage)) {
                victories = victories + 1;
                alliances.push("FIRE")
                console.log("victories",victories)

            }
            break;

    }
    return [victories, alliances];
}

const isIceKingdomAllied=(message) =>{
    if ((message.match(/M/g) || []).length >= 3 &&
        (message.match(/A/g) || []).length >= 1 &&
        (message.match(/O/g) || []).length >= 1 &&
        (message.match(/T/g) || []).length >= 1 &&
        (message.match(/H/g) || []).length >= 1
    ) {
        console.log("isIce");
        return 1;
    };
}

const isAirKingdomAllied=(message) => {

    if ((message.match(/O/g) || []).length >= 1 &&
        (message.match(/W/g) || []).length >= 1 &&
        (message.match(/L/g) || []).length >= 1
    ) {
        console.log("isAir");
        return 1;
    }
    return 0;
}

const isWaterKingdomAllied=(message) =>{

    if ((message.match(/P/g) || []).length >= 1 &&
        (message.match(/U/g) || []).length >= 1 &&
        (message.match(/S/g) || []).length >= 1 &&
        (message.match(/O/g) || []).length >= 2 &&
        (message.match(/T/g) || []).length >= 1 &&
        (message.match(/C/g) || []).length >= 1
    ) {
        console.log("isWater");
        return 1;
    }
    return 0;
}

const isFireKingdomAllied=(message) =>{

    if ((message.match(/D/g) || []).length >= 1 &&
        (message.match(/R/g) || []).length >= 1 &&
        (message.match(/A/g) || []).length >= 1 &&
        (message.match(/G/g) || []).length >= 1 &&
        (message.match(/O/g) || []).length >= 1 &&
        (message.match(/N/g) || []).length >= 1
    ) {
        console.log("isFire");
        return 1;
    }
    return 0;
}

const isLandKingdomAllied=(message) =>{

    if ((message.match(/P/g) || []).length >= 1 &&
        (message.match(/A/g) || []).length >= 2 &&
        (message.match(/N/g) || []).length >= 1 &&
        (message.match(/D/g) || []).length >= 1
    ) {
        console.log("isLand");
        return 1;
    }
    return 0;
}

module.exports = checkAlliance;