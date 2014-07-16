$(function(){
    $('#header_nav').data('size','big');
/*    $('.headertitlebox').data('size','big');
    $('.headertextbox').data('size','big');*/
    $('.headertitle').data('size','big');
    $('.headertext').data('size','big');
});

$(window).scroll(function(){
    var $nav = $('#header_nav');
    if ($('body').scrollTop() > 70) {
        if ($nav.data('size') == 'big') {
            $nav.data('size','small').stop();
            $nav.data('size','small').animate({height:'6vh'}, 140);
            $nav.data('size','small').animate({boxShadow : '0 15px 0px 0px rgba(0,0,0,.5)'}, 40);/*x y blur border?*/
        }
    } else {
        if ($nav.data('size') == 'small') {
            $nav.data('size','big').stop();
            $nav.data('size','big').animate({height:'12vh'}, 40);
            $nav.data('size','big').animate({boxShadow : '0 15px 0px 0px rgba(0,0,0,1)'}, 100);/*x y blur border?*/
        }
    }

    var $nav = $('.headertitle');
    if ($('body').scrollTop() > 70) {
        if ($nav.data('size') == 'big') {
            $nav.data('size','small').animate({fontSize : '3.5vmin'}, 60);
        }
    } else {
        if ($nav.data('size') == 'small') {
            $nav.data('size','big').animate({fontSize : '8.vmin'}, 100);
        }
    }

    var $nav = $('.headertext');
    if ($('body').scrollTop() > 70) {
        if ($nav.data('size') == 'big') {
            $nav.data('size','small').animate({fontSize : '1.5vmin'}, 20);
            $nav.data('size','small').animate({paddingLeft: '30%'}, 50);
            $nav.data('size','small').animate({top: '32%'}, 50);
        }

    } else {
        if ($nav.data('size') == 'small') {
            // $nav.data('size','big').animate({fontSize : '14px'}, 40);
            $nav.data('size','big').animate({top: '55%'}, 50);
            $nav.data('size','big').animate({paddingLeft: '0%'}, 50);
            $nav.data('size','big').animate({fontSize : '2.0vmin'}, 20);

        }
    }




});

 /*            $nav.data('size','big').append("<p>Test</p>");*/

 /*.animate({box-shadow: '12px 12px #000000'}, 100*/
