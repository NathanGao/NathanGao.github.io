$(function(){
    $('#intro').data('state','active');
    $('#projectmalbec').data('state','inactive');
    $('#projectperseus').data('state','inactive');
    $('#projectpoop').data('state','inactive');


});

$(window).scroll(function(){


    var $nav = $('#intro');
    if (($('body').scrollTop() >= 0 ) && ($('body').scrollTop() < 500 )) {
        if ($nav.data('state') == 'inactive') {
/*            $nav.data('state','active').animate({backgroundColor : 'rgba(243, 156, 18,.5)'}, 400);*/
            $nav.data('state','active').removeClass("gradient");

        }
    } else {
        if ($nav.data('state') == 'active') {
/*            $nav.data('state','inactive').animate({backgroundColor: 'transparent'}, 400);*/
            $nav.data('state','inactive').addClass("gradient");
        }
    }


    var $nav = $('#projectmalbec');
    if (($('body').scrollTop() > 500 ) && ($('body').scrollTop() < 2400 )) {
        if ($nav.data('state') == 'inactive') {
/*            $nav.data('state','active').animate({backgroundColor : 'rgba(243, 156, 18,.5)'}, 400);*/
            $nav.data('state','active').removeClass("gradient");

        }
    } else {
        if ($nav.data('state') == 'active') {
/*            $nav.data('state','inactive').animate({backgroundColor: 'transparent'}, 400);*/
            $nav.data('state','inactive').addClass("gradient");
        }
    }

    var $nav = $('#projectperseus');
    if (($('body').scrollTop() > 2400 ) && ($('body').scrollTop() < 3500 )) {
        if ($nav.data('state') == 'inactive') {
            $nav.data('state','active').removeClass("gradient");
        }
    } else {
        if ($nav.data('state') == 'active') {
            $nav.data('state','inactive').addClass("gradient");
        }
    }

  
    }



);

     var win = $(window);


win.scroll(function(event) {
  
  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in"); 
    } 
  });
  
});