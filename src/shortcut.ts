import { app, BrowserWindow, globalShortcut } from 'electron';

export function registerShortcut(win: BrowserWindow) {
  globalShortcut.register('CommandOrControl+f12', () => {
    if (win.webContents.isDevToolsOpened()) {
      win.webContents.closeDevTools();
    } else {
      win.webContents.openDevTools();
    }
  });
  globalShortcut.register('CommandOrControl+f11', () => {
    win.setFullScreen(!win.isFullScreen());
  });
  globalShortcut.register('CommandOrControl+f5', () => {
    win.reload();
  });
  app.on('will-quit', () => {
    // Unregister all shortcuts.
    globalShortcut.unregisterAll();
  });
}
