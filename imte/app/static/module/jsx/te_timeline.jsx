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

var TETimeline = React.createClass({
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
      <ul className="timeline">
      {
        this.state.list.map(function (elem, idx) {
          var
            type = elem.type || 'book',
            title = elem.title,
            date = elem.date,
            desc = elem.desc[0] || '';
          var
            clsForLi = idx % 2 === 0 ? 'timeline-inverted' : '';
          return (
            <li className={clsForLi}>
              <div className="timeline-badge info">
                <i className={"glyphicon glyphicon-" + type}></i>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="timeline-title">{title}</h4>
                  <p>
                    <small className="text-muted"><i className="glyphicon glyphicon-calendar"></i>&nbsp;{date}</small>
                  </p>
                </div>
                <div className="timeline-body">
                  <p>{desc}</p>
                </div>
              </div>
            </li>
          );
        })
      }
      < /ul>
    );
  }
});

modTETimeline.init = function (elemId, info) {
  React.render(
    <TETimeline info={info}/>,
    document.getElementById(elemId)
  );
};

/* jshint ignore:end */
