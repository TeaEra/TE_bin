#!/usr/bin/env node

/**
 * Created by teaera on 20160324;
 */

'use strict';

var phplint = require('phplint').lint;
var tefe = {};

/**
 * test
 */
tefe.test = function () {
  console.log('test');
};

/**
 * phplint
 */
tefe.phplint = function (pattern) {
  phplint(pattern, function (err, stdout, stderr) {
    if (err) {
      // throw new Error(err);
      process.stdout.write(err);
    }

    process.stdout.write(stdout);
    process.stderr.write(stderr);

    process.stdout.write('> phplint done;');
  })
};

module.exports = tefe;
