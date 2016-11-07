// Date Range Picker
$('#time-picker input').daterangepicker({
    autoApply: true,
    showDropdowns: true
});
$('#time-picker .btn').click(function() {
   $('#time-picker input').val("");
});

// Scroll to Top
$('.totop').hide();

$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop()>300) {
            $('.totop').slideDown();
        } else {
            $('.totop').slideUp();
        }
    });
    $('.totop a').click(function(e) {
        e.preventDefault();
        $('body,html').animate({scrollTop: 0}, 500);
    });
});