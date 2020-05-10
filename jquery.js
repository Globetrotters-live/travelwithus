$(document).ready(function() {
	$('#elem'); //fast function
	$('#navigation a.button'); //minimizinng
    $(".one").fadeOut(1000).slideDown(2000);
    $("h1").fadeOut(500).fadeIn(1000);
    $('#rect').css('borderRadius',5); //browser hide some neccessary function
    /*
    $('h5').fadeIn(function(){
    // Using $.proxy to bind this:

    $('h5').click($.proxy(function(){
        // this points to #panel
        $(this).fadeOut();
    },this));

}); */
 /*$('#logo').animate({width:700}).delay(1000).animate({marginTop:70}); */

    
});