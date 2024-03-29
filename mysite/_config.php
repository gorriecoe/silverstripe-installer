<?php
// Get YML comfiguration settings
$config = Config::inst();

// use database name from config.yml unless defined in environment
if( ! defined('SS_DATABASE_NAME')){
  define('SS_DATABASE_NAME', $config->get('Database', 'name'));
}

// include configuration set in _ss_environment.php
require_once('conf/ConfigureFromEnv.php');

FulltextSearchable::enable(array('SiteTree'));

if (Director::isDev()) {
  // Turn on all errors
  ini_set('display_errors', 1);
  ini_set("log_errors", 1);
  // error_reporting(E_ERROR | E_PARSE);
  // error_reporting(E_ALL && ~E_DEPRECATED);
  error_reporting(E_ALL | E_STRICT);

  SS_Log::add_writer(new SS_LogFileWriter(dirname(__FILE__).'/errors.log'));
}
