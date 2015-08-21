<?php

class StaticService {

	public static function console($info) {
		$is_debug = TRUE;
		if (!$is_debug) {
			return $is_debug;
		}
		error_log($info);
	}

	public static function headerTo($url, $delay) {
		return <<<HTML
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0" />
		<h3>该文章已被删除</h3>
        <script src="js/sgs_pingback.js"></script>
		<script>
            var pbInfo = SgsPb.getPbInfo({
              'productid': 'wxt',
              //
              'type': 'tc_0_04',
              'url': '$url',
              'reason': 'be_shielded'
            });
            SgsPb.pb(pbInfo, 'pv');
            //
			setTimeout(function () {
				location.href = '$url';
			}, $delay);
		</script>
HTML;
	}

	public static function startsWith($haystack, $needle) {
	    // search backwards starting from haystack length characters from the end
	    // return $needle === "" || strrpos($haystack, $needle, -strlen($haystack)) !== FALSE;
	    return $needle === "" || strpos($haystack, $needle) === 0;
	}

	public static function endsWith($haystack, $needle) {
	    // search forward starting from end minus needle length characters
	    return $needle === "" || (($temp = strlen($haystack) - strlen($needle)) >= 0 && strpos($haystack, $needle, $temp) !== FALSE);
	}

	public static function getHttpParam($key) {
	    if (array_key_exists($key, $_GET)) {
	        return trim($_GET[$key]);
	    }
	    if (array_key_exists($key, $_POST)) {
	        return trim($_POST[$key]);
	    }
	    return '';
	}

    public static function mysqlGlobal($server) {
        $host = $server['host'];
        $port = $server['port'];
        $usr = $server['usr'];
        $pwd = $server['pwd'];
        $db = $server['db'];
        //
        $site_db = mysql_connect("$host:$port", $usr, $pwd);
        if (!$site_db || !mysql_select_db($db)) die();
        mysql_query("set names utf8");
    }

    public static function escapeSingleQuota($str) {
        return str_replace('\'', '\\\'', $str);
    }

    public static function isValidMid($mid) {
        if (strlen($mid) <= 4) {
            return false;
        }
        $hc = substr($mid, 0, 4);
        $imei = substr($mid, 4);
        if (strcmp(substr(md5($imei."sogouapp"), 0, 4), $hc) !== 0) {
            return false;
        }
        return true;
    }

    public static function checkMidAndCrypto($mid, $crypt) {
        $md5 = md5($mid . "webfront");
        if (strcmp($md5, $crypt) != 0) {
            return false;
        }
        return StaticService::isValidMid($mid);
    }

}