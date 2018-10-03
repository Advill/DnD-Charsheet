const ipc = require('electron').ipcRenderer;
const main = remote.require('./main.js');
//required
console.log('ran!');
/*ipcRenderer.on('return-sheet', (event, arg) => {
    console.log('sheet returned!');
});

ipcRenderer.send('request-sheet', 0);*/

function fileSave(json) {
    window.alert("hello");
    ipc.send('user-data', json);
    window.alert("bye");
}

function foo(json) {
    //window.alert(JSON.stringify(json));
}