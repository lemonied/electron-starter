import { ipcMain, app, BrowserWindow } from 'electron';
import process from 'process';

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
}
