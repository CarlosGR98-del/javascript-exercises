const repeatString = function (string, num) {
    let solution = "";
    if (num < 0) {
        return "ERROR"
    } else {
        for (let i = 0; i < num; i++) {
            solution += string;
        }
        return solution;
    }
};

// Do not edit below this line
module.exports = repeatString;
