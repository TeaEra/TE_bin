/**
 * Created by teaera on 2015-08-24;
 */

/* jshint ignore:start */

/* Import */

/* Export */
var modTEVelocityDemo = {};
module.exports = modTEVelocityDemo;

var TEVelocityDemo = React.createClass({displayName: "TEVelocityDemo",
  getInitialState: function () {
    return {
      info: this.props.info
    };
  },
  demoClick1: function (id) {
    $('#' + id).velocity({
      opacity: 0
    }, {
      duration: 300
    });
  },
  render: function () {
    var
      that = this,
      id = 'demo1',
      demoClick1 = that.demoClick1.bind(that, id);
    return (
      React.createElement("div", {id: id, onClick: demoClick1}, React.createElement("p", null, "Let us move"))
    );
  }
});

modTEVelocityDemo.init = function (elemId, info) {
  React.render(
    React.createElement(TEVelocityDemo, {info: info}),
    document.getElementById(elemId)
  );
};

/* jshint ignore:end */
