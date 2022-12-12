# Electron Starter

## 视图
- 将静态文件放至`renderer`目录下
- 例如`vue`项目中需要将最终打包的静态文件`static`文件夹和`index.html`放至`renderer`文件夹下
> 注意：由于文件加载使用`file:///`协议，因此前端项目的静态文件引用`baseUrl`需要修改为`./`

## 开发
```bash
npm install
npm run start
```

## 生产
```bash
# 生成可执行文件
npm run build
```

## Lint
```bash
npm run lint
```
