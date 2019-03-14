(function ($) {
    $(document).ready(function () {
        var owl = $('.references-carousel__list');
        owl.owlCarousel({
            margin: 10,
            nav: true,
            loop: true,
            responsive: {
                0: {
                    items: 1
                },
            }
        });
    });
})(jQuery);