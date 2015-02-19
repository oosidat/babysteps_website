$(function() {
    $("#menuExpand").click(function(e) {
        $(".menu").toggleClass("menuOpen");
        console.log("menu clicked");
        e.preventDefault();
    });
});
