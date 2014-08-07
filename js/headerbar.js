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
            $nav.data('size','small').animate({height:'60px'}, 100);
            $nav.data('size','small').animate({boxShadow : '0 15px 0px 0px rgba(0,0,0,.5)'}, 40);/*x y blur border?*/
        }
    } else {
        if ($nav.data('size') == 'small') {
            $nav.data('size','big').stop();
            $nav.data('size','big').animate({height:'125px'}, 60);
            $nav.data('size','big').animate({boxShadow : '0 15px 0px 0px rgba(0,0,0,1)'}, 100);/*x y blur border?*/
        }
    }

    var $nav = $('.headertitle');
    if ($('body').scrollTop() > 70) {
        if ($nav.data('size') == 'big') {
            $nav.data('size','small').animate({fontSize : '200%'}, 40);
        }
    } else {
        if ($nav.data('size') == 'small') {
            $nav.data('size','big').animate({fontSize : '300%'}, 100);
        }
    }

    var $nav = $('.headertext');
    if ($('body').scrollTop() > 70) {
        if ($nav.data('size') == 'big') {
            $nav.data('size','small').animate({fontSize : '.8vw'}, 10);
            $nav.data('size','small').animate({width: '70%'}, 10);
            $nav.data('size','small').animate({left: 'auto'}, 10);
            $nav.data('size','small').animate({right: '1px'}, 10); 
            $nav.data('size','small').animate({top: '20px'}, 10);

        }

    } else {
        if ($nav.data('size') == 'small') {
            // $nav.data('size','big').animate({fontSize : '14px'}, 40);
            $nav.data('size','big').animate({top: '80px'}, 10);   
            $nav.data('size','big').animate({width: '100%'}, 20);    
            $nav.data('size','big').animate({fontSize : '1.2vw'}, 50);                                
            $nav.data('size','big').animate({left: '1px'}, 20);            
            $nav.data('size','big').animate({right: 'auto'}, 20);  


        }
    }




});

 /*            $nav.data('size','big').append("<p>Test</p>");*/

 /*.animate({box-shadow: '12px 12px #000000'}, 100*/
