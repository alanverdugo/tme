module.exports = {
    forEach(array, func) {
        for (let element of array) {
            func(element);
        }
    }
}