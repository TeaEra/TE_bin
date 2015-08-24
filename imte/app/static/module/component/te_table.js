/**
 * Created by teaera on 2015-08-19;
 */

/* Imoprt */

/* Export */
var modTETable = {};
module.exports = modTETable;

var TETable = React.createClass({displayName: "TETable",
  getInitialState: function() {
    return {
      info: this.props.info
    };
  },
  render: function() {
    return (
      React.createElement("div", {className: "table-responsive"}, 
        React.createElement("table", {className: "table table-striped"}, 
          React.createElement("tbody", null, 
          
            this.state.info.list.map(function(each, idx) {
              var
                name = each.name,
                link = each.link,
                desc = each.desc || '';
              return (
                React.createElement("tr", null, 
                  React.createElement("td", null, 
                    React.createElement("p", null, 
                      React.createElement("i", {className: "glyphicon glyphicon-chevron-right"}), 
                      React.createElement("a", {target: "_blank", href: link}, name)
                    )
                  ), 
                  React.createElement("td", null, 
                    React.createElement("p", null, desc)
                  ), 
                  React.createElement("td", null, 
                    React.createElement("div", {className: "outFrame"}, 
                      React.createElement("iframe", {className: "inFrame", src: link})
                    )
                  )
                )
              );
            })
          
          )
        )
      )
    );
  }
});

modTETable.init = function(elemId, info) {
  React.render(
    React.createElement(TETable, {info: info}),
    document.getElementById(elemId)
  );
};
