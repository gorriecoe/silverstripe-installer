/**
* jQuery Framework
*/
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

/**
* Foundation 6.4 Framework
*/
import { Foundation } from './foundation';
Foundation.addToJquery(jQuery);

(function($) {
    $(document).foundation();
}(jQuery));
