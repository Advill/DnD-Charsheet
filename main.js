const {app, BrowserWindow, Menu} = require("electron");
//const remote = electron.remote;
const fs = require('fs');
const dialog = app.dialog;
const path = require("path");
const url = require("url");

let win;
const template = [
    {
        label: 'New',
        submenu: [
            {label: "Action"},
            {label: "Spell"}
        ]
    }
]

//const menu = Menu.buildFromTemplate(template);



function createWindow(){
    win = new BrowserWindow({
        width:1100, 
        height:600, 
        icon:__dirname+'/img/dnd.png',
        show: false
    });

    //Menu.setApplicationMenu(menu);

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    win.webContents.on('did-finish-load', function() {
        win.show();
    });

    win.on('closed', () => {
        win = null;
    });
}

app.on('ready', createWindow);
