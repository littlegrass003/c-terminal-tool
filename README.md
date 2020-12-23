# c-terminal-tool 
### version 1.0.0
- 自定义命令行工具
- 一个帮助你快速搭建和开发前端项目的CLI

### 安装
```
npm install c -g
```

### 查看版本号
```
c --version 
```

# 项目用途:
vue项目模块已经帮你配置：
- 常用的目录结构（你可以在此基础上修改）
- vue.config.js（其中配置了别名，你可以自行修改和配置更多）
- axios（网络请求axios的安装以及二次封装）
- vue-router（router的安装和配置，另外有路由的动态加载，后面详细说明）
- vuex（vuex的安装和配置，另外有动态加载子模块，后面详细说明
- 自动拉取项目模板
- 自动安装项目依赖
- 自动打开浏览器:http://localhost:8080/

### 创建项目
```
c create projectName
```

### 创建组件
- 默认存放到src/component文件夹中
```javascript
c addcpn componentName 
```

- 指定存放具体文件夹 
```
c addcpn componentName -d src/pages/home 
```

### 创建page
- 默认存放在src/pages/home/Home.vue中，并且会创建src/page/home/router.js 
- `router.js`文件是路由的其中一个配置；
- 创建该文件中 `src/router/index.js`中会自动加载到路由的 `routes`配置中不需要手动配置了
```javascript
c addpage YourPageName 
```

- 指定存放具体文件夹
- 如果是自己配置的文件夹需要手动配置
```
c addpage YourPageName -d src/views 
```

### 创建Vuex子模块
- 默认存放在src/store/modules/home/index.js和types.js
- 创建完成后，不需要手动配置，已经动态将所有子模块集成进去
```javascript
c addstore moduleName 
```

- 指定文件夹 
- 创建完成后，不需要手动配置，已经动态将所有子模块集成进去
```javascript
c addstore moduleName -d src/vuex/modules 
```

### Warning:

- 命令会逐步更新