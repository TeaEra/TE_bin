<?php

require_once 'inc/StaticService.php';

$in_file = StaticService::getHttpParam('f');
$in_mode = StaticService::getHttpParam('m');
$in_content = StaticService::getHttpParam('c');

$log_dir = '/search/nginx/html/teaera-log/';
$log_file = '/search/nginx/html/teaera-log/stat.log';

if (!empty($in_file)) {
    $log_file = $log_dir . $in_file;
}

if ($in_mode === 'new') {
    file_put_contents($log_file, $in_content . "\r\n");
}
else if ($in_mode === 'append' || empty($in_mode)) {
    file_put_contents($log_file, $in_content . "\r\n", FILE_APPEND);
}

$html = <<<HTML
    <meta content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0">
    <style>
    * {
    font-size: 1.2em;
    }
    </style>
    <h1>Please check on 10.134.50.225:/search/nginx/html/teaera-log/stat.log or file you specified</h1>
HTML;

die($html);