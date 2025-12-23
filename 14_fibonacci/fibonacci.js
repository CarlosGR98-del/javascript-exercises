const fibonacci = function (number) {
    number = Number(number);
    if (number === 0) {
        return 0;
    } else if (number === 1) {
        return 1;
    } else if (number < 0) {
        return "OOPS";
    } else {
        let sequence = [1, 1];
        number--;
        for (let i = 2; i <= number; i++) {
            sequence.push(sequence[i - 1] + sequence[i - 2]);
        }
        return sequence.at(sequence.length - 1);
    }
};

// Do not edit below this line
module.exports = fibonacci;
