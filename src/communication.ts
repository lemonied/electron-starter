import { ipcMain, app, BrowserWindow } from 'electron';
import * as path from 'path';

export function registerCommunication(win: BrowserWindow) {
  ipcMain.handle('cpu-usage', async () => {
    return process.getCPUUsage();
  });

  ipcMain.handle('quit', async () => {
    return app.quit();
  });

  ipcMain.handle('maximize', async () => {
    return win.maximize();
  });

  ipcMain.handle('lib-url', async () => {
    return `file:///${path.join(__dirname, '../lib')}`;
  });

}
