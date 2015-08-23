/**
 * Created by teaera on 2015-08-20;
 */
 
/* jshint ignore:start */

/* Import */

/* Export */
var modTENavbar = {};
module.exports = modTENavbar;

var TENavBar = React.createClass({displayName: "TENavBar",
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
            
              this.state.info.liList.map(function (each, idx) {
                var
                  id = each.id,
                  txt = each.txt;
                var
                  liClick = that.liClick.bind(that, idx);
                if (idx === that.state.currLiIdx) {
                  return (
                    React.createElement("li", {className: "active", "data-li-idx": idx, onClick: liClick, "data-scroll-to": id}, React.createElement("a", null, txt))
                  );
                }
                else {
                  return (
                    React.createElement("li", {"data-li-idx": idx, onClick: liClick, "data-scroll-to": id}, React.createElement("a", {onClick: liClick}, txt))
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
  React.render(
    React.createElement(TENavBar, {info: info}),
    document.getElementById(elemId)
  );
};

/* jshint ignore:end */