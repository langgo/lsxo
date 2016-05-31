const Lsxo = require('./Lsxo');
const minimist = require('minimist');

module.exports = function () {
    var base = process.cwd();
    var cmd_name = process.argv[2] || 'help';
    var args = minimist(process.argv.slice(3));

    var lsxo = new Lsxo(base);
    if (!lsxo.console.get(cmd_name)) {
        cmd_name = 'help';
    }
    lsxo.runCmd(cmd_name, args);
};