'use strict';
//olion ominaisuudet parametrissa
var Person = function(firstName, lastName) {
    console.log(this);
    this.firstName = firstName;
    this.lastName = lastName;
};

Person.prototype.getFullname = function() {
    return this.firstName + " " + this.lastName;
};

Person.prototype.greet = function(person) {
    if (person instanceof Person) {
        return "Hello " + person.getFullname();
    } else {
        return "Syntax Error!";
    };
};

var person = new Person("Haba", "huhtala"),
    person2 = new Person("Joku", "Jaska");


alert(person.greet(person2));
alert(person.getFullname(person));

//luodaan Factory-funktio, helpottaa luokkien luomista
/*function createPerson(firstName, lastName) {

    return {
        firstName: firstName,
        lastName: lastName,
        getFullname: function() {
            return this.firstName + " " + this.lastName;
        },
        greet: function(person) {
            if (typeof person.getFullname !== "undefined") {
                return "Hello " + person.getFullname();
            } else {
                return "Syntax error!";
            }
        }
    };
};

var person = createPerson("haba", "huhtala"),
    person2 = createPerson("joku", "jaska");*/
