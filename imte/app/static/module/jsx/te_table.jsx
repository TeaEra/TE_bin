/**
 * Created by teaera on 2015-08-19;
 */

/* Imoprt */

/* Export */
var modTETable = {};
module.exports = modTETable;

var TETable = React.createClass({
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
          <div className="table-responsive">
            <table className="table table-striped">
              <tbody>
              {
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
                  console.log(skillsHtml);
                  return (
                    <tr>
                      <td className="col-md-4 col-lg-4 col-xs-12 col-sm-12">
                        <p>
                          <i className="glyphicon glyphicon-chevron-right"></i>
                          &nbsp;<a target="_blank" href={link}>{name}</a>
                        </p>
                      </td>
                      <td className="col-md-4 col-lg-4 col-xs-12 col-sm-12">
                        <p>{desc}</p>
                      </td>
                      <td className="col-md-4 col-lg-4 col-xs-12 col-sm-12">
                        <p dangerouslySetInnerHTML={{__html: skillsHtml}}></p>
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
      case 'default':
      default:
        return (
          <div className="table-responsive">
            <table className="table table-striped">
              <tbody>
              {
                this.state.list.map(function(each, idx) {
                  var
                    name = each.name,
                    link = each.link,
                    desc = each.desc || '';
                  return (
                    <tr>
                      <td>
                        <p>
                          <i className="glyphicon glyphicon-chevron-right"></i>
                          <a target="_blank" href={link}>{name}</a>
                        </p>
                      </td>
                      <td>
                        <p>{desc}</p>
                      </td>
                      <td>
                        <div className="outFrame">
                          <iframe className="inFrame" src={link}></iframe>
                        </div>
                      </td>
                    </tr>
                  );
                })
              }
              </tbody>
            </table>
          </div>
        );
    };
  }
});

modTETable.init = function(elemId, info) {
  React.render(
    <TETable info={info} />,
    document.getElementById(elemId)
  );
};
