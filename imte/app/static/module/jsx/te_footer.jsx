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

var TEFooter = React.createClass({
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
        <footer className="te-footer">
          <div className="container">
            <div className="col-md-4 col-lg-4 col-xs-12 col-sm-6">
              <div className="fa-2x dotted-border-bottom">
                <span className="glyphicon glyphicon-user"></span>
                &nbsp;About
              </div>
              <div>
                <span className="glyphicon glyphicon-hand-right"></span>
                &nbsp;<b className="big-name">CHEN Zhengtong</b>
              </div>
              <div>
                <span className="glyphicon glyphicon-hand-right"></span>
                &nbsp;<b className="big-name">Vince CHEN</b>
              </div>
              <br/>
              <div>
                <p>Just hope life could be simple.</p>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-xs-12 col-sm-6">
              <div className="fa-2x dotted-border-bottom">
                <span className="glyphicon glyphicon-envelope"></span>
                &nbsp;Email
              </div>
              <div>
                <i className="fa fa-google icon-min-size"></i>
                &nbsp;<a target="_top" href="mailto:cllf08214@gmail.com">cllf08214@gmail.com</a>
              </div>
              <div>
                <i className="fa fa-qq"></i>
                &nbsp;<a target="_top" href="mailto:cllf08214@qq.com">cllf08214@qq.com</a>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-xs-12 col-sm-6">
              <div className="fa-2x dotted-border-bottom">
                <i className="fa fa-desktop"></i>
                &nbsp;Just do IT
              </div>
              <div>
                <i className="fa fa-github"></i>
                &nbsp;<a target="_blank" href="https://github.com/TeaEra">https://github.com/TeaEra</a>
              </div>
              <div>
                <i className="fa fa-weibo"></i>
                &nbsp;<a target="_blank" href="http://weibo.com/teaera">http://weibo.com/teaera</a>
              </div>
            </div>
          </div>
        </footer>
        );
    }
  }
});

modTEFooter.init = function (elemId, info) {
  React.render(
    <TEFooter info={info} />,
    document.getElementById(elemId)
  );
};

/* jshint ignore:end */
