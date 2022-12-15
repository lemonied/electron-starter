function pressToQuit() {
  let timer;
  window.addEventListener('mousedown', ev => {
    if (ev.x / window.innerWidth > 0.9 && ev.y / window.innerHeight < 0.1) {
      timer = window.setTimeout(async () => {
        const password = await window.smalltalk.prompt('关闭程序', '输入密码', '', {
          buttons: {
            ok: '确定',
            cancel: '取消',
          },
        });
        if (password === '123') {
          await window.ipcRenderer.invoke('quit');
        }
      }, 5000);
    }
  });
  window.addEventListener('mouseup', () => {
    clearTimeout(timer);
  });
}
pressToQuit();
