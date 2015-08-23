/**
 * Created by teaera on 2015-08-20;
 */
 
/* jshint ignore:start */

/* Import */

/* Export */
var modTENavbar = {};
module.exports = modTENavbar;

var TENavBar = React.createClass({
  getInitialState: function () {
    return {
      info: this.props.info,
      currLiIdx: 0
    }
  },
  liClick: function (idx) {
    var
      liList = document.querySelectorAll('li[data-li-idx]');
    for (var i=0, size=liList.length; i<size; ++i) {
      liList[i].className = '';
    }
    var
      currLi = document.querySelector('li[data-li-idx="' + idx + '"]');
    currLi.className = 'active';
    var
      scrollTarId = currLi.getAttribute('data-scroll-to');
    //
    var
      isCollapseIn = document.querySelector('div#navbar').className.indexOf('in') >= 0;
    if (isCollapseIn) {
      document.querySelector('button[data-target="#navbar"]').click();
    }
    //
    window.scrollTo(0, document.getElementById(scrollTarId).offsetTop - 60);
  },
  render: function () {
    var
      that = this;
    var
      brandTitle = that.props.info.brandTitle || 'TeaEra';
    return (
      <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand">{brandTitle}</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
            {
              this.state.info.liList.map(function (each, idx) {
                var
                  id = each.id,
                  txt = each.txt;
                var
                  liClick = that.liClick.bind(that, idx);
                if (idx === that.state.currLiIdx) {
                  return (
                    <li className="active" data-li-idx={idx} onClick={liClick} data-scroll-to={id}><a>{txt}</a></li>
                  );
                }
                else {
                  return (
                    <li data-li-idx={idx} onClick={liClick} data-scroll-to={id}><a onClick={liClick}>{txt}</a></li>
                  );
                }
              })
            }
            </ul>
          </div>
        </div>
      </nav>
    );
  }
});

modTENavbar.init = function (elemId, info) {
  React.render(
    <TENavBar info={info}/>,
    document.getElementById(elemId)
  );
};

/* jshint ignore:end */