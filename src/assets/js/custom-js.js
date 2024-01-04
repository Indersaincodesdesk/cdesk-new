$(document).ready(function() {
    $(document).on("click","#toggle", function() {
        $(this).toggleClass("on");
        $("#menu").slideToggle();
    });

    $(document).on("click",".tab-heading", function() {
        $(this).toggleClass("on");
        $(".tabcontent").slideToggle();
    });
    $(document).on('click', ".service_tab-heading", function() {
        if ($(this).hasClass('active')) {
            $(this).siblings('.service_tabcontent').slideUp();
            $(this).removeClass('active');
        } else {
            $('.service_tabcontent').slideUp();
            $('.service_tab-heading').removeClass('active');
            $(this).siblings('.service_tabcontent').slideDown();
            $(this).toggleClass('active');
        }
    });
    // our-work
    $(document).on('click', '.more-work', function() {
        $(this).parent().prev('.more-work-container').slideDown();
        $(this).addClass('active');
        $(this).text('Show Less');
    });
    $(document).on('click', '.more-work.active', function() {
        $(this).parent().prev('.more-work-container').slideUp();
        $(this).removeClass('active');
        $(this).text('Show More');
    });

    var checkExist = setInterval(function() {
        if ($('#blogFilter .blog_card_wrap').length) {
            $("#blogFilter .blog_card_wrap").hide();
            $("#blogFilter .blog_card_wrap").slice(0, 9).fadeIn();
            $(document).on('click', '#loadMore', function(e) {
                e.preventDefault();
                $("#blogFilter .blog_card_wrap:hidden").slice(0, 9).fadeIn();
                if ($("#blogFilter .blog_card_wrap:hidden").length == 0) {
                    $("#loadMore").fadeOut('slow');
                }
            });
            clearInterval(checkExist);
        }
    }, 100);

});
