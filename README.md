# c-terminal-tool 
### version 1.0.0
- 自定义命令行工具

# 项目用途:
- 自定义的命令行工具`c`
- 通过`c`命令来执行 拉取 创建 Vue相关项目等功能
- 现已包含功能:
  - 拉取封装好的Vue项目
    - 动态路由
    - 动态store
    - axios网络请求

### 安装方式
- 项目已经发布npm,可以通过npm来进行全局安装.
- 安装后可以通过查看版本号来确认是否已经安装成功.
```
npm install c -g
```
### 查看版本号
```
c --version 
```


### 拉取Vue工程模版
1. 拉取代码
2. 自动执行npm install
3. 自动执行npm run serve
4. 自动打开浏览器localhost:8080地址
```javascript
c create demo
```

### 创建全局组件
```javascript
c addcpn demoComponent
c addcpn demoComponent 指定目录
```

### 创建page
```javascript
c addpage demoPage
c addpage demoPage 指定目录
```

### 创建store
```javascript
c addstore demoStore
c addstore demoStore 指定目录
```

### Warning:
- 命令会逐步更新