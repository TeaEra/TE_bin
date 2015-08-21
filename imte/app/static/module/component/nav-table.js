/**
 * Created by teaera on 2015-08-19;
 */

/* Imoprt */

/* Export */
var modNavTable = {};
module.exports = modNavTable;

var NavTable = React.createClass({displayName: "NavTable",
  getInitialState: function () {
    return {
      caption: '',
      list: []
    };
  },
  componentDidMount: function () {
    var
      source = this.props.source;
    $.get(source, function (result) {
      var
        status = result.status;
      if (status === 0) {
        var
          caption = result.result.caption,
          list = result.result.list;
          this.setState({
            caption: caption,
            list: list
          });
      }
      else {
        console.log('error');
      }
    }.bind(this), 'json');
  },
  render: function() {
    var
      scenario = 2;
    var
      size = this.state.list.length;
    switch (scenario) {
      case 0:
        return (
          React.createElement("div", {className: "table-responsive"}, 
          React.createElement("table", {className: "table table-striped"}, 
            React.createElement("caption", {className: "text-left bg-info table-caption"}, this.state.caption), 
            React.createElement("thead", null, 
              React.createElement("tr", null, 
                React.createElement("td", null, "名称"), 
                React.createElement("td", null, "开发者"), 
                React.createElement("td", null, "描述")
              )
            ), 
            React.createElement("tbody", null, 
            
              this.state.list.map(function (each, idx) {
                return (
                  React.createElement("tr", null, 
                    React.createElement("td", null, 
                      React.createElement("p", null, React.createElement("i", {className: "glyphicon glyphicon-chevron-right"}), " ", React.createElement("a", {target: "_blank", href: each.link}, each.name))
                    ), 
                    React.createElement("td", null, 
                      React.createElement("p", null, each.author)
                    ), 
                    React.createElement("td", null, 
                      React.createElement("p", {className: "te-break"}, each.description)
                    )
                  )
                );
              })
            
            )
          )
        )
        );
        break;
      case 1:
        return (
          React.createElement("div", {className: "table-responsive"}, 
          React.createElement("table", {className: "table table-striped"}, 
            React.createElement("tbody", null, 
            
              this.state.list.map(function (each, idx) {
                return (
                  React.createElement("tr", null, 
                    React.createElement("td", null, 
                      React.createElement("p", null, React.createElement("i", {className: "glyphicon glyphicon-chevron-right"}), " ", each.name)
                    ), 
                    React.createElement("td", null, 
                      React.createElement("p", null, React.createElement("a", {target: "_blank", href: each.link}, each.name))
                    ), 
                    React.createElement("td", null, 
                      React.createElement("div", {className: "outFrame"}, 
                        React.createElement("iframe", {className: "inFrame", src: each.link})
                      )
                    ), 
                    React.createElement("td", null, 
                      React.createElement("p", null, "开发者：", each.author), 
                      React.createElement("p", null, "描述：", each.description)
                    )
                  )
                );
              })
            
            )
          )
        )
        );
        break;
      case 2:
      default:
        return (
          React.createElement("div", {className: "card-table"}, 
            React.createElement("div", {className: "card-table-title"}, 
              React.createElement("h4", null, React.createElement("font", {color: "#cc0000"}, React.createElement("i", {className: "glyphicon glyphicon-paperclip"}), " "), React.createElement("font", {size: "+1"}, React.createElement("strong", null, this.state.caption))), 
              React.createElement("h6", {className: "card-table-sep"})
            ), 
            React.createElement("div", {className: "card-table-body"}, 
              React.createElement("div", {className: "row"}, 
                  
                    this.state.list.map(function (each, idx) {
                      return (
                        React.createElement("div", {className: "col-md-3 col-xs-12 col-sm-6 col-lg-3"}, 
                          React.createElement("div", {className: "panel panel-default"}, 
                            React.createElement("div", {className: "panel-heading"}, 
                              React.createElement("i", {className: "glyphicon glyphicon-chevron-right"}), " ", React.createElement("a", {target: "_blank", href: each.link}, each.name)
                            ), 
                            React.createElement("div", {className: "panel-body"}, 
                              React.createElement("p", null, "开发者：", each.author), 
                              React.createElement("h6", {className: "card-table-sep"}), 
                              React.createElement("p", null, "描述：", each.description)
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
  }
});

modNavTable.init = function (source, elemId) {
  React.render(
    React.createElement(NavTable, {source: source}),
    document.getElementById(elemId)
  );
};
