#! /usr/bin/env node

/**
 * Created by teaera on 2015-09-25;
 */

'use strict';

console.log('>>> Welcome to teaera\'s scaffold! <<<');

var
    argv = process.argv,
    userArgs = argv.slice(2);

// if (userArgs.length < 1) {
//     console.log('> ERR: please add your project name as a paramter to tescf;');
//     process.exit(1);
// }

// var
//     projName = userArgs[0];

var
    fs = require('fs'),
    mkdirp = require('mkdirp'),
    fse = require('fs.extra'),
    ncp = require('ncp').ncp;

ncp('node_modules/te-scaffold/app', './app', function (err) {
    if (err) {
        console.log('> ERR: ' + err);
        process.exit(1);
    }
    console.log('OK: ' + ' all inited!');
});