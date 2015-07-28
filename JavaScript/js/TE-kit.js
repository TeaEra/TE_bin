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
  
  /****************************************************************************/
  /** Module: [pre] */
  
  /**
   * [Import-moment: before loading DOM]
   */
  TEKit.imgError = function (that) {
    that.src = that.getAttribute('data-error-src');
    that.onerror = null;
  };
  
  /****************************************************************************/
  /** Module: [DOM] */
  
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
  
  /****************************************************************************/
  /** Module: [cookie] */
  
  TEKit.setCookie = function (name, value, days, path) {
    //
    var 
      exp = new Date(),
      val = null;
    exp.setTime(exp.getTime() + 1000 * 60 * 60 * 24 * days);
    val = name + '=' + encodeURIComponent(value) + ';expires=' + exp.toUTCString();
    //
    if (path) {
      val += ';path=' + path;
    }
    // Finally: assign it to cookie;
    document.cookie = val;
  };

  //为了删除指定名称的cookie，可以将其过期时间设定为一个过去的时间
  TEKit.delCookie = function (name, domain, path) {
    var date = new Date();
    date.setTime(date.getTime() - 10000);
    //
    var params = [name, "=nothing;expires=", date.toGMTString()]
    if (domain) {
      params.push(";domain=" + domain);
    }
    if (path) {
      params.push(";path=" + path);
    }
    document.cookie = params.join("");
  };

  TEKit.getCookie = function (name) {
    if (document.cookie.length > 0) {
      var c_start = document.cookie.indexOf(name + "=");
      if (c_start != -1) {
        var 
          c_start = c_start + name.length + 1,
          c_end = document.cookie.indexOf(";", c_start);
        if (c_end == -1)
          c_end = document.cookie.length;
        return decodeURIComponent(document.cookie.substring(c_start, c_end));
      }
      return '';
    }
    return '';
  };

  TEKit.createCustomizedEvent = function (eventName, element) {
    var event; // The custom event that will be created

    if (document.createEvent) {
      event = document.createEvent("HTMLEvents");
      event.initEvent(eventName, true, true);
    } else {
      event = document.createEventObject();
      event.eventType = eventName;
    }

    event.eventName = eventName;

    var elem = element || document.body;

    if (document.createEvent) {
      elem.dispatchEvent(event);
    } else {
      elem.fireEvent("on" + event.eventType, event);
    }

    return event;
  };
  
  TEKit.removeClass = function (elem, targetClass) {
    var
      cn = elem.className,
      cl = cn.split(' '),
      tarIdx = cl.indexOf(targetClass);
    if (tarIdx >= 0) {
      cl.splice(tarIdx, 1);
    }
    elem.className = cl.join(' ');
  };
  
  TEKit.addClass = function (elem, targetClass) {
    var
      cn = elem.className,
      cl = cn.split(' '),
      tarIdx = cl.indexOf(targetClass);
    if (tarIdx < 0) {
      cl.push(targetClass);
    }
    elem.className = cl.join(' ');
  };
  
  TEKit.replaceClass = function (elem, targetClass, newClass) {
    var
      cn = elem.className,
      cl = cn.split(' '),
      tarIdx = cl.indexOf(targetClass);
    if (tarIdx >= 0) {
      cl.splice(tarIdx, 1, newClass);
    }
    elem.className = cl.join(' ');
  };
  
  TEKit.parseParams = function (search) {
    if (!search) {
      return {};
    }
    var
      paramObj = {},
      paramList = search.split('&');
    for (var i=0, size=paramList.length; i<size; ++i) {
      var
        param = paramList[i],
        sep = '=',
        sepIdx = param.indexOf(sep);
      if (sepIdx >= 0) {
        var
          tempList = param.split(sep),
          key = tempList[0],
          value = decodeURIComponent(tempList[1]);
        paramObj[key] = value;
      }
    }
    return paramObj;
  };
  
  /****************************************************************************/
  /** Module: [math] */
  
  /**
   * 
   */
  TEKit.getRandomInteger = function (start, end) {
    return Math.floor(Math.random() * (end - start + 1) + start);
  };
  
  /****************************************************************************/
  /** Module: 奇技淫巧篇 */
  /** Module: [diabolic tricks and wicked craft] */
  
  /**
   * [Link](https://gist.github.com/padolsey/527683)
   */
  TEKit.get_IE_version = function () {
    /* jshint ignore:start */
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
    /* jshint ignore:end */
    // instead of undefined, returns the documentMode for IE10+ compatibility
    // non-IE will still get undefined as before
    return v > 4 ? v : document.documentMode;
  };
  
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
  /** Module: [$] */
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