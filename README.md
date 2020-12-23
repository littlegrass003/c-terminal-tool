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
```javascript
c create demo
```
执行后会自动做以下事情:
1. 拉取代码
2. 执行npm install
3. 执行npm run serve
4. 打开浏览器localhost:8080地址

### 创建全局组件
- 默认会创建在`src/components`地址下
- 也可以指定目录创建
```javascript
c addcpn demoComponent 
c addcpn demoComponent src/components/custom
```

### 创建page
- 默认会创建在`src/pages`地址下
- 也可以指定目录创建
```javascript
c addpage demoPage
c addpage demoPage src/pages/custom
```

### 创建store
- 默认会创建在`src/store/modules`下
- 也可以指定目录创建
```javascript
c addstore demoStore
c addstore demoStore src/store/modules/custom
```

### Warning:
- 命令会逐步更新