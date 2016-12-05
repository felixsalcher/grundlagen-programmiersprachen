var utilityHelper = utilityHelper || {
    math: {
        add: function (x, y) {
            return x + y;
        },
        subtract: function (x, y) {
            return x - y;
        },
        multiply: function (x, y) {
            return x * y;
        },
        divide: function (x, y) {
            return (y !== 0) ? x / y : "Division by 0 not possible!";
        }
    },
    concatString: function () {
        let result = "";

        for(let i = 0; i < arguments.length; i++) {
            result += arguments[i] + " ";
        }

        return result;
    },
    getElement: function (id) {
        return document.getElementById(id);
    }
};

console.log(utilityHelper.math.add(1, 1));
console.log(utilityHelper.math.subtract(2, 1));
console.log(utilityHelper.math.multiply(5, 5));
console.log(utilityHelper.math.divide(10, 5));
console.log(utilityHelper.math.divide(10, 0));
utilityHelper.getElement("ausgabe").innerHTML = utilityHelper.concatString("Felix", "ist", "toll!");
