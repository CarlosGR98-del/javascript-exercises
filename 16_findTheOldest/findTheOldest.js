const findTheOldest = function (people) {
    let oldestIndex = 0;
    let oldest = people.reduce((oldest, element, index) => {
        let elementAge;
        if ("yearOfDeath" in element) {
            elementAge = element.yearOfDeath - element.yearOfBirth;
        } else {
            const date = new Date()
            elementAge = date.getFullYear() - element.yearOfBirth;
        }


        if (elementAge > oldest) {
            oldestIndex = index;
            oldest = elementAge;
        }
        return oldest;
    }, 0);
    return people[oldestIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
