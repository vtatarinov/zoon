$(document).ready(function() {
    function hideDropdowns() {
        let dropdowns = $('.dropdown-content');
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if ($(openDropdown).hasClass('show')) {
                $(openDropdown).removeClass('show');
            }
        }
    }
    $('ul.dots').on('click', function() {
        hideDropdowns();
        let text = $(this).next('.dropdown-content').find('span');
        if (text.data('enabled') == true) {
            text.text('Выключить');
        } else {
            text.text('Включить');
        }
        $(this).next('.dropdown-content').toggleClass('show');
    });
    $(window).on('click', function(event) {
        if (!event.target.matches('ul.dots')) {
            hideDropdowns();
        }
    });
    $('.dropdown-content', '.dropdown').on('click', function() {
        let card = $(this).closest('.card'),
            text = $(this).find('span');
        if (card.hasClass('card-disabled')) {
            text.data('enabled', true);
            card.addClass('card-active');
            card.removeClass('card-disabled');
            card.find('.card--content ul').show();
        } else {
            text.data('enabled', false);
            card.removeClass('card-active');
            card.addClass('card-disabled');
            card.find('.card--content ul').hide();
            card.find('.card--footer').html('<span>Площадка отключена</span>');
        }
    });
});