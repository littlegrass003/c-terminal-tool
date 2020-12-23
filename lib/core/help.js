const program = require('commander');

const helpOptions = () => {
    // 可选参数
    program.option('-c --cwz', 'a c cli');
    program.option('-d --dest <dest>', 'a destination folder, 例如-d /src/components');
    program.option('-f --framework <framework>', 'your framework');
    // 监听--help
    program.on('--help', function () {
        console.log('other--\n');
        console.log('other options');
    })
}

module.exports = helpOptions;