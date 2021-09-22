const isAirKingdomAllied = (message) => {

    if ((message.match(/O/g) || []).length >= 1 &&
        (message.match(/W/g) || []).length >= 1 &&
        (message.match(/L/g) || []).length >= 1
    ) {
        return 1;
    }
    return 0;
}

module.exports=isAirKingdomAllied;