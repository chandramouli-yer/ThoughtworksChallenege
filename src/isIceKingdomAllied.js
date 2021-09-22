const isIceKingdomAllied = (message) => {
    if ((message.match(/M/g) || []).length >= 3 &&
        (message.match(/A/g) || []).length >= 1 &&
        (message.match(/O/g) || []).length >= 1 &&
        (message.match(/T/g) || []).length >= 1 &&
        (message.match(/H/g) || []).length >= 1
    ) {
        return 1;
    };
}

module.exports=isIceKingdomAllied;