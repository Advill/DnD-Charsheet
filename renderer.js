const {ipcRenderer} = require('electron');
const main = remote.require('./main.js');
//required
console.log('ran!');
ipcRenderer.on ('return-sheet', (event, arg) => {
    console.log('sheet returned!');
}

ipcRenderer.send('request-sheet', 0);

