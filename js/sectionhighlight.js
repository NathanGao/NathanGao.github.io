$(function(){
    $('#intro').data('state','active');
    $('#projectmalbec').data('state','inactive');
    $('#projectperseus').data('state','inactive');
    $('#projectpayperks').data('state','inactive');
    $('#home').data('state','active');
    $('#malbec').data('state','inactive');
    $('#perseus').data('state','inactive');
    $('#payperks').data('state','inactive');

});

var win = $(window);


win.scroll(function(event) {

  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in");
    }
  });

});



$(window).scroll(function(){

    var $sec = $('#intro');
    var $nav = $('#home');
    if (($('body').scrollTop() >= 0 ) && ($('body').scrollTop() < $('#projectmalbec').offset().top -800)) {
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
    if (($('body').scrollTop() > $('#projectmalbec').offset().top -1000) && ($('body').scrollTop() < $('#projectperseus').offset().top -600)) {
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
    if (($('body').scrollTop() > $('#projectperseus').offset().top -800) && ($('body').scrollTop() < $('#projectpayperks').offset().top -600)) {
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
    if (($('body').scrollTop() > $('#projectpayperks').offset().top -800) && ($('body').scrollTop() < $('body').scrollTop() < 18500 )) {
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

     
