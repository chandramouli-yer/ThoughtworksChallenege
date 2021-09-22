const isWaterKingdomAllied = (message) => {

    if ((message.match(/P/g) || []).length >= 1 &&
        (message.match(/U/g) || []).length >= 1 &&
        (message.match(/S/g) || []).length >= 1 &&
        (message.match(/O/g) || []).length >= 2 &&
        (message.match(/T/g) || []).length >= 1 &&
        (message.match(/C/g) || []).length >= 1
    ) {
        return 1;
    }
    return 0;
}
module.exports=isWaterKingdomAllied;