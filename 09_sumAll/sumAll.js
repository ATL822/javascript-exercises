const sumAll = function(startNum, endNum) {
    if (!(Number.isInteger(startNum) & Number.isInteger(endNum))) {
        return "ERROR";
    }
    
    if (startNum < 0 | endNum < 0){
        return "ERROR";
    }

    if (startNum > endNum) {
        let temp = endNum;
        endNum = startNum;
        startNum = temp;
    }

    let sum = 0;
    for (let i = startNum; i <= endNum; i++) {
        sum += i;
    }
    return sum;
    
};

// Do not edit below this line
module.exports = sumAll;
