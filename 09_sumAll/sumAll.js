const sumAll = function (firstInt, secondInt) {
    if (firstInt < 0 || secondInt < 0) {
        return "ERROR";
    } else if (typeof firstInt !== "number" || typeof secondInt !== "number") {
        return "ERROR"
    } else if (!Number.isInteger(firstInt) || !Number.isInteger(secondInt)) {
        return "ERROR"
    } else {
        if (firstInt > secondInt) {
            let aux = firstInt;
            firstInt = secondInt;
            secondInt = aux;
        }
        let sum = 0;
        for (let i = firstInt; i <= secondInt; i++) {
            sum += i;
        }
        return sum;
    }

};



// Do not edit below this line
module.exports = sumAll;
