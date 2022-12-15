import { ipcRenderer, contextBridge } from 'electron';

async function registerScript() {
  const libUrl = await ipcRenderer.invoke('lib-url');
  const smalltalk = document.createElement('script');
  smalltalk.src = `${libUrl}/smalltalk/smalltalk.min.js`;
  document.body.appendChild(smalltalk);
  const extra = document.createElement('script');
  extra.src = `${libUrl}/main/index.js`;
  document.body.appendChild(extra);
}

// 向页面注入全局变量ipcRenderer，页面js通过调用ipcRenderer.invoke('name', arg1, arg2, ...)与主线程通信
contextBridge.exposeInMainWorld('ipcRenderer', {
  invoke(channel: string, ...args: any[]) {
    return ipcRenderer.invoke(channel, ...args);
  },
});
window.addEventListener('load', registerScript);
