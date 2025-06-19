const repeatString = function(strToRepeat, timesToRepeat) {
    if (timesToRepeat < 0) {
        return 'ERROR';
    }

    let returnStr = '';
    for (let i = 0; i < timesToRepeat; i++) {
        returnStr += strToRepeat;
    }
    return returnStr;
};

// Do not edit below this line
module.exports = repeatString;
