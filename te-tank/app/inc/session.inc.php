<?php

require_once '../conf/mysql.conf.php';

$sess_db = "";
// Session lifetime:
$sess_life = get_cfg_var("session.gc_maxlifetime");

function sess_open($save_path,$session_name)
{
    global $db_host, $db_port, $db_name, $db_user, $db_pass;
    global $sess_db;

    if(!$sess_db = mysql_pconnect("$db_host:$db_port", $db_user, $db_pass))
    {
        die("<li>MySql Error:".mysql_error()."<li>");
    }

    if(!mysql_select_db($db_name,$sess_db))
    {
        die("<li>MySql Error:".mysql_error()."<li>");
    }

    return true;
}

function sess_close()
{
    return true;
}

function sess_read($key)
{
    global $sess_db, $sess_life;

    $sql = "SELECT value"
        . " FROM wx_mis_session"
        . " WHERE sesskey = '" . mysql_real_escape_string($key) . "'"
        . " AND expiry > " . time();
    $res = mysql_query($sql, $sess_db);
    if(list($value) = mysql_fetch_row($res))
    {
        return $value;
    }

    sess_destroy($key);
    return false;
}

function sess_write($key, $val)
{
    global $sess_db, $sess_life;

    $expiry = time() + $sess_life;
    $value = $val;
    $sql = "INSERT INTO wx_mis_session"
        . " VALUES('" . mysql_real_escape_string($key) . "',"
        . " $expiry,"
        . " '" . mysql_real_escape_string($value) . "')";
    $res = mysql_query($sql, $sess_db);

    if (!$res)
    {
        $sql = "UPDATE wx_mis_session"
            . " SET expiry = $expiry,"
            . " value = '" . mysql_real_escape_string($value) . "'"
            . " WHERE sesskey = '" . mysql_real_escape_string($key) . "'";
        $res = mysql_query($sql, $sess_db);
    }

    return $res;
}

function sess_destroy($key)
{
    global $sess_db;

    $sql = "DELETE from wx_mis_session"
        . " WHERE sesskey = '" . mysql_real_escape_string($key) . "'";
    $res = mysql_query($sql, $sess_db);

    return $res;
}

function sess_gc($maxlifetime)
{
    global $sess_db;

    $sql = "DELETE from wx_mis_session"
        . " WHERE expiry < " . time();
    $res = mysql_query($sql, $sess_db);

    return mysql_affected_rows($sess_db);
}

session_module_name();
session_set_save_handler("sess_open",
        "sess_close",
        "sess_read",
        "sess_write",
        "sess_destroy",
        "sess_gc");

session_start();
