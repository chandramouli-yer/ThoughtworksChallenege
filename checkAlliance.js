function checkAlliance(kingdom, secretMessage) {
    let victories = 0;
    let alliances = new Array();
    switch (kingdom) {
        case "LAND":
            if (isLandKingdomAllied(secretMessage)) {
                victories = victories + 1;
                alliances.push("LAND")
                console.log("victories",victories)
            }
            break;
        case "WATER":
            if (isWaterKingdomAllied(secretMessage)) {
                victories = victories + 1;
                alliances.push("WATER")
                console.log("victories",victories)

            }
            break;
        case "ICE":
            if (isIceKingdomAllied(secretMessage)) {
                victories = victories + 1;
                alliances.push("ICE")
                console.log("victories",victories)

            }
            break;
        case "AIR":
            if (isAirKingdomAllied(secretMessage)) {
                victories = victories + 1;
                alliances.push("AIR")
                console.log("victories",victories)

            }
            break;
        case "FIRE":
            if (isFireKingdomAllied(secretMessage)) {
                victories = victories + 1;
                alliances.push("FIRE")
                console.log("victories",victories)

            }
            break;

    }
    return [victories, alliances];
}

function isIceKingdomAllied(message) {
    if ((message.match(/M/g) || []).length == 3 &&
        (message.match(/A/g) || []).length == 1 &&
        (message.match(/O/g) || []).length == 1 &&
        (message.match(/T/g) || []).length == 1 &&
        (message.match(/H/g) || []).length == 1
    ) {
        console.log("isIce");
        return 1;
    };
}

function isAirKingdomAllied(message) {

    if ((message.match(/O/g) || []).length == 1 &&
        (message.match(/W/g) || []).length == 1 &&
        (message.match(/L/g) || []).length == 1
    ) {
        console.log("isAir");
        return 1;
    }
    return 0;
}

function isWaterKingdomAllied(message) {

    if ((message.match(/P/g) || []).length == 1 &&
        (message.match(/U/g) || []).length == 1 &&
        (message.match(/S/g) || []).length == 1 &&
        (message.match(/O/g) || []).length == 2 &&
        (message.match(/T/g) || []).length == 1 &&
        (message.match(/C/g) || []).length == 1
    ) {
        console.log("isWater");
        return 1;
    }
    return 0;
}

function isFireKingdomAllied(message) {

    if ((message.match(/D/g) || []).length == 1 &&
        (message.match(/R/g) || []).length == 1 &&
        (message.match(/A/g) || []).length == 1 &&
        (message.match(/G/g) || []).length == 1 &&
        (message.match(/O/g) || []).length == 1 &&
        (message.match(/N/g) || []).length == 1
    ) {
        console.log("isFire");
        return 1;
    }
    return 0;
}

function isLandKingdomAllied(message) {

    if ((message.match(/P/g) || []).length == 1 &&
        (message.match(/A/g) || []).length == 2 &&
        (message.match(/N/g) || []).length == 1 &&
        (message.match(/D/g) || []).length == 1
    ) {
        console.log("isLand");
        return 1;
    }
    return 0;
}

module.exports = checkAlliance;