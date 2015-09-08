/**
 * Created by teaera on 2015-08-23;
 */

/* Import */
var
  modTENavbar = require('static/module/component/te_navbar'),
  modTETimeline = require('static/module/component/te_timeline'),
  modTETable = require('static/module/component/te_table'),
  modTEFooter = require('static/module/component/te_footer'),
  modTEVelocityDemo = require('static/module/component/te_velocity_demo'),
  //
  modTECanvas = require('static/module/te/te_canvas');

/* Export */

/* All ids */
var
  idDev = 'content1',
  idResearch = 'content2',
  idStat = 'content3',
  idOther = 'content4',
  //
  idTENavbar = 'te-navbar',
  idTEContent = 'te-content',
  idTEFooter = 'te-footer',
  //
  idTECanvas = 'te-canvas';
/* All data files */
var
  jsonIndexNavbar = '/teaera/static/json/te-data-index-navbar.json',
  jsonTimeline = '/teaera/static/json/te-data-timeline.json',
  jsonProject = '/teaera/static/json/te-data-project.json';
/* All handlers */
var
  initIndex = function () {
    // modTECanvas.init(idTECanvas);
    modTEVelocityDemo.init(idTEContent);
  },
  initTimeline = function () {
    modTETimeline.init(idTEContent, {
      source: jsonTimeline
    });
  },
  initProject = function () {
    modTETable.init(idTEContent, {
      source: jsonProject,
      type: 'project'
    });
  },
  initLeisure = function () {
    // modTETable.init(idTEContent, {});
  };
/**/
var
  callbackMapper = {
    index: function () {
      initIndex();
      //
      /*document.getElementById(idTEContent).style.display = 'none';
      document.getElementById(idTECanvas).style.display = 'block';*/
      document.getElementById(idTEContent).style.display = 'block';
      document.getElementById(idTECanvas).style.display = 'none';
    },
    timeline: function () {
      initTimeline();
      //
      document.getElementById(idTEContent).style.display = 'block';
      document.getElementById(idTECanvas).style.display = 'none';
    },
    project: function () {
      initProject();
      //
      document.getElementById(idTEContent).style.display = 'block';
      document.getElementById(idTECanvas).style.display = 'none';
    },
    leisure: function () {
      //
      document.getElementById(idTEContent).style.display = 'block';
      document.getElementById(idTECanvas).style.display = 'none';
    }
  };

console.log('> index-main: init');
//
modTENavbar.init(idTENavbar, {
  source: jsonIndexNavbar,
  callbackMapper: callbackMapper
});
//
modTEFooter.init(idTEFooter, {});
callbackMapper['index']();
