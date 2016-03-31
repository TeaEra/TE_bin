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
        <h3>DEMO</h3>
        <!-- some scripts here -->
        <script>
            // Some pingbacks here;
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

    public static function mysqliGlobal($server) {
        $host = $server['host'];
        $port = $server['port'];
        $usr = $server['usr'];
        $pwd = $server['pwd'];
        $db = $server['db'];
        //
        $mysqli = new mysqli($host, $usr, $pwd, $db, $port);
        //
        if ($mysqli->connect_errno) {
            die(json_encode(array(
                'status' => -1,
                'msg' => 'Failed to connect to MySQL: (' . $mysqli->connect_errno . ') ' . $mysqli->connect_error,
                'res' => NULL
            )));
        }
        return $mysqli;
    }

    public static function mysqliClose($mysqli) {
        return $mysqli->close();
    }

    public static function mysqlCommonInit($server) {
        if (function_exists('mysqli_connect')) {
            return StaticService::mysqliGlobal($server);
        }
        return StaticService::mysqlGlobal($server);
    }

    public static function escapeSingleQuota($str) {
        return str_replace('\'', '\\\'', $str);
    }

    // PAT: Only for sogousearch and weixinheadline;
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

    public static function curlPingback($info, $type) {
        require_once 'HTTPService.php';
        //
        $prefix = 'http://wxrd.appsearch.m.sogou.com/wxpage/images/';
        // $prefix = 'http://appsearch.m.sogou.com/wxpage/images/';
        $pb = array(
            'pv' => $prefix . 'pv?',
            'cl' => $prefix . 'cl?'
        );
        //
        HTTPService::httpGet($pb[$type] . http_build_query($info));
    }

    public static function is10DigitTimestamp($ts) {
        $match_res = preg_match('/^1\d{9}$/i', $ts);
        if ($match_res === FALSE || $match_res === 0) {
            return FALSE;
        }
        return TRUE;
    }

    public static function is11DigitPhoneNumber($number) {
        $match_res = preg_match('/^1\d{10}$/i', $number);
        if ($match_res === FALSE || $match_res === 0) {
            return FALSE;
        }
        return TRUE;
    }

    public static function php53JsonEncodeUnescaped($input, $opts) {
        //
        if (empty($opts)) {
            return json_encode($input);
        }
        if (!array_key_exists('unicode', $opts)) {
            $opts['unicode'] = FALSE;
        }
        if (!array_key_exists('slashes', $opts)) {
            $opts['slashes'] = FALSE;
        }
        $is_escaped_unicode = $opts['unicode'];
        $is_escaped_slashes = $opts['slashes'];
        //
        $output = NULL;
        if (version_compare(PHP_VERSION, '5.4.0', '<')) {
            // JSON_UNESCAPED_UNICODE and JSON_UNESCAPED_SLASHES are not supported in php 5.3.3
            $output = json_encode($input);
            $output = str_replace('\\/', '/', $output);
            $output = preg_replace_callback(
                    '/\\\\u([0-9a-f]{4})/i',
                    function ($matches) {
                        $sym = mb_convert_encoding(pack('H*', $matches[1]), 'UTF-8', 'UCS-2BE');
                        return $sym;
                    },
                    $output
                );
        } else {
            $encode_options = 0;
            if ($is_escaped_unicode) {
                $encode_options = $encode_options | JSON_UNESCAPED_UNICODE;
            }
            if ($is_escaped_slashes) {
                $encode_options = $encode_options | JSON_UNESCAPED_SLASHES;
            }
            $output = json_encode($input, $encode_options);
        }
        return $output;
    }
    
    public static function prettyPrint($obj, $isReturn=FALSE) {
        $str = '<pre>' . print_r($obj, TRUE) . '</pre>';
        if ($isReturn) {
            return $str;
        }
        echo $str;
    }

}