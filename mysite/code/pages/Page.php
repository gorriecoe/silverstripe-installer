<?php
/**
 * Standard Page Type
 *
 * @package silverstripe
 * @subpackage mysite
 */
class Page extends SiteTree
{

}

class Page_Controller extends ContentController
{
    public function init()
    {
        parent::init();
        Requirements::set_force_js_to_bottom(true);
        Requirements::javascript($this->ThemeDir().'/js/app.js');
    }

    public function IsLive()
    {
        return Director::isLive();
    }
}
