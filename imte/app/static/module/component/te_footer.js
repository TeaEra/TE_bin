/**
 * Created by teaera on 2015-08-24;
 *
 * footer
 */

/* jshint ignore:start */

/* Import */

/* Export */
var modTEFooter = {};
module.exports = modTEFooter;

var TEFooter = React.createClass({displayName: "TEFooter",
  getInitialState: function () {
    var
      style = 'default';
    return {
      info: this.props.info,
      style: style
    };
  },
  render: function () {
    var
      style = this.state.style;
    switch (style) {
      case 'default':
      default:
        return (
        React.createElement("footer", {className: "te-footer"}, 
          React.createElement("div", {className: "container"}, 
            React.createElement("div", {className: "col-md-4 col-lg-4 col-xs-12 col-sm-6"}, 
              React.createElement("div", {className: "fa-2x dotted-border-bottom"}, 
                React.createElement("span", {className: "glyphicon glyphicon-user"}), 
                " About"
              ), 
              React.createElement("div", null, 
                React.createElement("span", {className: "glyphicon glyphicon-hand-right"}), 
                " ", React.createElement("b", {className: "big-name"}, "CHEN Zhengtong")
              ), 
              React.createElement("div", null, 
                React.createElement("span", {className: "glyphicon glyphicon-hand-right"}), 
                " ", React.createElement("b", {className: "big-name"}, "Vince CHEN")
              ), 
              React.createElement("br", null), 
              React.createElement("div", null, 
                React.createElement("p", null, "Just hope life could be simple.")
              )
            ), 
            React.createElement("div", {className: "col-md-4 col-lg-4 col-xs-12 col-sm-6"}, 
              React.createElement("div", {className: "fa-2x dotted-border-bottom"}, 
                React.createElement("span", {className: "glyphicon glyphicon-envelope"}), 
                " Email"
              ), 
              React.createElement("div", null, 
                React.createElement("i", {className: "fa fa-google icon-min-size"}), 
                " ", React.createElement("a", {target: "_top", href: "mailto:cllf08214@gmail.com"}, "cllf08214@gmail.com")
              ), 
              React.createElement("div", null, 
                React.createElement("i", {className: "fa fa-qq"}), 
                " ", React.createElement("a", {target: "_top", href: "mailto:cllf08214@qq.com"}, "cllf08214@qq.com")
              )
            ), 
            React.createElement("div", {className: "col-md-4 col-lg-4 col-xs-12 col-sm-6"}, 
              React.createElement("div", {className: "fa-2x dotted-border-bottom"}, 
                React.createElement("i", {className: "fa fa-desktop"}), 
                " Just do IT"
              ), 
              React.createElement("div", null, 
                React.createElement("i", {className: "fa fa-github"}), 
                " ", React.createElement("a", {target: "_blank", href: "https://github.com/TeaEra"}, "https://github.com/TeaEra")
              ), 
              React.createElement("div", null, 
                React.createElement("i", {className: "fa fa-weibo"}), 
                " ", React.createElement("a", {target: "_blank", href: "http://weibo.com/teaera"}, "http://weibo.com/teaera")
              )
            )
          )
        )
        );
    }
  }
});

modTEFooter.init = function (elemId, info) {
  React.render(
    React.createElement(TEFooter, {info: info}),
    document.getElementById(elemId)
  );
};

/* jshint ignore:end */
