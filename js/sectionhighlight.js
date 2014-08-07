$(function(){
    $('html').data('state','inactive');
});

$(window).scroll(function(){


    var $nav = $('html');
    if ($('body').scrollTop() > 500) {
        if ($nav.data('state') == 'inactive') {
            $nav.data('state','active').animate({backgroundColor : '#e67e22'}, 100);
        }
    } else {
        if ($nav.data('state') == 'active') {
            $nav.data('state','inactive').animate({backgroundColor: '#fff'}, 100);
        }
    }

  
    }




);

 /*            $nav.data('state','big').append("<p>Test</p>");*/

 /*.animate({box-shadow: '12px 12px #000000'}, 100*/
