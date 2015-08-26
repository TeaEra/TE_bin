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
      list: [],
      type: this.props.info.type
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
  render: function() {
    var
      that = this,
      type = that.state.type || 'default';
    switch (type) {
      case 'project':
        return (
          React.createElement("div", {className: "table-responsive"},
            React.createElement("table", {className: "table table-striped"},
              React.createElement("tbody", null,

                this.state.list.map(function(each, idx) {
                  var
                    name = each.title,
                    link = each.link,
                    desc = each.desc[0] || '',
                    skills = each.skills,
                    skillsHtml = '';
                  skills.map(function (eachSkill, idx) {
                    skillsHtml += '<i class="i-area fa-4x icon-' + eachSkill + '" title="' + eachSkill + '"></i>';
                  });
                  return (
                    React.createElement("tr", null,
                      React.createElement("td", {className: "col-md-4 col-lg-4 col-xs-12 col-sm-12"},
                        React.createElement("p", null,
                          React.createElement("i", {className: "glyphicon glyphicon-chevron-right"}),
                          " ", React.createElement("a", {target: "_blank", href: link}, name)
                        )
                      ),
                      React.createElement("td", {className: "col-md-4 col-lg-4 col-xs-12 col-sm-12"},
                        React.createElement("p", null, desc)
                      ),
                      React.createElement("td", {className: "col-md-4 col-lg-4 col-xs-12 col-sm-12"},
                        React.createElement("p", {dangerouslySetInnerHTML: {__html: skillsHtml}})
                      )
                    )
                  );
                })

              )
            )
          )
        );
        break;
      case 'default':
      default:
        return (
          React.createElement("div", {className: "table-responsive"},
            React.createElement("table", {className: "table table-striped"},
              React.createElement("tbody", null,

                this.state.list.map(function(each, idx) {
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
    };
  }
});

modTETable.init = function(elemId, info) {
  React.render(
    React.createElement(TETable, {info: info}),
    document.getElementById(elemId)
  );
};
