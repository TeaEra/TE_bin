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
  jsonTimeline = '/teaera/static/json/te-data-timeline.json';

var
  initTimeline = function () {
    modTETimeline.init(idTEContent, {
      source: jsonTimeline
    });
  };

console.log('> index-main: init');

modTENavbar.init(idTENavbar, {
  source: jsonIndexNavbar,
  callbackMapper: {
    index: function () {
      //
      document.getElementById(idTEContent).style.display = 'none';
      document.getElementById(idTECanvas).style.display = 'block';
    },
    timeline: function () {
      initTimeline();
      //
      document.getElementById(idTEContent).style.display = 'block';
      document.getElementById(idTECanvas).style.display = 'none';
    },
    project: function () {
      //
      document.getElementById(idTEContent).style.display = 'block';
      document.getElementById(idTECanvas).style.display = 'none';
    },
    leisure: function () {
      //
      document.getElementById(idTEContent).style.display = 'block';
      document.getElementById(idTECanvas).style.display = 'none';
    }
  }
});

modTEFooter.init(idTEFooter, {});

/*modTETable.init(idTEContent, {
  list: [
    {
      name: 'Black&White index',
      link: 'http://teater.sinaapp.com/CZT_Index/libs/TE/test/pages/test_index_b&w.html',
      desc: '黑白'
    },
  ]
});
modTEVelocityDemo.init(idTEContent, {});
modTECanvas.init(idTECanvas, {});*/
