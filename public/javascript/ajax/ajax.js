(function() {

    var xhr = new XMLHttpRequest(); //luodaan XMLHttpRequest-olio ja liitetään xhr:n

    xhr.open("GET", "/text", true); //luodaan AJAX kutsu (tyyppi, polku, false = synkroninen kutsu, true = asynkroninen)
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            var status = xhr.status;
            if ((status >= 200 && status <= 300) || status === 304) {
                var rssFeed = JSON.parse(xhr.responseText);
                var stringFile = JSON.stringify(rssFeed);

               /* alert(rssFeed.channel.title);
                alert(rssFeed.channel.items[0].description);
                alert("The file has been converted back to JSON format:" + stringFile);*/
                /*alert(xhr.responseText);*/
            } else {
                alert("An error occured");
            }
        }
    };

    xhr.send(null);

}());
