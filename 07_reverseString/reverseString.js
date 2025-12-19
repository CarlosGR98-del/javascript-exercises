const reverseString = function(string) {
    let solution = "";
    for (let i = String(string).length - 1; i >= 0; i--){
        solution += String(string).charAt(i);
    }

    return solution;
};

// Do not edit below this line
module.exports = reverseString;
