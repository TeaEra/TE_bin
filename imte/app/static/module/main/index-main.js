/**
 * Created by teaera on 2015-08-23;
 */

/* Import */
var
  modTENavbar = require('static/module/component/te-navbar'),
  modTETimeline = require('static/module/component/te-timeline'),
  modTETable = require('static/module/component/te-table');

/* Export */

/**/
var
  idDev = 'content1',
  idResearch = 'content2',
  idStat = 'content3',
  idOther = 'content4',
  idTeNavbar = 'te-navbar',
  idTEContent = 'te-content';

console.log('> index-main: init');

modTENavbar.init(idTeNavbar, {
  brandTitle: 'TeaEra',
  liList: [
    {
      id: idDev,
      txt: '留1'
    },
    {
      id: idResearch,
      txt: '留2'
    },
    {
      id: idStat,
      txt: '留3'
    },
    {
      id: idOther,
      txt: '留4'
    }
  ]
});

modTETimeline.init(idTEContent, {
  list: [
    {
      title: 'Tianjin University',
      date: '2010.7',
      desc: 'Graduate from Tianjin University.;'
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