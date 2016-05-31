'use strict';

const Console = require('./lib/console');

function Lsxo(base) {
    this.config = {}; // 网站的全局配置
    this.options = {}; // 命令行传的参数 todo 放到 Console 还是 Lsxo
    this.theme = {
        languages: '', // 解析之后的语言 todo 保存所有还是只加载配置中选择的语言
        layout: '', // 解析之后的view
        script: '', // 主题自定义的 helper 加载
        source: '' // css, js ,font 文件。 todo 解析之后的流。保存函数。 返回流的函数
    }; // 主题相关的


    this.db = null; // 数据
    this.console = new Console();
    this.router = null;
    // todo 为每一部分的数据定义格式


    require('./cmds').call(this.console);
}

Lsxo.prototype.runCmd = function (cmd_name, args) {
    var fn = this.console.get(cmd_name);
    return fn.call(this, args);
};

module.exports = Lsxo;