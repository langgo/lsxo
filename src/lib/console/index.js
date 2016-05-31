'use strict';

function Console() {
    this.store = {};
}

/*
 options
 usage 用法
 desc 描述
 args 参数
 options 选项
 */
Console.prototype.register = function (name, fn, options) {
    if (!name) throw new TypeError('name is required');
    if (!fn || typeof fn !== 'function') throw new TypeError('fn is required and must be a function');
    options = options || {};

    this.store[name] = fn;
    fn.options = options;
};

Console.prototype.get = function (name) {
    return this.store[name];
};

Console.prototype.list = function () {
    return this.store;
};

module.exports = Console;