$(document).ready(function() {
    // Accordion functionality
    $('.accordion-header').click(function() {
        var accordion = $(this).closest('.accordion');
        accordion.find('.accordion-content').not($(this).next('.accordion-content')).slideUp();
        $(this).next('.accordion-content').slideToggle();
    });

    // Tab functionality
    $('.tabs li').click(function() {
        var tabId = $(this).data('tab');
        $('.tab-content').hide();
        $('#' + tabId).show();
    });

    // Initially hide all accordion content and show the first tab
    $('.accordion-content').hide();
    $('#gallery-1').show();
});
