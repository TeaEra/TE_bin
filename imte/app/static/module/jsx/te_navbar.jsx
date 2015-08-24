/**
 * Created by teaera on 2015-08-20;
 *
 * navbar
 */

/* jshint ignore:start */

/* Import */

/* Export */
var modTENavbar = {};
module.exports = modTENavbar;

var TENavBar = React.createClass({
  getInitialState: function () {
    return {
      callbackMapper: this.props.info.callbackMapper,
      currLiIdx: 0
    }
  },
  componentDidMount: function () {
    var
      source = this.props.info.source;
    $.get(source, function (result) {
      var
        status = result.status;
      if (status === 0) {
        var
          brandTitle = result.result.brandTitle,
          list = result.result.list;
          this.setState({
            brandTitle: brandTitle,
            list: list
          });
      }
      else {
        console.log('error');
      }
    }.bind(this), 'json');
  },
  liClick: function (idx, id) {
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
    /*var
      elemTar = document.getElementById(scrollTarId);
    elemTar && ( window.scrollTo(0, elemTar.offsetTop - 60) );*/
    //
    var
      callback = this.state.callbackMapper[id];
    callback && (callback());
  },
  render: function () {
    var
      that = this;
    var
      brandTitle = that.state.brandTitle || 'TeaEra',
      list = that.state.list || [];
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
              list.map(function (each, idx) {
                var
                  id = each.id,
                  txt = each.txt;
                var
                  liClick = that.liClick.bind(that, idx, id);
                if (idx === that.state.currLiIdx) {
                  return (
                    <li className="active" data-li-idx={idx} onClick={liClick} data-scroll-to={id}><a>{txt}</a></li>
                  );
                }
                else {
                  return (
                    <li data-li-idx={idx} onClick={liClick} data-scroll-to={id}><a>{txt}</a></li>
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
