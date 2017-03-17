// On loaded
$(function() {
    toggleSearchBar();
});

function toggleSearchBar() {
    var $search = $('.search'),
        wrapper = $('.wrapper-search'),
        $navigation = $('#main-nav');

    $search.on('click', function() {
        if (wrapper.is(':visible')) {
            wrapper.hide();
            $search.removeClass('toggled');
            $navigation.css('box-shadow', '3px 4px 5px 0px rgba(137, 126, 126, 0.75)');
        } else {
            wrapper.show();
            $search.addClass('toggled');
            $navigation.css('box-shadow', 'none');
        }
    })
}