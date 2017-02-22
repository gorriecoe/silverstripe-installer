<?php

/**
 * Adds an google tag manager tab to site config
 *
 * @package silverstripe
 * @subpackage mysite
 */
class SiteConfigTrackingExtension extends DataExtension
{
    /**
     * Database fields
     * @var array
     */
    private static $db = array(
        'GoogleTagManager' => 'Varchar(20)'
    );

    /**
     * Update Fields
     * @return FieldList
     */
    public function updateCMSFields(FieldList $fields)
    {
        $fields->addFieldsToTab(
            'Root.Tracking',
            array(
                TextField::create(
                    'GoogleTagManager',
                    'Tag manager ID'
                )->setAttribute("placeholder", "GTM-******")
            )
        );
        return $fields;
    }
}
