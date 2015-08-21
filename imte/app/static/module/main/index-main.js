/**
 * Created by teaera on 2015-08-19;
 */

/* Import */
var
  modNavBar = require('static/module/component/nav-bar'),
  modNavTable = require('static/module/component/nav-table');

/* Export */

/**/
var
  idDev = 'content1',
  idResearch = 'content2',
  idStat = 'content3',
  idOther = 'content4',
  idTeNavBar = 'te-nav-bar';
/**/
var
  srcDev = '/teaera/static/json/data-dev.json',
  srcResearch = '/teaera/static/json/data-research.json',
  srcStat = '/teaera/static/json/data-stat.json',
  srcOther = '/teaera/static/json/data-other.json';

console.log('> index-main: init');
modNavTable.init(srcDev, idDev);
modNavTable.init(srcResearch, idResearch);
modNavTable.init(srcStat, idStat);
modNavTable.init(srcOther, idOther);

modNavBar.init(idTeNavBar, {
  liList: [
    {
      id: 'row-' + idDev,
      txt: '开发组'
    },
    {
      id: 'row-' + idResearch,
      txt: '研究组'
    },
    {
      id: 'row-' + idStat,
      txt: '统计组'
    },
    {
      id: 'row-' + idOther,
      txt: '公司etc'
    }
  ]
});
