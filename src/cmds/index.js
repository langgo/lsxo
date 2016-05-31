module.exports = function () {
    const self = this;

    self.register('help', require('./help'), {
        desc: '',
        args: [{name: 'command_name', desc: '要获取帮助的命令的名称'}]
    });

    self.register('test', require('./test'), {
        usage: '<a> <b>',
        desc: '这是一个用来测试的文件',
        args: [{name: 'a', desc: 'a'}, {name: 'b', desc: 'b'}, {name: 'c', desc: 'c'}, {name: 'd', desc: 'd'}],
        options: [{name: 'e', desc: 'e'}, {name: 'f', desc: 'f'}, {name: 'g', desc: 'g'}, {name: 'h', desc: 'h'}]
    })
};