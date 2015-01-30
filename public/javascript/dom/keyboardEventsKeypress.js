(function() {

    var txtbox = document.getElementById("txtInput");

    eventUtility.addEvent(txtbox, "keypress", function(event) {
        //ie browsers event.keyCode
        var code = eventUtility.getCharCode(event); // tarkistetaan tukeeko selain charCodea vai keyCodea (IE)

        if ((code >= 65 && code <= 92) ||
            (code >= 97 && code <= 122) || (code === 246 || code === 228) || (code === 32)) {

        } else {
            eventUtility.preventDefault(event);
            alert("Not a valid key. ASCII code: " + code);
        }
    });
    //keydown
    //keyup
    //keypress

}());
