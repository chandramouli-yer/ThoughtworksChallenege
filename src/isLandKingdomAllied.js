const isLandKingdomAllied = (message) => {

    if ((message.match(/P/g) || []).length >= 1 &&
        (message.match(/A/g) || []).length >= 2 &&
        (message.match(/N/g) || []).length >= 1 &&
        (message.match(/D/g) || []).length >= 1
    ) {
        return 1;
    }
    return 0;
}
module.exports=isLandKingdomAllied;