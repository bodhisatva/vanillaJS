var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function (req, res) { //index-sivun reitítys
    res.render('index');
});

router.get('/text', function (req, res) { //ajax-tekstin palautus (ajax.js kutsuu)
    res.sendFile('json_text.text', {//määritellään polku palautettavalle tiedostolle
        root: path.join(__dirname, '../texts')
    });
});

router.post('/ajaxpost', function (req, res) {//json tiedoston lähetys palvelimelle (formAjax.js kutsuu)
    console.log(req.body);
   /* res.sendStatus(status);*/
    res.end();
});

router.post('/data', function (req, res) {//json tiedoston lähetys palvelimelle (post_json.js kutsuu)
    var stringObject = JSON.stringify(req.body);
    console.log(req.body);
    console.log(stringObject);
   /* res.sendStatus(status);*/
    res.end();
});


module.exports = router;
