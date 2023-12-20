$(document).ready(function() {
    $(document).on("click","#toggle", function() {
        $(this).toggleClass("on");
        $("#menu").slideToggle();
    });

    $(document).on("click",".tab-heading", function() {
        $(this).toggleClass("on");
        $(".tabcontent").slideToggle();
    });

});
