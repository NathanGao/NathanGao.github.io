$(document).ready(function(){
    // $(function(){
    $('#pageintro').data('state','active');
    $('#pagemalbec').data('state','inactive');
    $('#pageperseus').data('state','inactive');
    $('#pagepayperks').data('state','inactive');
    $('#navhome').data('state','active');
    $('#navmalbec').data('state','inactive');
    $('#navperseus').data('state','inactive');
    $('#navpayperks').data('state','inactive');

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

    var $sec = $('#pageintro');
    var $nav = $('#navhome');
    if (($('body').scrollTop() >= 0 ) && ($('body').scrollTop() < $('#pagemalbec').offset().top -300)) {
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

    var $sec = $('#pagemalbec');
    var $nav = $('#navmalbec');
    if (($('body').scrollTop() > $('#pagemalbec').offset().top -600) && ($('body').scrollTop() < $('#pageperseus').offset().top -300)) {
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

    var $sec = $('#pageperseus');
    var $nav = $('#navperseus');
    if (($('body').scrollTop() > $('#pageperseus').offset().top -600) && ($('body').scrollTop() < $('#pagepayperks').offset().top -300)) {
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


    var $sec = $('#pagepayperks');
    var $nav = $('#navpayperks');
    if (($('body').scrollTop() > $('#pagepayperks').offset().top -600) && ($('body').scrollTop() < $('body').scrollTop() < 18500 )) {
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
