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

/**/
var
    comp1 = 'package.json',
    comp2 = 'app',
    comp3 = 'app/inc',
    comp4 = 'app/lib',
    comp5 = 'app/vendor',
    comp6 = '.editorconfig';
/**/
var
    handler1 = function (answers) {
        var
            components = answers.init;
        for (var i=0, size=components.length; i<size; ++i) {
            var
                currComp = components[i];
            switch (currComp) {
                case comp1:
                    ncp('node_modules/te-scaffold/demo/' + currComp, './' + currComp, function (err) {
                        if (err) {
                            console.log('> ERR: ' + err);
                            process.exit(1);
                        }
                        console.log('OK: ' + currComp + ' inited!');
                    });
                    break;
                case comp2:
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
                case comp3:
                    ncp('node_modules/te-scaffold/demo/optional/' + currComp, './' + currComp, function (err) {
                        if (err) {
                            console.log('> ERR: ' + err);
                            process.exit(1);
                        }
                        console.log('OK: ' + currComp + ' inited!');
                    });
                    break;
                case comp4:
                    ncp('node_modules/te-scaffold/demo/optional/' + currComp, './' + currComp, function (err) {
                        if (err) {
                            console.log('> ERR: ' + err);
                            process.exit(1);
                        }
                        console.log('OK: ' + currComp + ' inited!');
                    });
                    break;
                case comp5:
                    mkdirp.sync('./' + currComp);
                    break;
                case comp6:
                    ncp('node_modules/te-scaffold/demo/_editorconfig', './' + currComp, function (err) {
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
    };

inquirer.prompt([
    {
        type: 'checkbox',
        message: 'Init helper',
        name: 'init',
        choices: [
            {
                name: comp1,
                checked: true
            },
            {
                name: comp2,
                checked: true
            },
            {
                name: comp3
            },
            {
                name: comp4
            },
            {
                name: comp5
            },
            {
                name: comp6
            },
        ]
    }
], handler1);


/**************************************************/
// var
//     argv = process.argv,
//     userArgs = argv.slice(2);