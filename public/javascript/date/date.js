(function() {

    var date = new Date(2014, 11, 1), //year, month, day, hours, minutes, seconds
        date2 = new Date(2014, 0, 2),
       /* b = d.getFullYear();*/
        newDate = date.setFullYear(date.getFullYear()-1),
        //arrays date.get-metodeille, pitää olla indeksi mistä päivät luetaan
        months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June"
        ],

        days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ];

    month = months[date.getMonth()],
    day = days[date.getDay()];

    date.setFullYear(date.getFullYear()-1);
    console.log(date.getFullYear());

    /*  alert(month);
      alert(day);
      alert(date.getTime()); //timestamp*/


    if (date < date2) {
        alert("date on pienempi kuin date2");
    } else {
        alert("date on suurempi kuin date2");
    };

 /*   alert(timeChanged);*/

}());
