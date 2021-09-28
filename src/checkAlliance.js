const checkAlliance = (kingdom, secretMessage,emblem) => {
const check=require('./isKingdomAllied.js')
    let victories = 0;
    let alliances = new Array();
    let Kingdoms = {
        Land: "LAND",
        water: "WATER",
        Ice: "ICE",
        Air: "AIR",
        Fire: "FIRE"
    }
    switch (kingdom) {
        case Kingdoms.Land:
            if (check(emblem,secretMessage)) {
                victories = victories + 1;
                alliances.push(Kingdoms.Land)
            }
            break;
        case Kingdoms.water:
            if (check(emblem,secretMessage)) {
                victories = victories + 1;
                alliances.push(Kingdoms.water)

            }
            break;
        case Kingdoms.Ice:
            if (check(emblem,secretMessage)) {
                victories = victories + 1;
                alliances.push(Kingdoms.Ice)

            }
            break;
        case Kingdoms.Air:
            if (check(emblem,secretMessage)) {
                victories = victories + 1;
                alliances.push(Kingdoms.Air)

            }
            break;
        case Kingdoms.Fire:
            if (check(emblem,secretMessage)) {
                victories = victories + 1;
                alliances.push(Kingdoms.Fire)

            }
            break;

    }
    return [victories, alliances];
}

module.exports = checkAlliance;