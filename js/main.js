/// <reference types="../@types/jquery" />

// loading screen
$(function () {
    // loading screen
    $('.loader').fadeOut(500 , function(){
        $('#loading').slideUp(500 , function(){
            $('body').css('overflow','auto');
            $('#loading').remove();
        });
       
    })



    // change bakground navbar
    $(window).on('scroll' , function(){
        let aboutOffset = $('#about').offset().top
        let windowScroll = $(window).scrollTop();
        if(windowScroll > aboutOffset - 650){
            $('#keyUp').css('display','block');
        }
        else{
            $('#keyUp').css('display','none');
        }
    });


    // smooth scroll
    $('a[href^="#"]').on('click',function(){
        let href = $(this).attr('href');
        let offset = $(href).offset().top;
        $('body,html').animate({scrollTop:offset}, 500);
    });


});






