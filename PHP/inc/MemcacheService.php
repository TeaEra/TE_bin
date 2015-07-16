<?php

class MemcacheService {

	private $clusters;

	public function __construct($clusters, $idc=NULL) {
		$this->clusters = $clusters;
		$this->idc = $idc;
	}

	public static function getSliceNum($url_long, $server_num) {
		$md5_url_long = md5($url_long);
		return ord($md5_url_long[0]) % $server_num;
	}

	public function getFromMemcache($url_long) {
		$clusters = $this->clusters;
		$res = FALSE;
		if (!$this->idc) {
			return $res;
		}
		$cluster = $this->clusters[$this->idc];
		$server_num = count($cluster);
		$slice_idx = MemcacheService::getSliceNum($url_long, $server_num);
		$server = $cluster[$slice_idx];
		$m = new Memcache();
		$conn_res = $m->connect($server['host'], $server['port']);
		if (!$conn_res) {
			return $res;
		}
		error_log('> server: ' . var_export($server, TRUE));
		$res = $m->get($url_long);
		return $res;
	}

	public function setMemcache($url_long, $value) {
		$clusters = $this->clusters;
		foreach ($clusters as $idc => $cluster) {
			$server_num = count($cluster);
			$slice_idx = MemcacheService::getSliceNum($url_long, $server_num);
			$server = $cluster[$slice_idx];
			$m = new Memcache();
			$conn_res = $m->connect($server['host'], $server['port']);
			if ($conn_res) {
				$m->set($url_long, $value, MEMCACHE_COMPRESSED, 86400);
			}
		}
	}

}