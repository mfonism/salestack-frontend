// add style class to topbar toggler on click
$('#topbarToggler').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('is-active');
});