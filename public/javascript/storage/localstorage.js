//creating persistance with localStorage. For IE8 -> plus other browsers.

//Setting key-values
localStorage.firstName = "Harri"; //window-object
localStorage.setItem("lastName", "Huhtala"); //set key-value pair
localStorage.removeItem("lastName"); //removing key-value from localStorage
//localStorage.clear(); //Clear localstorage
localStorage.age = 33;//numbers converts to string, needs to be parseInt

var age = parseInt(localStorage.age, 10);//converted to number

var person = {
  firstName : "Olli",
  lastName : "Olio",
  age : 45
};

localStorage.person = JSON.stringify(person);// Object person to JSON string
var personObj = JSON.parse(localStorage.person);//For reading localstorage person
alert(personObj.firstName + " " + personObj.lastName);



