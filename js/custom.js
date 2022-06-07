$(document).ready(function(){
    /* Change CSS with Scroll */
    $(window).scroll(function(){
        if($(window).scrollTop() > 50) {
        $('.gototop').addClass('active')
        }
        else {
        $('.gototop').removeClass('active')
        }   
    })
})