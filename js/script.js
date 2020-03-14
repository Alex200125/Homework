$(document).ready(function() {
    $('.main_btna, .main_btn, li:eq(7)').click(function() {
        $('.overlay').show("slow");
        $('.modal').slideDown(1000);
    });

    $('.close').click(function() {
        $('.overlay').hide("slow");
        $('.modal').slideUp(1000);
    });
});
 
