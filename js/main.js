$(function($) {
    $('.bg-switcher').bgSwitcher({
     images:['/images/bg-image1.jpeg','/images/bg-image2.jpeg','/images/bg-image3.jpeg','/images/bg-image4.jpeg','/images/bg-image5.jpeg','/images/bg-image6.jpeg','/images/bg-image7.jpeg'],
     interval: 5000,
     loop: true
    });

    $('.fadein').css('visibility', 'hidden')
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        $('.fadein').each(function(){
            var targetElement = $(this).offset().top;
        if (scroll>targetElement-windowHeight+200){
           $(this).addClass('fadein_visible')
        }
        });
    });
});