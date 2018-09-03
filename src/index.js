/*const {app, BrowserWindow} = require('electron');
function createWindow () {
    win = new BrowserWindow({width: 800, height: 600})
    
    win.loadURL(url.format
*/

const editJsonFile = require("edit-json-file");
const fs = require("fs");
const path = require("path");

var filePath = path.join(__dirname, "charsheet.json");

//let file = editJsonFile(`/Users/Peter/Documents/vscode/DnD-Charsheet/charsheet.json`);

function printFile() {
    window.alert("hello");
    fs.readFile(filePath, { encoding: 'utf-8' }, function (err, data) {
        if (!err) {
            console.log('received data: ' + data);
        } else {
            console.log(err);
        }
    });
}

function addSpell(spell) {

}

function removeSpell(spell) {

}
