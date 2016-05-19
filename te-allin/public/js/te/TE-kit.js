/**
 * Created by teaera on 2015-04-28;
 * Reformatted to be compatible on 2015-09-21;
 */

'use strict';

var
  isGlobal = true;

/* Import */

/* Export */
var TEKit = {};

if ( !isGlobal && typeof module === 'object' && typeof module.exports === 'object' ) {
  module.exports = TEKit;
}
else if (isGlobal) {
  window.TEKit = window.TEKit || TEKit;
}

/****************************************************************************/
/** Module: [pre] */
/**
 * [Import-moment: before loading DOM]
 */

TEKit.imgError = function (that, attr) {
  var
    currAttr = attr || 'data-error-src';
  that.src = that.getAttribute(currAttr);
  that.onerror = null;
};

/****************************************************************************/
/** Module: [parse] */

TEKit.watchHash = function (info) {
  window.onhashchange = function () {
    var hash = location.hash;
    if (hash in info) {
      info[hash] && info[hash]();
    }
  };
};

TEKit.queryString = function (key) {
  var regex_str = "^.+\\?.*?\\b"+ key +"=(.*?)(?:(?=&)|$|#)";
  var regex = new RegExp(regex_str,"i");
  var url = window.location.toString();
  if(regex.test(url)) return RegExp.$1;
  return undefined;
};

TEKit.parseParams = function(search) {
  var currSearch = null;
  if (!search) {
    currSearch = location.search;
  }
  if (currSearch === '' || currSearch === '?') {
    return {};
  }
  currSearch = currSearch.substr(1);
  var
    paramObj = {},
    paramList = currSearch.split('&');
  for (var i = 0, size = paramList.length; i < size; ++i) {
    var
      param = paramList[i],
      sep = '=',
      sepIdx = param.indexOf(sep);
    if (sepIdx > 0) {
      var
        tempList = param.split(sep),
        key = tempList[0],
        value = '';
      try {
        value = decodeURIComponent(tempList[1]);
      } catch (e) {
        value = '';
      }
      paramObj[key] = value;
    }
    else {
      // Keys should not be empty.
    }
  }
  return paramObj;
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
  var
    elem = document.querySelector(query),  // Only one elem;
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

/****************************************************************************/
/** Module: [event] */

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

/****************************************************************************/
/** Module: [ajax] */

TEKit.initXHR = function () {
  var xhr;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else if (window.ActionXObject) {
    xhr = new ActiveXObject("Msxml2.XMLHTTP") | new ActiveXObject("Microsoft.XMLHTTP");
  } else {
    throw new Error("xhr is not supported");
  }
  return xhr;
};

TEKit.ajax = function (xhr, options) {
  var
    url = options.url,
    type = options.type || 'get',
    isAsync = options.isAsync || true,
    data = options.data || '',
    successHandler = options.success || function () {},
    errorHandler = options.error || function () {};
  xhr.open(type, url, isAsync);
  xhr.send(data);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        if (successHandler) {
          successHandler(xhr.responseText);
        }
      }
      else {
        if (errorHandler) {
          errorHandler();
        }
      }
    } else {
      //
    }
  };
};

/****************************************************************************/
/** Module: [cookie] */

// Set cookie:
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

// Delete cookie:
//  to delete cookie, set the expire time to a past moment;
TEKit.delCookie = function (name, domain, path) {
  var date = new Date();
  date.setTime(date.getTime() - 10000);
  //
  var params = [name, '=nothing;expires=', date.toGMTString()];
  if (domain) {
    params.push(';domain=' + domain);
  }
  if (path) {
    params.push(';path=' + path);
  }
  document.cookie = params.join('');
};

// Get cookie:
TEKit.getCookie = function (name) {
  var
    cookie = document.cookie;
  if (cookie.length > 0) {
    var
      cStart = cookie.indexOf(name + '=');
    if (cStart !== -1) {
      cStart += name.length + 1;
      var
        cEnd = cookie.indexOf(';', cStart);
      if (cEnd === -1)
        cEnd = cookie.length;
      return decodeURIComponent(cookie.substring(cStart, cEnd));
    }
    return '';
  }
  return '';
};

/****************************************************************************/
/** Module: [math] */

/**
 *
 */
TEKit.getRandNum = TEKit.getRandomInteger = function (start, end) {
  return Math.floor( Math.random() * (end - start + 1) + start );
};

/****************************************************************************/
/** Module: [validate] */

TEKit.isMobilePhoneNumber = function (input) {
  // 11 digits; starting with 1;
  return (input.match(/^1\d{10}$/i) !== null || input.match(/^1\d{2}\s{1}\d{4}\s{1}\d{4}$/i) !== null);
};

/****************************************************************************/
/** Module: 奇技淫巧篇 */
/** Module: [diabolic tricks and wicked craft] */

/**
 * [Link](https://gist.github.com/padolsey/527683)
 */
TEKit.getIEVersion = function () {
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
TEKit.testBattery = function () {
  // 获取电池对象!
  var battery = navigator.battery || navigator.webkitBattery || navigator.mozBattery;

  if (! battery) {
    console.log('> #navigator.battery# not supported');
    return false;
  }

  // Some properties;
  console.warn("电池充电状态: ", battery.charging);  // true
  console.warn("电量水平: ", battery.level);  // 0.58
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

TEKit.inputFocusScroll = function (inputElem, paddingElem) {
  var
    preservedSpace = 50;
  inputElem.on('focus', function () {
    var
      thisTop = $(this).offset().top;
    $('html, body').animate({
      scrollTop: thisTop - preservedSpace >= 0 ? thisTop - preservedSpace : 0
    }, 300);
    //
    paddingElem.height(thisTop);
  });
};

TEKit.clearBlankPadding = function (paddingElem) {
  paddingElem.height(0);
};

/****************************************************************************/
/** ????????????????????????????????????????????????????????????????????????? */

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
 * [imgLoad2 description]
 * @param  {[type]} elem   [description]
 * @param  {[type]} method [description]
 * @param  {[type]} width  [description]
 * @param  {[type]} height [description]
 * @return {[type]}        [description]
 *
 * This is stolen from weixin.sogou.com; the compressed source code is above this;
 */
TEKit.imgLoad2 = function (elem, method, width, height) {
  //
  var
    ew = elem.width,
    eh = elem.height,
    offsetw = elem.offsetWidth;
  //
  if (method === 'auto') {
    method = (ew < width && eh < height) ? 'blank' : 'fit';
  }
  //
  if ( (method === 'fit' && eh / ew > height / width) || (method === 'blank' && eh / ew < height / width) ) {
    elem.style.width = width + 'px';
    elem.style.marginTop = '0px';
  }
  else {
    elem.style.height = height + 'px';
    if (offsetw) {
      elem.style.marginLeft = (width - offestw) / 2 + 'px';
    }
    else {
      var
        temp = 0;
        (function (temp, elem) {
          function f(elem) {
            var
              ow = elem.offsetWidth;
            if (ow) {
              elem.style.marginLeft = (width - ow) / 2 + 'px';
            }
            else {
              temp++;
              if (temp < 11) {
                setTimeout(function () {
                  f(elem)
                }, 10);
              }
            }
          }
          f(elem);
        })(temp, elem);
    }
  }
  //
  elem.style.visibility = 'visible';
};
