title: 分享10段实用的HTML5代码
date: 2015-09-24
tags:
  - marked
  - html5
---

1. HTML5编写的CSS Reset

  ```css
  /*&nbsp;&nbsp;&nbsp;html5doctor.com Reset Stylesheet (Eric Meyer's Reset Reloaded + HTML5 baseline)&nbsp;&nbsp;v1.4 2009-07-27 | Authors: Eric Meyer & Richard Clark&nbsp;&nbsp;html5doctor.com/html-5-reset-stylesheet/*/
  html, body, div, span, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  abbr, address, cite, code,
  del, dfn, em, img, ins, kbd, q, samp,
  small, strong, sub, sup, var,
  b, i,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, figure, footer, header,&nbsp;hgroup, menu, nav, section, menu,
  time, mark, audio, video {
  margin:0;
  padding:0;
  border:0;
  outline:0;
  font-size:100%;
  vertical-align:baseline;
  background:transparent;
  }
  article, aside, figure, footer, header,
  hgroup, nav, section { display:block; }
  nav ul { list-style:none; }
  blockquote, q { quotes:none; }
  blockquote:before, blockquote:after,
  q:before, q:after { content:''; content:none; }
  a { margin:0; padding:0; font-size:100%; vertical-align:baseline; background:transparent; }
  ins { background-color:#ff9; color:#000; text-decoration:none; }
  mark { background-color:#ff9; color:#000; font-style:italic; font-weight:bold; }
  del { text-decoration: line-through; }
  abbr[title], dfn[title] { border-bottom:1px dotted #000; cursor:help; }
  /* tables still need cellspacing="0" in the markup */
  table { border-collapse:collapse; border-spacing:0; }
  hr { display:block; height:1px; border:0; border-top:1px solid #ccc; margin:1em 0; padding:0; }
  input, select { vertical-align:middle; }
  /* END RESET CSS */
  ```

2. HTML5 Video with Flash Fallback

  ```html
  <video width="640" height="360" controls>
    <source src="__VIDEO__.MP4"  type="video/mp4" />
    <source src="__VIDEO__.OGV"  type="video/ogg" />
    <object width="640" height="360" type="application/x-shockwave-flash" data="__FLASH__.SWF">
      <param name="movie" value="__FLASH__.SWF" />
      <param name="flashvars" value="controlbar=over&image=__POSTER__.JPG&file=__VIDEO__.MP4" />
      <img src="__VIDEO__.JPG" width="640" height="360" alt="__TITLE__"
        title="No video playback capabilities, please download the video below" />
    </object>
  </video>
  ```

3. HTML5 Starter页面

  ```html

<!DOCTYPE HTML>
<html>

<head>
  <meta charset="utf-8">
  <title></title>
  <link rel="stylesheet" href="style.css">
  <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
  <!--[if IE]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
  <script scr="script/script.js"></script>
</head>

<body>
  <header>
    <nav></nav>
  </header>
  <footer>
  </footer>
</body>
<html>

  ```

4. 创建谷歌静态地图

  ```html

<!DOCTYPE html>
<html lang="en">

<head>
  <meta http-equiv="content-type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0 maximum-scale=1.0, user-scalable=no" />
  <title>Geo Location</title>
  <style type="text/css" media="screen">
  html {
    height: 100%;
  }

  body {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  #map {
    width: 100%;
    height: 100%;
  }
  </style>
  <!-- jQuery Min -->
  <script type="text/javascript" charset="utf-8" src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.3/jquery.min.js"></script>
  <!-- Google Maps -->
  <script type="text/javascript" charset="utf-8" src="http://maps.google.com/maps/api/js?sensor=true"></script>
  <script charset="utf-8" type="text/javascript">
  mapWidth = screen.width;
  mapHeight = screen.height;

  $(document).ready(function() {
    var geo = navigator.geolocation;
    if (geo) {
      //Used for Static Maps
      geo.watchPosition(showLocation, mapError, {
        timeout: 5000,
        enableHighAccuracy: true
      });
    }

    function createStaticMarker(markerColor, markerLabel, lat, lng) {
      return "&markers=color:" + markerColor + "|label:" + markerLabel + "|" + lat + "," + lng;
    }

    function createStaticMap(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      var zoom = 20;
      var sensor = true;

      var img = $("<img>");
      img.attr({
        src: "http://maps.google.com/maps/api/staticmap?" +
          "center=" +
          lat + "," +
          lng +
          "&zoom=" + zoom +
          "&size=" + mapWidth + "x" + mapHeight +
          createStaticMarker("blue", "1", lat, lng) +
          "&sensor=" + sensor
      });
      return img;
    }

    function showLocation(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      var latlng = new google.maps.LatLng(lat, lng);

      $("#map").html(createStaticMap(position))
    }

    function mapError(e) {
      var error;
      switch (e.code) {
        case 1:
          error = "Permission Denied";
          break;
        case 2:
          error = "Network or Satellites Down";
          break;
        case 3:
          error = "GeoLocation timed out";
          break;
        case 0:
          error = "Other Error";
          break;
      }
      $("#map").html(error);
    }
  });
  </script>
</head>

<body>
  <div id="map">
  </div>
</body>

</html>
  ```

5. 纯HTML5 Starter模板

  ```html

<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>Untitled</title>
  <!--[if lt IE 9]><script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
</head>

<body>
</body>

</html>
  ```

6. HTML5 页面结构

  ```html

<!DOCTYPE HTML>
<html>

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <title>Your Website</title>
</head>

<body>
  <header>
    <nav>
      <ul>
        <li>Your menu</li>
      </ul>
    </nav>
  </header>
  <section>
    <article>
      <header>
        <h2>Article title</h2>
        <p>Posted on
          <time datetime="2009-09-04T16:31:24+02:00">September 4th 2009</time> by <a href="#">Writer</a> - <a href="#comments">6 comments</a></p>
      </header>
      <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
    </article>
    <article>
      <header>
        <h2>Article title</h2>
        <p>Posted on
          <time datetime="2009-09-04T16:31:24+02:00">September 4th 2009</time> by <a href="#">Writer</a> - <a href="#comments">6 comments</a></p>
      </header>
      <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
    </article>
  </section>
  <aside>
    <h2>About section</h2>
    <p>Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
  </aside>
  <footer>
    <p>Copyright 2009 Your name</p>
  </footer>
</body>

</html>
  ```

7. 上下文菜单

  ```html
  <section contextmenu="mymenu">
  <p>Yes, this section right here</p>
  </section>
  <menu type="context" id="mymenu">
    <menuitem label="Please do not steal our images" icon="img/forbidden.png"></menuitem>
    <menu label="Social Networks">
    <menuitem label="Share on Facebook" onclick="window.location.href = 'http://facebook.com/sharer/sharer.php?u=' + window.location.href;">   </menuitem>
    </menu>
  </menu>
  ```

8. HTML5 Datalist

  ```html
  <input name="frameworks" list="frameworks" />
  <datalist id="frameworks">
    <option value="MooTools">
    <option value="Moobile">
    <option value="Dojo Toolkit">
    <option value="jQuery">
    <option value="YUI">
  </datalist>
  ```

9. 从谷歌地图上获取路线

  ```html
  <form action="http://maps.google.com/maps" method="get" target="_blank">
    <label for="saddr">Enter your location</label>
    <input type="text" name="saddr" />
    <input type="hidden" name="daddr" value="350 5th Ave New York, NY 10018 (Empire State Building)" />
    <input type="submit" value="Get directions" />
  </form>
  ```

10. HTML5电子邮件正则表达式验证

  ```html
  <input type="text" title="email" required pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}" />
  ```
