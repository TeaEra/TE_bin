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
      info: this.props.info
    };
  },
  render: function() {
    return (
      <div className="table-responsive">
        <table className="table table-striped">
          <tbody>
          {
            this.state.info.list.map(function(each, idx) {
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
  }
});

modTETable.init = function(elemId, info) {
  React.render(
    <TETable info={info} />,
    document.getElementById(elemId)
  );
};
