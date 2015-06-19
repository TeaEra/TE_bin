/**
 * Created by chenzhengtong on 2015-04-28;
 */
(function () {
  'use strict';
  
  /**
   * Functions with this flag:
   *  [Import-moment: before loading DOM]
   *  are suggested to be loaded in header part;
   */

  /* global TEKit */
  window.TEKit = window.TEKit || {};
  
  // Content height;
  TEKit.getBodyScrollHeight = function () {
    return document.getElementsByTagName('body')[0].offsetHeight;
  };

  // Content width;
  TEKit.getBodyScrollWidth = function () {
    return document.getElementsByTagName('body')[0].offsetWidth;
  };

  // Device height;
  TEKit.getBodyOffsetHeight = function () {
    return document.getElementsByTagName('body')[0].scrollHeight;
  };

  // Device width;
  TEKit.getBodyOffsetWidth = function () {
    return document.getElementsByTagName('body')[0].scrollWidth;
  };

  TEKit.getElemScrollSize = function (query) {
    var elem = document.querySelector(query),  // Only one elem;
      sw = elem.scrollWidth,
      sh = elem.scrollHeight;
    return {
      "scrollWidth": sw,
      "scrollHeight": sh
    };
  };

  TEKit.getElemOffsetSize = function (query) {
    var elem = document.querySelector(query),  // Only one elem;
      ow = elem.offsetWidth,
      oh = elem.offsetHeight;
    return {
      "offsetWidth": ow,
      "offsetHeight": oh
    };
  };

  TEKit.watchHash = function (info) {
    window.onhashchange = function () {
      var hash = location.hash;
      if (hash in info) {
        info[hash]();
      }
    };
  };

  TEKit.queryString = function (key)
  {
    var regex_str = "^.+\\?.*?\\b"+ key +"=(.*?)(?:(?=&)|$|#)";
    var regex = new RegExp(regex_str,"i");
    var url = window.location.toString();
    if(regex.test(url)) return RegExp.$1;
    return undefined;
  };

  TEKit.initImgOnError = function () {
    var imgList = document.getElementsByTagName('img'),
      handler = function () {
        // Avoid closure;
        this.src = elem.getAttribute('data-error-src');
        this.onerror = null;
      };
    for (var i=0, len=imgList.length; i<len; ++i) {
      var elem = imgList[i];
      elem.onerror = handler;
    }
  };

  TEKit.on = function (elem, event, callback) {
    var funcName = null;
    if (document.addEventListener) {
      funcName = 'addEventListener';
    }
    else if (document.attachEvent) {
      funcName = 'attachEvent';
      event = 'on' + event;
    }
    elem[funcName](event, callback);
  };
  
  TEKit.off = function (elem, event) {
    elem[event] = null;
  };

  /**
   * Require:
   *  - TEKit.on;
   */
  TEKit.initImgOnError2 = function () {
    var imgList = document.querySelectorAll('img[data-error-src]'),
      handler = function () {
        // Avoid closure;
        this.src = this.getAttribute('data-error-src');
        this.onerror = null;
      };
    for (var i=0,len=imgList.length; i<len; ++i) {
      var elem = imgList[i];
      TEKit.on(elem, 'error', handler);
    }
  };
  
  TEKit.initXHR = function () {
    var xhr;
    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
    }
    else if(window.ActionXObject) {
      xhr = new ActiveXObject("Msxml2.XMLHTTP")
        | new ActiveXObject("Microsoft.XMLHTTP");
    }
    else {
      throw new Error("xhr is not supported");
    }
    return xhr;
  };
  
  TEKit.ajax = function (xhr, options) {
   // var
    //  url = options.url,
    //  type = options.type,
    //  data = options.data,
    //  dataType = options.dataType,
    //  success = options.success,
    //  error = options.error;
  };
  
  /**
   * [Import-moment: before loading DOM]
   */
  TEKit.imgLoad = function vrImgLoad(D, E, A, B) {
    if (E == "auto") {
        E = (D.width < A && D.height < B) ? "blank" : "fit";
    }
    if ((E == "fit" && D.height / D.width > B / A) || (E == "blank" && D.height / D.width < B / A)) {
        D.style.width = A + "px";
        D.style.marginTop = "0px";
    } else {
        D.style.height = B + "px";
        if (D.offsetWidth) {
            D.style.marginLeft = (A - D.offsetWidth) / 2 + "px";
        } else {
            var C = 0;
            (function(G, H) {
                function F(I) {
                    if (I.offsetWidth) {
                        I.style.marginLeft = (A - I.offsetWidth) / 2 + "px";
                    } else {
                        G++;
                        if (G < 11) {
                            setTimeout(function() {
                                F(I)
                            }, 10)
                        }
                    }
                }
                F(H);
            })(C, D);
        }
    }
    D.style.visibility = "visible";
  };
  
  /**
   * [Import-moment: before loading DOM]
   */
  TEKit.imgError = function (that) {
    that.src = that.getAttribute('data-error-src');
    that.onerror = null;
  };
  
  /****************************************************************************/
  
  /**
   * [Link](https://gist.github.com/padolsey/527683)
   */
  TEKit.get_IE_version = function () {
    // for-loop saves characters over while
    for (
      var v = 3,
      // b just as good as a div with 2 fewer characters
      el = document.createElement('b'),
      // el.all instead of el.getElementsByTagName('i')
      // empty array as loop breaker (and exception-avoider) for non-IE and IE10+
      all = el.all || [];
      // i tag not well-formed since we know that IE5-IE9 won't mind
      el.innerHTML = '<!--[if gt IE ' + (++v) + ']><i><![endif]-->',
      all[0];
    );
    // instead of undefined, returns the documentMode for IE10+ compatibility
    // non-IE will still get undefined as before
    return v > 4 ? v : document.documentMode;
  };
  
  /****************************************************************************/
  
  /**
   * [Link](http://bbs.html5cn.org/thread-80269-1-1.html)
   *
   * from Mozilla Aurora 11;
   * only 'window.navigator.battery' available for now;
   *
   */
  TEKit.test_battery = function () {
    // 获取电池对象!
    var battery = navigator.battery || navigator.webkitBattery || navigator.mozBattery;

    if (! battery) {
      return;
    }

    // 显示一些有用属性值
    console.warn("电池充电状态: ", battery.charging); // true
    console.warn("电量水平: ", battery.level); // 0.58
    console.warn("电池使用时间: ", battery.dischargingTime);

    // 设置一些事件**
    battery.addEventListener("chargingchange", function(e) {
        console.warn("电池充电状态变化: ", battery.charging);
    }, false);
    battery.addEventListener("chargingtimechange", function(e) {
        console.warn("电池充电时间变化: ", battery.chargingTime);
    }, false);
    battery.addEventListener("dischargingtimechange", function(e) {
        console.warn("电池使用时间变化: ", battery.dischargingTime);
    }, false);
    battery.addEventListener("levelchange", function(e) {
        console.warn("电量水平变化: ", battery.level);
    }, false);
  };
  
  /****************************************************************************/
  /**
   * The following functions all depend on JQuery!!!
   */
  
  /* global $ */
  
  TEKit.inputFocusScroll = function (id) {
    $(id).on('focus', function () {
      $('html, body').animate({
        scrollTop: $(this).offset().top - 20 >= 0 ? $(this).offset().top - 20 : 0
      }, 300);
    });
  };

})();