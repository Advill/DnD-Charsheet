var express = require('express');
var app = express();
var fs = require('fs');

var bodyParser = require('body-parser')
var app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => res.send(''))

app.post('/post', function (req, res) {
    var json = JSON.parse(req.body.j)
    var strjson = JSON.stringify(json, null, 1)

    fs.writeFile('./src/charsheet.json', strjson, 'utf8', function (err) {
        if (err) console.log(err)
    });

    console.log("Writing to file...")
    console.log(json.spells)
});

app.listen(3000);
console.log("listening on port 3000")