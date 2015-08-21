/**
 * Created by teaera on 2015-08-19;
 */

/* Imoprt */

/* Export */
var modNavTable = {};
module.exports = modNavTable;

var NavTable = React.createClass({
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
          <div className="table-responsive">
          <table className="table table-striped">
            <caption className="text-left bg-info table-caption">{this.state.caption}</caption>
            <thead>
              <tr>
                <td>名称</td>
                <td>开发者</td>
                <td>描述</td>
              </tr>
            </thead>
            <tbody>
            {
              this.state.list.map(function (each, idx) {
                return (
                  <tr>
                    <td>
                      <p><i className="glyphicon glyphicon-chevron-right"></i>&nbsp;<a target="_blank" href={each.link}>{each.name}</a></p>
                    </td>
                    <td>
                      <p>{each.author}</p>
                    </td>
                    <td>
                      <p className="te-break">{each.description}</p>
                    </td>
                  </tr>
                );
              })
            }
            </tbody>
          </table>
        </div>
        );
        break;
      case 1:
        return (
          <div className="table-responsive">
          <table className="table table-striped">
            <tbody>
            {
              this.state.list.map(function (each, idx) {
                return (
                  <tr>
                    <td>
                      <p><i className="glyphicon glyphicon-chevron-right"></i>&nbsp;{each.name}</p>
                    </td>
                    <td>
                      <p><a target="_blank" href={each.link}>{each.name}</a></p>
                    </td>
                    <td>
                      <div className="outFrame">
                        <iframe className="inFrame" src={each.link}></iframe>
                      </div>
                    </td>
                    <td>
                      <p>开发者：{each.author}</p>
                      <p>描述：{each.description}</p>
                    </td>
                  </tr>
                );
              })
            }
            </tbody>
          </table>
        </div>
        );
        break;
      case 2:
      default:
        return (
          <div className="card-table">
            <div className="card-table-title">
              <h4><font color="#cc0000"><i className="glyphicon glyphicon-paperclip"></i>&nbsp;</font><font size="+1"><strong>{this.state.caption}</strong></font></h4>
              <h6 className="card-table-sep"></h6>
            </div>
            <div className="card-table-body">
              <div className="row">
                  {
                    this.state.list.map(function (each, idx) {
                      return (
                        <div className="col-md-3 col-xs-12 col-sm-6 col-lg-3">
                          <div className="panel panel-default">
                            <div className="panel-heading">
                              <i className="glyphicon glyphicon-chevron-right"></i>&nbsp;<a target="_blank" href={each.link}>{each.name}</a>
                            </div>
                            <div className="panel-body">
                              <p>开发者：{each.author}</p>
                              <h6 className="card-table-sep"></h6>
                              <p>描述：{each.description}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  }
              </div>
            </div>
          </div>
        );
    }
  }
});

modNavTable.init = function (source, elemId) {
  React.render(
    <NavTable source={source}/>,
    document.getElementById(elemId)
  );
};
