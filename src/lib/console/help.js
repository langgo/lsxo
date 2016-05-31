'use strict';

const chalk = require('chalk');
const Promise = require('bluebird');

function helpConsole(args) {
    const lsxo = this;
    var command = args._[0];
    var fn = lsxo.get(command);
    if (typeof command === 'string' && typeof fn !== 'function') {
        printHelpForCommand(command, fn);
    } else {
        printAllHelp(lsxo.list());
    }

    return Promise.resolve();
}

function printHelpForCommand(cmd_name, fn) {
    var options = fn.options;

    console.log(chalk.blue('Usage:') + ' lsxo', cmd_name, options.usage || '');
    console.log('\n');

    console.log(chalk.blue('Description:'));
    console.log(options.desc || '');
    console.log('\n');

    if (options.args) printList('Arguments', options.args);
    if (options.options) printList('Options', options.options);
}

function printAllHelp(obj) {
    var keys = Object.keys(obj);
    var cmds = [];
    for (var key of keys) {
        cmds.push({
            name: key,
            desc: list[key].options.desc
        })
    }

    console.log(chalk.blue('Usage:') + ' lsxo <command>');
    console.log('\n');

    printList('Commands', cmds);

    printList('Global Options', [
        {name: '--debug', desc: ''}
    ]);

    console.log(chalk.red('For more help, you can use \'lsxo help [command]\' for the detailed information'));
    console.log(chalk.red('or you can check the docs:'), chalk.red.underline('http://lsxo.io/docs/'));
}

function printList(title, list) {
    var length = 0;

    var str = chalk.blue(title + ':') + '\n';

    list.forEach(function (item) {
        length = Math.max(length, item.name.length);
    });

    list.sort(function (a, b) {
        var nameA = a.name;
        var nameB = b.name;

        if (nameA < nameB) return -1;
        else if (nameA > nameB) return 1;

        return 0;
    }).forEach(function (item) {
        var padding = length - item.name.length + 4;
        str += '    ' + chalk.bold(item.name);

        while (padding--) {
            str += ' ';
        }

        str += item.desc + '\n';
    });

    console.log(str);
}