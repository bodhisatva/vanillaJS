var myFunctionsObject = {

    doSomething: function() { //function expression, sisältää arguments-olion vaikka ei näy
        alert(arguments.length);
        alert(arguments[0]);
        alert(arguments[1]);
    },

    secondFunction: function() {
        var caller = arguments.callee;

        alert(arguments.length);
        alert("Caller: " + caller);
    },

    closures: function(arguments1) {
        console.log("sisällä!");

        return function() {
            alert(arguments1);
        }
    }

}

/*myFunctionsObject.doSomething("hi", "there");*/
/*myFunctionsObject.secondFunction();*/
var test = myFunctionsObject.closures("Hi, Closures!");
test();
