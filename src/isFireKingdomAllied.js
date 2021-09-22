const isFireKingdomAllied = (message) => {

    if ((message.match(/D/g) || []).length >= 1 &&
        (message.match(/R/g) || []).length >= 1 &&
        (message.match(/A/g) || []).length >= 1 &&
        (message.match(/G/g) || []).length >= 1 &&
        (message.match(/O/g) || []).length >= 1 &&
        (message.match(/N/g) || []).length >= 1
    ) {
        return 1;
    }
    return 0;
}
module.exports=isFireKingdomAllied;