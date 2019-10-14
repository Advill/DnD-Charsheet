/*
 * Starts server on port 8991. Listens for post requests (character sheet json) to be written locally to a file.
 */

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

// ipc stuff

app.post('/post', function (req, res) {
    var json = JSON.parse(req.body.j)
    var strjson = JSON.stringify(json, null, 1)

    fs.writeFile('./jsonsrc/charsheet.json', strjson, 'utf8', function (err) {
        if (err) console.log(err)
    });
    console.log("Writing to file...")
});

app.listen(8991);
console.log("listening on port 8991")

process.on('message', (m) => {
    console.log('server shutting down');
    process.exit();
});
