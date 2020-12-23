# c-terminal-tool 1.0.0

- 自定义的命令行工具
- 可以通过 c --help 查看帮助

# 实现:
- 拉取Vue模版工程
  - 包含动态路由
  - 包含动态store
  - 包含axios网络请求
- 命令会逐步更新

### 安装方式
```
npm install c --global
```
### 查看版本号
```
c --version 
```


### 通过c create xxx 可拉取Vue工程模版
```javascript
c create demo
```

### 通过c addcpn xxx 可以创建组件
```javascript
c addcpn demoComponent
```

### 通过c addpage xxx 可以创建page
```javascript
c addpage demoPage
```

### 通过c addstore xxx 可以创建store
```javascript
c addstore demoStore
```