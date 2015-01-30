    var form = document.getElementById("theFormTwo");

    eventUtility.addEvent(form, "submit", function(event) {
        var data = getRequestBody();
        var xhr = new XMLHttpRequest(); //luodaan XMLHttpRequest-olio ja liitetään xhr:n

        xhr.open("POST", "/ajaxpost", true); //luodaan AJAX kutsu (tyyppi, polku, false = synkroninen kutsu, true = asynkroninen)
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); //serverille tieto ajaxin  lähettämästä tiedosta (submit form)

        xhr.onreadystatechange = function() { // tarkastetaan xhr:n tilanmuutos
            if (xhr.readyState === 4) {
                var status = xhr.status;
                if ((status >= 200 && status <= 300) || status === 304) {
                    alert(data);
                    /*alert(xhr.responseText);*/
                } else {
                    alert("An error occured: " + status);
                }
            }
        };

        xhr.send(data);
        eventUtility.preventDefault(event);
    });


    var getRequestBody = function() {
        var values = [];

        for (i = 0; i < form.elements.length; i++) {
            var el = form.elements[i],
                name = encodeURIComponent(el.name),
                value = encodeURIComponent(el.value),
                complete = name + "=" + value;

            values.push(complete);
        }
        return values.join("&");
    };
