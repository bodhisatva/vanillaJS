(function() {

    var xhr = new XMLHttpRequest();

    var person = {
        firstName: "Joku",
        lastName: "Mies",
        age: 22
    };

    xhr.open("POST", "/data", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    /* alert(person.firstName);*/
    xhr.send(JSON.stringify(person));


}());
