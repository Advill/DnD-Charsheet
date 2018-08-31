/*const {app, BrowserWindow} = require('electron');
function createWindow () {
    win = new BrowserWindow({width: 800, height: 600})
    
    win.loadURL(url.format
*/

const editJsonFile = require("edit-json-file");

let file = editJsonFile(`${__dirname}./charsheet.json`);

function printFile() {
    console.log(file.get());
}

function addSpell(spell) {

}

function removeSpell(spell) {

}