<?php

class HTTPService {

	private $group;

	public function __construct($group) {
		//
		$this->group = $group;
	}

	public function fetchResult($servicePath, $method, $data) {
		$server_num = count($this->group);
		$server = $this->group[rand(0, $server_num - 1)];
		$url = 'http://' . $server['host'] . ':' . $server['port'] . $servicePath;
		//
		$res = null;
		if ($method == 'get') {
			$res = HTTPService::httpGet($url);
		}
		else if ($method == 'post') {
			$res = HTTPService::httpPost($url, $data);
		}
		return $res;
	}

	public static function httpGet($url) {
	    $ch = curl_init();
	    curl_setopt($ch, CURLOPT_URL, $url);
	    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
	    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 4);
	    curl_setopt($ch, CURLOPT_TIMEOUT,4);
	    $ret = curl_exec($ch);
	    curl_close($ch);
	    return $ret;
	}

	public static function httpPost($url, $data) {
	    $ch = curl_init();
	    curl_setopt($ch, CURLOPT_URL, $url);
	    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
	    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 4);
	    curl_setopt($ch, CURLOPT_TIMEOUT,4);
	    curl_setopt($ch, CURLOPT_POST, 1);
	    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
	    $ret = curl_exec($ch);
	    curl_close($ch);
	    return $ret;
	}
	
}