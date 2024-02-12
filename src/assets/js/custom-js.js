$(document).ready(function() {
    // header
    $(window).scroll(function () {
        var header = $("header");
        if ($(window).scrollTop() >150) {
          header.addClass("sticky");
        } else {
          header.removeClass("sticky");
        }
      });
    $(document).on("click","#toggle", function() {
        $(this).toggleClass("on");
        $("#menu").slideToggle();
        $(this).parent(".container").find('#menu').show();
        $('body,html').addClass("fixed-on-mobile");
    });
    $(document).on('click', '#toggle.on', function() {
        $('body,html').removeClass("fixed-on-mobile");
    });
    $(document).on("click",".tab-heading", function() {
        $(this).toggleClass("on");
        $(".tabcontent").slideToggle();
    });
    $(document).on('mouseup', function(e) {
        var popup = $(".on");
        if (!popup.is(e.target) && popup.has(e.target).length === 0) {
            $(".tab-heading").removeClass('on');
            $(".tabcontent").slideUp();
        }
    });
    $(document).on('click', '.menu-item', function() {
        $("#toggle").removeClass("on");
        $("#menu").css("display", "none");
        $('body,html').removeClass("fixed-on-mobile");
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
    $(".list-head").hover(
        function () {
          $(this).addClass("result_hover");
        },
        function () {
          $(this).removeClass("result_hover");
        }
    );
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
// blog loadmore btn
    var checkExist = setInterval(function() {
        if ($('#blogFilter .blog_card_wrap').length) {
            $("#blogFilter .blog_card_wrap").hide();
            $("#blogFilter .blog_card_wrap").slice(0, 12).fadeIn();
            $(document).on('click', '#loadMore', function(e) {
                e.preventDefault();
                $("#blogFilter .blog_card_wrap:hidden").slice(0, 12).fadeIn();
                if ($("#blogFilter .blog_card_wrap:hidden").length == 0) {
                    $("#loadMore").fadeOut('slow');
                }
            });
            clearInterval(checkExist);
        }
    }, 100);
    // progress bars
    $(".barra span.persent").each(function () {
        $(this).animate(
          {
            width: $(this).attr("data-progress") + "%",
          },
          1000
        );
        $(this).text($(this).attr("data-progress") + "%");
    });
     // counter
     var checkExistcount = setInterval(function() {  
        function isScrolledIntoView(elem) {
            var $elem = $(elem);            
            if (!$elem.length) {
                return false;
            }        
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();
            var elemTop = $elem.offset().top;
            var elemBottom = elemTop + $elem.height();        
            return elemBottom <= docViewBottom;
        }
        // Count up code
        function countUp() {
            $('.counter-number').each(function() {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                var ended = $this.attr('ended');
                if (ended != "true" && isScrolledIntoView($this)) {
                    $({ countNum: $this.text() }).animate({
                        countNum: countTo
                    }, {
                        duration: 4000,
                        easing: 'swing',
                        step: function() {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function() {
                            $this.text(this.countNum);
                        }
                    });
                    $this.attr('ended', 'true');
                }
            });
        } 
    // clearInterval(checkExistcount); 
    if (isScrolledIntoView(".counter")) {
        countUp();
        clearInterval(checkExistcount);
    }     
    $(document).scroll(function() {
        if (isScrolledIntoView(".counter")) {
            countUp();
            clearInterval(checkExistcount);
        }       
    });
    }, 100);
    // Blog innder pages share link button
    $(document).on('click', '.link-wrap .cdk-btn-white', function() {
        $(this).addClass('activate');
    });
    $(document).on('mouseup', function(e) {
        var popup = $(".activate");
        if (!popup.is(e.target) && popup.has(e.target).length === 0) {
            $(".link-wrap .cdk-btn-white").removeClass('activate');
        }
    });
    // career form
    $('#fileInput').on('change', updateImageDisplay);
        function updateImageDisplay() {
         const curFiles = $('#fileInput')[0].files;
        const preview = $('.preview');
        if (curFiles.length !== 0) {
        preview.text('file attached');
        preview.css('opacity', 1);
        }
    };
    // cookies
    const isCookieAccepted = sessionStorage.getItem('eucookie');
    if (!isCookieAccepted) {
        $(".cookies-pop-up").delay(1).fadeIn(1000);
    } else {
        // If the cookie is already accepted, check if it has expired and delete it if necessary
        var cookieExpiration = new Date(sessionStorage.getItem('eucookie_expiration'));
        var thirtyDaysLater = new Date();
        thirtyDaysLater.setDate(thirtyDaysLater.getDate() - 30);

        if (cookieExpiration < thirtyDaysLater) {
            // Delete the cookie if 30 days have passed
            sessionStorage.removeItem('eucookie');
            sessionStorage.removeItem('eucookie_expiration');
        }
    }
    $(document).on('click', '#cookie-btn', function() {
        sessionStorage.setItem('eucookie', 'accepted');
        $('.cookies-pop-up').fadeOut(1000);
        $('.popup-cookies').fadeOut(1000);
        var expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 30);
        sessionStorage.setItem('eucookie_expiration', expirationDate.toUTCString());
    });
    $(document).on('click','#decline-cookie', function() {
        $('.popup-cookies').css('display', 'none');
    });
    $(document).on('click','.read-more-cookie', function() {
        $('.popup-cookies').css('display', 'none');
    });

    // blog search
    var length = 0;
    $("#myInput").val('');
    $(document).on("keyup", "#myInput", function() {
        var value = $(this).val().toLowerCase();
        $(".blog_cards_wrapper .blog_card_wrap").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
        var trSel = $(".blog_cards_wrapper .blog_card_wrap:visible")
        if (trSel.length == 0) {
            $(".no-records").show();
        } else {
            $(".blog_cards_wrapper .blog_card_wrap").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
                $(".no-records").hide();
            });
        };
    });
    $(document).on('click', '.search-input-btn', function() {
        var searcvalue = $('#myInput').val().toLowerCase();
        console.log(searcvalue);
        $('#myInput').val("");
        $('.no-records').hide();
        $(".blog_cards_wrapper .blog_card_wrap").show();
    });

});