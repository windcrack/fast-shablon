const { app, BrowserWindow } = require('electron');
const path = require('path');

const data = path.join('./db/shablons.json');


const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('index.html');
  win.webContents.openDevTools();
  document.querySelector('#main').innerHTML = data;
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  })
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
