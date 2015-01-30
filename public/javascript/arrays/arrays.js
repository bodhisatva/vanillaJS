var calculator = {

    calculate: function(x, y, func) {
        return func(x, y);
    }

};

var sum = function(x, y) {
        return x + y;
    },
    diff = function(x, y) {
        return x - y;
    },

    fruit = ["panaani", "omena", "appelsiini", "greippi"],
    index = fruit.indexOf("panaani");

function isString(value, index, array) {
    return typeof value === "string";
};

function isLengthOfOne(value, index, array) {
    return value.length === 1;
};

function startsWith(value, index, array) {
    return value[0] === "a";
};

function startsWithAB(value, index, array) {
    return value[0] === "a" || value[0] === "b;"
}

function newList(value, index, array) {
    return "i like " + value;
}

/*alert(fruit.every(isString)); // tarkistaa array-listan jokaisen indeksin isString funktiolla.
alert(fruit.every(isLengthOfOne));
alert(fruit.some(startsWith)); // jos array-listan joku indeksi alkaa a:lla*/
alert(fruit.filter(newList)); // filter palauttaa uuden array-listan, joka on muodostettu alkuperäisestä listasta
alert(fruit.map(newList)); // map tuottaa uuden listan ehdoilla ja muokkaa sitä

/*
alert(index);
alert(calculator.calculate(1,1,sum));
alert(calculator.calculate(1,1,diff));*/
