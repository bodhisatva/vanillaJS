var calculate = function() {
    var fn = Array.prototype.pop.apply(arguments); //kutsutaan arrayn pop-metodia (poistaa listan viimeisen indeksin, eli funktion) ja yhdistetään se argumentsiin call-metodilla = eräänlaista periyttämistä
    console.log(fn);
    console.log(arguments);
    return fn.apply(null, arguments); // apply välitää argumentsin listana, jokainen arvo erikseen
};

var sum = function() { //parametreissä ei voi välittää oliota
    var total = 0;

    for (i = 0; i < arguments.length; i++) { //iteroidaan läpi kaikki argumentsin arvot ja lisätään yhteen
        total += arguments[i];
    };

    return total; //palautetaan kaikki yhdessä
};

var diff = function() {
    var total = Array.prototype.shift.apply(arguments); //poistetaan ensimmäinen indeksi listasta ja liitetään takaisin

    for (i = 0; i < arguments.length; i++) {
        total -= arguments[i];
    };
    return total;
};


var sumResult = calculate(1, 1, sum);
   /* diffResult = calculate(1, 1, diff);*/


alert("summa: " + sumResult);
/*alert("ero: " + diffResult);*/
