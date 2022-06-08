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

    /* main slider */
    var slideIndex = 0;
    var slideWidth = 1440;
    showSlides();

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("slide_item");
        var dots = document.getElementsByClassName("slide_btn");
        for (i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0; 
        slides[i].style.transition = `${0.5}s ease-out`;
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.opacity = 1;  
        slides[slideIndex-1].style.transition = `${0.5}s ease-out`;
        dots[slideIndex-1].className += " active";
        setTimeout(showSlides, 5000); // Change image every 5 seconds
    }

    /* banner */
    $('.banner_btn').click(function(){
        $('.banner_cnt').toggleClass('active')
        $(this).toggleClass('active')
    })
})