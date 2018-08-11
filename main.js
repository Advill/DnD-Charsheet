const { app, BrowserWindow, Menu, ipcMain, remote } = require("electron");
const fs = require('fs');
const dialog = app.dialog;
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

//const menu = Menu.buildFromTemplate(template);
var sheet = JSON.parse(fs.readFileSync('charsheet.json', 'utf8'));
console.log("Now loading: " + sheet.name);
ipcMain.on('request-sheet', (event, arg) => {
    console.log('request recived!');
    if (sheet != null) {
        event.sender('return-sheet', sheet);
    }
});



function createWindow() {
    win = new BrowserWindow({
        width: 1100,
        height: 600,
        icon: __dirname + '/img/dnd.png',
        show: false
    });

    //Menu.setApplicationMenu(menu);

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'src/index.html'),
        protocol: 'file:',
        slashes: true
    }));

    win.webContents.on('did-finish-load', function () {
        win.show();
    });

    win.on('closed', () => {
        win = null;
    });
}

app.on('ready', createWindow);
