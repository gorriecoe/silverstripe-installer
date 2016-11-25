(function($) {
    $(document).ready(function(){
        $('a[email]').each(function(){
            var link = $(this).attr('name')+'@'+$(this).attr('domain'),
                label = ($(this).attr('label') ? $(this).attr('label') : link);
            $(this).html(label).click(function(event){
                event.preventDefault();
                window.location = 'mailto:'+link;
                window.location.href = 'mailto:'+link;
            });
        });
    });
}(jQuery));
