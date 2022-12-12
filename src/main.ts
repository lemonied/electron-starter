import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import { registerCommunication } from './communication';
import { registerShortcut } from './shortcut';

async function createWindow() {
  const win = new BrowserWindow({
    width: 1020,
    height: 600,
    webPreferences: {
      backgroundThrottling: false,
      contextIsolation: false,
      preload: path.resolve(__dirname, 'preload.js'),
    },
    fullscreen: true,
    frame: false,
    show: true,
    resizable: true,
    useContentSize: true,
  });
  // 可以替换成网络地址，http://127.0.0.1:3000
  await win.loadURL(`file:///${path.join(__dirname, '../renderer/index.html')}`);
  return win;
}

app.whenReady().then(createWindow).then(win => {
  registerShortcut(win);
  registerCommunication(win);
});

