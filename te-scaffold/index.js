#! /usr/bin/env node

/**
 * Created by teaera on 2015-09-25;
 */

'use strict';

var
    welcomeStr = [
    '',
    ' ___________  ____________  ',
    '/___    ___/  |  ________/  ',
    '    |  |      |  |          ',
    '    |  |      |  |_____     ',
    '    |  |      |   ____/     ',
    '    |  |      |  |          ',
    '    |  |      |  |_______   ',
    '    |__|      |__________\\  ',
    '',
    '>>> Welcome to teaera\'s scaffold! <<<',
    ''
];
for (var i=0, size=welcomeStr.length; i<size; ++i) {
    console.log(welcomeStr[i]);
}

/* Import */
var
    inquirer = require("inquirer"),
    ncp = require('ncp').ncp,
    mkdirp = require('mkdirp');

inquirer.prompt([
    {
        type: 'checkbox',
        message: 'Init helper',
        name: 'init',
        choices: [
            {
                name: 'package.json',
                checked: true
            },
            {
                name: 'app',
                checked: true
            },
            {
                name: 'inc'
            },
            {
                name: 'lib'
            },
            {
                name: 'vendor'
            },
            {
                name: '.editorconfig'
            },
        ]
    }
], function (answers) {
    var
        components = answers.init;
    for (var i=0, size=components.length; i<size; ++i) {
        var
            currComp = components[i];
        switch (currComp) {
            case 'package.json':
                ncp('node_modules/te-scaffold/demo/' + currComp, './' + currComp, function (err) {
                    if (err) {
                        console.log('> ERR: ' + err);
                        process.exit(1);
                    }
                    console.log('OK: ' + currComp + ' inited!');
                });
                break;
            case 'app':
                ncp('node_modules/te-scaffold/demo/' + currComp, './' + currComp, function (err) {
                    if (err) {
                        console.log('> ERR: ' + err);
                        process.exit(1);
                    }
                    console.log('OK: ' + currComp + ' inited!');
                });
                // TODO:
                mkdirp.sync('./' + currComp + '/api');
                mkdirp.sync('./' + currComp + '/conf');
                mkdirp.sync('./' + currComp + '/static/css');
                mkdirp.sync('./' + currComp + '/static/js');
                mkdirp.sync('./' + currComp + '/static/images');
                mkdirp.sync('./' + currComp + '/static/lib');
                break;
            case 'inc':
                ncp('node_modules/te-scaffold/demo/optional/' + currComp, './app/' + currComp, function (err) {
                    if (err) {
                        console.log('> ERR: ' + err);
                        process.exit(1);
                    }
                    console.log('OK: ' + currComp + ' inited!');
                });
                break;
            case 'lib':
                ncp('node_modules/te-scaffold/demo/optional/' + currComp, './app/' + currComp, function (err) {
                    if (err) {
                        console.log('> ERR: ' + err);
                        process.exit(1);
                    }
                    console.log('OK: ' + currComp + ' inited!');
                });
                break;
            case 'vendor':
                // ncp('node_modules/te-scaffold/demo/optional/' + currComp, './app/' + currComp, function (err) {
                //     if (err) {
                //         console.log('> ERR: ' + err);
                //         process.exit(1);
                //     }
                //     console.log('OK: ' + currComp + ' inited!');
                // });
                // TODO:
                mkdirp.sync('./app/' + currComp);
                break;
            case '.editorconfig':
                ncp('node_modules/te-scaffold/demo/' + currComp.replace('.', '_'), './' + currComp, function (err) {
                    if (err) {
                        console.log('> ERR: ' + err);
                        process.exit(1);
                    }
                    console.log('OK: ' + currComp + ' inited!');
                });
                break;
            default:
                // Pass;
        }
    }
});


/**************************************************/
// var
//     argv = process.argv,
//     userArgs = argv.slice(2);