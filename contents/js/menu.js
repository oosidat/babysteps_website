$(function() {
    $("#menuExpand").click(function(e) {
        $(".menu").toggleClass("menuOpen");
        e.preventDefault();
    });
});
