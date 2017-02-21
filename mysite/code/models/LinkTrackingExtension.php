<?php
class LinkTrackingExtension extends DataExtension
{
    /**
     * Database fields
     * @var array
     */
    private static $db = array(
        'TrackingID' => 'varchar'
    );

    /**
     * Update Fields
     * @return FieldList
     */
    public function updateCMSFields(FieldList $fields)
    {
        $fields->addFieldsToTab(
            'Root.Main',
            array(
                TextField::create(
                    'TrackingID',
                    'Tracking ID'
                )
            ),
            'OpenInNewWindow'
        );
        return $fields;
    }

    public function getTrackingAttr()
    {
        $siteConfig = SiteConfig::current_site_config();
        $owner = $this->owner;
        if($owner->TrackingID){
            if(isset($siteConfig->GoogleTagManager)){
                $id = Convert::raw2att(str_replace(' ','_',$owner->TrackingID));
                return " id='$id' ";
            }
        }
        return false;
    }
}
