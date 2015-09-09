/**
 * Created by teaera on 2015-08-24;
 */

/* jshint ignore:start */

/* Import */

/* Export */
var modTEVelocityDemo = {};
module.exports = modTEVelocityDemo;

var TEVelocityDemo = React.createClass({
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
  demoClickV1: function (tarId, hammerId) {
    var
      $tarElem = $('#' + tarId),
      $hammerElem = $('#' + hammerId);
    //
    // TODO: single animation;
    /*$hammerElem.velocity({
      left: $tarElem.offset().left + 'px',
      top: $tarElem.offset().top + 'px'
    }, {
      duration: 1000,
      easing: 'linear'
    });*/
    //
    // TODO: sequence animation;
    var seq = [
      {
        elements: $hammerElem,
        properties: {
          left: $hammerElem.offset().left + 'px',
          top: $hammerElem.offset().top + 'px',
          rotateX: 0,
          rotateY: 0,
          rotateZ: 0,
        },
        options: {
          duration: 20
        }
      },
      {
        elements: $hammerElem,
        properties: {
          left: $tarElem.offset().left + 'px',
          top: $tarElem.offset().top + 'px'
        },
        options: {
          duration: 1000,
          easing: 'linear'
        }
      },
      {
        elements: $hammerElem,
        properties: {
          rotateZ: -60
        },
        options: {
          sequenceQueue: false,
          duration: 100,
          easing: 'linear'
        }
      }
    ];
    $.Velocity.RunSequence(seq);
  },
  render: function () {
    var
      that = this,
      id = 'demo1',
      idV1 = 'v1',
      idV2 = 'v2',
      idV3 = 'v3',
      idV4 = 'v4',
      demoClick1 = that.demoClick1.bind(that, id),
      demoClickV1 = that.demoClickV1.bind(that, idV1, idV4),
      demoClickV2 = that.demoClickV1.bind(that, idV2, idV4),
      demoClickV3 = that.demoClickV1.bind(that, idV3, idV4);
    return (
      <div>
        <div id={id} onClick={demoClick1}><p>Let us move</p></div>
        <div id={idV1} className="test-v v1" onClick={demoClickV1}>red</div>
        <div id={idV2} className="test-v v2" onClick={demoClickV2}>green</div>
        <div id={idV3} className="test-v v3" onClick={demoClickV3}>blue</div>
        <div id={idV4} className="test-v v4"></div>
      </div>
    );
  }
});

modTEVelocityDemo.init = function (elemId, info) {
  React.render(
    <TEVelocityDemo info={info}/>,
    document.getElementById(elemId)
  );
};

/* jshint ignore:end */
