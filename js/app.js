$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        }
    }
});
$('.tagline').each((i, e) => {
    $(e).addClass('ready');
});
$(document).on('scroll', () => {
    const y = $(document).scrollTop();
    if (y >= 100) {
        $('.navbar').addClass('fixed-top');
    } else {
        $('.navbar').removeClass('fixed-top');
    }
    if (y >= $('#about').offset().top - 50) {
        $('#about>.container>.row>.trigger').each((i) => {
            setTimeout(() => {
                $('#about>.container>.row>.trigger').eq(i).addClass('to-top');
            }, 500 * (i + 1));
        });
    }
    if (y >= $('#project').offset().top - 50) {
        $('#project>.container>.row>.trigger').each((i) => {
            setTimeout(() => {
                $('#project>.container>.row>.trigger').eq(i).addClass('to-top');
            }, 500 * (i + 1));
        });
    }
    if (y >= $('#services').offset().top - 50) {
        $('#services>.container>.row>.trigger').each((i) => {
            setTimeout(() => {
                $('#services>.container>.row>.trigger').eq(i).addClass('to-top');
            }, 500 * (i + 1));
        });
    }
});
$('.navbar a').on('click', function (e) {
    if (this.hash !== '') {
        e.preventDefault();
        const url = this.hash;
        $('html, body').animate({
            scrollTop: $(url).offset().top
        }, 1000);
    }
});