/**
 * Created by teaera on 2015-08-23;
 * 
 * timeline
 */
 
/* jshint ignore:start */
 
/* Import */

/* Export */
var modTETimeline = {};
module.exports = modTETimeline;

var TETimeline = React.createClass({displayName: "TETimeline",
  getInitialState: function () {
    return {
      list: []
    };
  },
  componentDidMount: function () {
    var
      source = this.props.info.source;
    $.get(source, function (result) {
      var
        status = result.status;
      if (status === 0) {
        var
          list = result.result.list;
          this.setState({
            list: list
          });
      }
      else {
        console.log('error');
      }
    }.bind(this), 'json');
  },
  render: function () {
    var
      that = this;
    return (
      React.createElement("ul", {className: "timeline"}, 
      
        this.state.list.map(function (elem, idx) {
          var
            type = elem.type || 'book',
            title = elem.title,
            date = elem.date,
            desc = elem.desc[0] || '';
          var
            clsForLi = idx % 2 === 0 ? 'timeline-inverted' : '';
          return (
            React.createElement("li", {className: clsForLi}, 
              React.createElement("div", {className: "timeline-badge info"}, 
                React.createElement("i", {className: "glyphicon glyphicon-" + type})
              ), 
              React.createElement("div", {className: "timeline-panel"}, 
                React.createElement("div", {className: "timeline-heading"}, 
                  React.createElement("h4", {className: "timeline-title"}, title), 
                  React.createElement("p", null, 
                    React.createElement("small", {className: "text-muted"}, React.createElement("i", {className: "glyphicon glyphicon-calendar"}), date)
                  )
                ), 
                React.createElement("div", {className: "timeline-body"}, 
                  React.createElement("p", null, desc)
                )
              )
            )
          );
        })
      
      )
    );
  }
});

modTETimeline.init = function (elemId, info) {
  React.render(
    React.createElement(TETimeline, {info: info}),
    document.getElementById(elemId)
  );
};
 
/* jshint ignore:end */