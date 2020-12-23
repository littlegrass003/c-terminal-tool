const {
    promisify
} = require('util');
const path = require('path');

const download = promisify(require('download-git-repo'));
const open = require('open');

const {
    vueRepostitory
} = require('../config/repo-config');
const {
    commandSpawn
} = require('../utils/terminal');
const {
    compile,
    writeToFile,
    createDirSync
} = require('../utils/utils');


// 创建项目
const createProjectAction = async (project) => {
    console.log('c helping you build the project, Please wait``````');

    // 1. clone项目
    await download(vueRepostitory, project, {
        clone: true
    });

    // 判断平台
    const command = process.platform === 'win32' ? 'npm.cmd' : 'npm';
    // 2. 执行npm install
    await commandSpawn(command, ["install"], {
        cwd: `./${project}`
    });

    // 3.npm run serve
    await commandSpawn(command, ['run', 'serve'], {
        cwd: `./${project}`
    });

    // 打开浏览器
    open("http://localhost:8080/");
}

// 添加组件
const addComponentAction = async (name, dest) => {
    const result = await compile('vue-component.ejs', {
        name,
        lowerName: name.toLowerCase()
    });
    const targetPath = path.resolve(dest, `${name}.vue`);
    writeToFile(targetPath, result);
    console.log('Component创建成功==>', targetPath);
}


// 添加组件和路由
const addPageAndRouteAction = async (name, dest) => {
    const data = {
        name,
        lowerName: name.toLowerCase()
    };
    const pageResult = await compile('vue-component.ejs', data);
    const routeResult = await compile('vue-router.ejs', data);
    const targetDest = path.resolve(dest, name.toLowerCase());
    if (createDirSync(targetDest)) {
        const targetPagePath = path.resolve(targetDest, `${name}.vue`);
        const targetRoutePath = path.resolve(targetDest, 'router.js')
        writeToFile(targetPagePath, pageResult);
        writeToFile(targetRoutePath, routeResult);
        console.log('Page创建成功==>', targetPagePath);
        console.log('Route创建成功==>', targetRoutePath);
    }
}

// 添加store
const addStoreAction = async (name, dest) => {
    const storeResult = await compile('vue-store.ejs', {});
    const typesResult = await compile('vue-types.ejs', {});
    const targetDest = path.resolve(dest, name.toLowerCase());
    if (createDirSync(targetDest)) {
        const targetStorePath = path.resolve(targetDest, `${name}.js`);
        const targetTypesPath = path.resolve(targetDest, 'types.js')
        writeToFile(targetStorePath, storeResult);
        writeToFile(targetTypesPath, typesResult);
        console.log('Types创建成功==>', typesResult);
        console.log('Store创建成功==>', storeResult);
    }
}

module.exports = {
    createProjectAction,
    addComponentAction,
    addPageAndRouteAction,
    addStoreAction
}