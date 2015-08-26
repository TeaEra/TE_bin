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

var TENavBar = React.createClass({displayName: "TENavBar",
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
      React.createElement("nav", {className: "navbar navbar-default navbar-fixed-top", role: "navigation"}, 
        React.createElement("div", {className: "container"}, 
          React.createElement("div", {className: "navbar-header"}, 
            React.createElement("button", {type: "button", className: "navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#navbar", "aria-expanded": "false", "aria-controls": "navbar"}, 
              React.createElement("span", {className: "sr-only"}, "Toggle navigation"), 
              React.createElement("span", {className: "icon-bar"}), 
              React.createElement("span", {className: "icon-bar"}), 
              React.createElement("span", {className: "icon-bar"})
            ), 
            React.createElement("a", {className: "navbar-brand"}, brandTitle)
          ), 
          React.createElement("div", {id: "navbar", className: "navbar-collapse collapse"}, 
            React.createElement("ul", {className: "nav navbar-nav navbar-right"}, 
            
              list.map(function (each, idx) {
                var
                  id = each.id,
                  txt = each.txt;
                var
                  liClick = that.liClick.bind(that, idx, id);
                if (idx === that.state.currLiIdx) {
                  return (
                    React.createElement("li", {className: "active", "data-li-idx": idx, onClick: liClick, "data-scroll-to": id}, React.createElement("a", null, txt))
                  );
                }
                else {
                  return (
                    React.createElement("li", {"data-li-idx": idx, onClick: liClick, "data-scroll-to": id}, React.createElement("a", null, txt))
                  );
                }
              })
            
            )
          )
        )
      )
    );
  }
});

modTENavbar.init = function (elemId, info) {
  //
  React.render(
    React.createElement(TENavBar, {info: info}),
    document.getElementById(elemId)
  );
};

/* jshint ignore:end */
