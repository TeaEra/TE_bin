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

/**/
var
  idDev = 'content1',
  idResearch = 'content2',
  idStat = 'content3',
  idOther = 'content4',
  //
  idTeNavbar = 'te-navbar',
  idTEContent = 'te-content',
  idTEFooter = 'te-footer',
  //
  idTECanvas = 'te-canvas';
/**/
var
  jsonIndexNavbar = '/teaera/static/json/te-data-index-navbar.json';

console.log('> index-main: init');

modTENavbar.init(idTeNavbar, {
  source: jsonIndexNavbar,
  callbackMapper: {
    index: function () {
      console.log(1);
    },
    timeline: function () {
      console.log(2);
    },
    project: function () {
      console.log(3);
    },
    leisure: function () {
      console.log(4);
    }
  }
});

modTETimeline.init(idTEContent, {
  list: [
    {
      title: 'Tianjin University',
      date: '2010.7',
      desc: 'Graduate from Tianjin University;'
    },
    {
      title: 'Tianjin University',
      date: '2006.9',
      desc: 'Term begins;'
    }
  ]
});

modTETable.init(idTEContent, {
  list: [
    {
      name: 'Black&White index',
      link: 'http://teater.sinaapp.com/CZT_Index/libs/TE/test/pages/test_index_b&w.html',
      desc: '黑白'
    },
  ]
});

modTEFooter.init(idTEFooter, {});

modTEVelocityDemo.init(idTEContent, {});

/**/
modTECanvas.init(idTECanvas, {});
