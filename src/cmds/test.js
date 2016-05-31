'use strict';

const myutil = require('../lib/util');

module.exports = function (args) {
    console.log(myutil.md5('123456'));
};