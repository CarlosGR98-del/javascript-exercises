const removeFromArray = function (array, itemToRemove) {
    let indexToDelete = [];
    if (arguments.length > 2) {
        indexToDelete = Array.from(arguments).slice(1).map((item) => array.indexOf(item));
    } else {
        let firstInstance = array.indexOf(itemToRemove);
        while (firstInstance !== -1) {
            indexToDelete.push(firstInstance);
            firstInstance = array.indexOf(itemToRemove, firstInstance + 1);
        }
    }

    indexToDelete.sort((a, b) => b - a);

    for (let i = 0; i < indexToDelete.length; i++) {
        if (indexToDelete[i] >= 0) {
            array.splice(indexToDelete[i], 1);
            console.log(array)
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
