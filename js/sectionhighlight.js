$(function(){
    $('#intro').data('state','active');
    $('#projectmalbec').data('state','inactive');
    $('#projectperseus').data('state','inactive');
    $('#projectpoop').data('state','inactive');
    $('#home').data('state','active');
    $('#malbec').data('state','inactive');
    $('#perseus').data('state','inactive');
    $('#poop').data('state','inactive');

});

$(window).scroll(function(){

    var $sec = $('#intro');
    var $nav = $('#home');
    if (($('body').scrollTop() >= 0 ) && ($('body').scrollTop() < 601 )) {
        if ($sec.data('state') == 'inactive') {
/*            $sec.data('state','active').animate({backgroundColor : 'rgba(243, 156, 18,.5)'}, 400);*/
            $sec.data('state','active').removeClass("gradient");
            $nav.data('state','active').addClass("glow");
        }
    } else {
        if ($sec.data('state') == 'active') {
/*            $sec.data('state','inactive').animate({backgroundColor: 'transparent'}, 400);*/
            $sec.data('state','inactive').addClass("gradient");
            $nav.data('state','inactive').removeClass("glow");
        }
    }

    var $sec = $('#projectmalbec');
    var $nav = $('#malbec');
    if (($('body').scrollTop() > 500 ) && ($('body').scrollTop() < 2501 )) {
        if ($sec.data('state') == 'inactive') {
/*            $sec.data('state','active').animate({backgroundColor : 'rgba(243, 156, 18,.5)'}, 400);*/
            $sec.data('state','active').removeClass("gradient");
            $nav.data('state','active').addClass("glow");
        }
    } else {
        if ($sec.data('state') == 'active') {
/*            $sec.data('state','inactive').animate({backgroundColor: 'transparent'}, 400);*/
            $sec.data('state','inactive').addClass("gradient");
            $nav.data('state','inactive').removeClass("glow");            
        }
    }

    var $sec = $('#projectperseus');
    var $nav = $('#perseus');
    if (($('body').scrollTop() > 2400 ) && ($('body').scrollTop() < 3500 )) {
        if ($sec.data('state') == 'inactive') {
            $sec.data('state','active').removeClass("gradient");
            $nav.data('state','active').addClass("glow");

        }
    } else {
        if ($sec.data('state') == 'active') {
            $sec.data('state','inactive').addClass("gradient");
            $nav.data('state','inactive').removeClass("glow");

        }
    }


    var $sec = $('#projectpayperks');
    var $nav = $('#payperks');
    if (($('body').scrollTop() > 2400 ) && ($('body').scrollTop() < 3500 )) {
        if ($sec.data('state') == 'inactive') {
            $sec.data('state','active').removeClass("gradient");
            $nav.data('state','active').addClass("glow");

        }
    } else {
        if ($sec.data('state') == 'active') {
            $sec.data('state','inactive').addClass("gradient");
            $nav.data('state','inactive').removeClass("glow");

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
