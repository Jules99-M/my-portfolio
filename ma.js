<script>
$(document).ready(function() {
    // Smooth scrolling for page-scroll links
    $('a.page-scroll').on('click', function(event) {
        var $anchor = $(this);
        if ($($anchor.attr('href')).length) {
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        }
    });

    // Activate scrollspy to highlight navbar items
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 70 // Adjust based on your navbar height
    });

    // Close responsive menu on click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-collapse').collapse('hide');
    });
});
</script>