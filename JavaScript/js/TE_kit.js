/**
 * Created by chenzhengtong on 2015-04-28;
 */
(function () {
	'use strict';

	window.TEKit = window.TEKit || {};
	
	// Device height;
    TEKit.getBodyScrollHeight = function () {
    	return document.getElementsByTagName('body')[0].offsetHeight;
    };

    // Device width;
    TEKit.getBodyScrollWidth = function () {
        return document.getElementsByTagName('body')[0].offsetWidth;
    };

    // Content height;
    TEKit.getBodyOffsetHeight = function () {
    	return document.getElementsByTagName('body')[0].scrollHeight;
    };

    // Content width;
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
        var regex_str = "^.+\\?.*?\\b"+ key +"=(.*?)(?:(?=&)|$|#)"
        var regex = new RegExp(regex_str,"i");
        var url = window.location.toString();
        if(regex.test(url)) return RegExp.$1;
        return undefined;
    };

    TEKit.initImgOnError = function () {
        var imgList = document.getElementsByTagName('img');
        for (var i=0, len=imgList.length; i<len; ++i) {
            var elem = imgList[i];
            elem.onerror = function () {
                // Avoid closure;
                this.src = elem.getAttribute('data-error-src');
                this.onerror = null;
            };
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

    /**
     * Require:
     *  - TEKit.on;
     */
    TEKit.initImgOnError2 = function () {
        var imgList = document.querySelectorAll('img[data-error-src]');
        for (var i=0,len=imgList.length; i<len; ++i) {
            var elem = imgList[i];
            TEKit.on(elem, 'error', function () {
                // Avoid closure;
                this.src = this.getAttribute('data-error-src');
                this.onerror = null;
            });
        }
    };

})();