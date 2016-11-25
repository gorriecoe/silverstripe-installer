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
    private static $allowed_actions = array ();

    public function init() {
        parent::init();

        //Set a custom combined folder under themes so relative paths to images within CSS files don't break
        Requirements::set_combined_files_folder($this->ThemeDir() . '/combined');
        Requirements::set_force_js_to_bottom(true);

        $requiredJS = array(
            'thirdparty/jquery/dist/jquery.min.js',
            'thirdparty/foundation-sites/dist/foundation.min.js'
        );

        $requiredJS[] = $this->ThemeDir().'/js/app.js';

        // [1] use this is this is a custom build
        Requirements::combine_files(
            'main.js',
            $requiredJS
        );
    }

    public function IsLive()
    {
        return Director::isLive();
    }
}
