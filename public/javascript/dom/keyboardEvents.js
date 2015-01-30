(function() {

    var txtBox = document.getElementById('txtInput');

    eventUtility.addEvent(document, "keydown", function(event) {

        var code = event.keyCode,
            ctrlKey = event.ctrlKey; //kuunnellaan painaako käyttäjä ctrl-nappia
        /* altKey = event.altKey,*/
        /*  shiftKey = event.shiftKey;*/

        if (ctrlKey && code === 66) {
            alert("You pressed ctrl+b");
        };

    });

}());
