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
<!-- 
- 自定义的命令行工具`c`
- 通过`c`命令来执行 拉取 创建 Vue相关项目等功能
- 现已包含功能:
  - 拉取封装好的Vue项目
    - 内置动态路由
    - 内置动态store
    - 内置axios -->

### 创建项目
```
c create your_project_name
```



### 创建组件

```javascript
# 默认存放到src/component文件夹中
c addcpn yourComponentName 
# 指定存放的具体文件夹 
c addcpn yourComponentName -d src/pages/home 
```



### 创建page

```javascript
# c addpage Home，默认会放到src/pages/home/Home.vue中，并且会创建src/page/home/router.js 
c addpage YourPageName
# 也可以指定文件夹，但需要手动集成路由 
c addpage YourPageName -d src/views
```

### 为什么会创建router.js文件：

- `router.js`文件是路由的其中一个配置；
- 创建该文件中 `src/router/index.js`中会自动加载到路由的 `routes`配置中，不需要手动配置了（如果是自己配置的文件夹需要手动配置）

`src/router/index.js`中已经完成如下操作：

```javascript
// 动态加载pages中所有的路由文件
const files = require.context('@/pages', true, /router\.js$/);
const routes = files.keys().map(key => {
  const page = require('@/pages' + key.replace('.', ''));
  return page.default;
})
```





### 创建Vuex子模块

```javascript
c addstore YourVuexChildModuleName # 例如c addstore home，默认会放到src/store/modules/home/index.js和types.js 
c addstore YourVuexChildModuleName -d src/vuex/modules # 指定文件夹 
```

创建完成后，不需要手动配置，已经动态将所有子模块集成进去：

```javascript
// 动态加载modules
const modules = {}
const files = require.context('./', true, /index\.js$/);
files.keys().filter(key => {
  if (key === './index.js') return false;
  return true
}).map(key => {  
  // 获取名字
  const modulePath = key.replace('./modules/', '');
  const moduleName = modulePath.replace('/index.js', '');
  const module = require(`${key}`);
  modules[`${moduleName}`] = module.default;
})
```





### Warning:

- 命令会逐步更新