// add style class to topbar toggler on click
$('#topbarToggler').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('is-active');
});

// the top bar will take-on different background colors depending
// on whether the document has been scrolled beyond a certain point
function reactToScrollTop() {
    var elem = $('#topbar');
    if ($(this).scrollTop() > 32) {
        if (!elem.hasClass('white')) {
            elem.addClass('white');
        }
    } else {
        if (elem.hasClass('white')) {
            elem.removeClass('white');
        }
    }
}

// ensure top bar is initialized with the
// right background color on load/refresh
reactToScrollTop();

// ensure top bar takes the right background color on scroll
$(document).scroll(reactToScrollTop);

