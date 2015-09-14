/**
 * Created by teaera;
 */

'use strict';
 
/* Import */

/* Export */
var currMod = {};

if ( typeof module === "object" && typeof module.exports === "object" ) {
  module.exports = currMod;
}
else {
  window.currMod = window.currMod || currMod;
}

/* */