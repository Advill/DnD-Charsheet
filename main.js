const { app, BrowserWindow, Menu, remote } = require("electron");
const ipc = require("electron").ipcMain
const fs = require('fs');
const fork = require('child_process').fork;
//const dialog = app.dialog;
const path = require("path");
const url = require("url");


const template = [
    {
        label: 'New',
        submenu: [
            { label: "Action" },
            { label: "Spell" }
        ]
    }
]

var sheet = JSON.parse(fs.readFileSync('src/charsheet.json', 'utf8'));
console.log("Now loading: " + sheet.name);



function mainSave(json) {
    fs.writeFileSync("/Users/Peter/Documents/vscode/DnD-Charsheet/test.json", "hello"/*JSON.stringify(json, null, 4)*/);
}

// fork
var ch = fork('./filewrite.js');
ch.on('error', function(message) {
    console.log(message);
});

//End IPC stuff

module.exports = mainSave;
function createWindow() {
    win = new BrowserWindow({
        width: 1100,
        height: 600,
        icon: __dirname + '/img/dnd.png',
        show: false
    });

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'src/index.html'),
        protocol: 'file:',
        slashes: true
    }));

    win.webContents.on('did-finish-load', function () {
        win.show();
    });

    win.on('closed', () => {
        console.log('client shutting down');
        ch.send({message: 'shutdown'});
        win = null;
    });
}

app.on('ready', createWindow);


