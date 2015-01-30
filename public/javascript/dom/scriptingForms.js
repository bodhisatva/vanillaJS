(function() {

    var form = document.getElementById('theForm'),
        button = form.myButton,
        textBox = form.myTextBox,
        textArea = form.myTextArea,
        select = form.dayOfWeek,
        color = form.colorBox; //Hakee formista kaikki colorBox-elementit ja luo niistä arrayn

    eventUtility.addEvent(form, "submit", function() {
        eventUtility.preventDefault(event);
    });

    eventUtility.addEvent(button, "click", function(event) {
        /*var target = eventUtility.getTarget(event);
        target.disabled = true; nappin toiminto pois päältä
         target.disabled = false;  napin toiminto takaisin päälle
         alert(target.type);*/

        var index = select.selectedIndex,
            option = select.options[index],
            pickedColors = [];

        if (textBox.value === "") {
            alert("Please add text in box");
            textBox.focus(); //lisätään fokus tyhjään laatikkoon
        } else if (textArea.value === "") {
            alert("Please add text in Text area");
            textArea.focus(); //lisätään fokus tyhjään laatikkoon

        };

        //textArea.select();  Jos halutaan käyttäjälle fokus kirjoittamaansa tekstiin
        //alert(option.value);

        select.remove(3); //Poistetaan kolmannesta indeksistä päivä
        var wedOptions = new Option("Wednesday", 3); //luodaan kolmanteen indeksiin uusi päivä-olio
        select.add(wedOptions, select.options[3]);

        for (i = 0; i < color.length; i++) {
            if (color[i].checked) {
                pickedColors.push(color[i].value);
            }
        };

        if (pickedColors.length > 0) {
            alert(pickedColors.join(", "));
        };
    });

}());
