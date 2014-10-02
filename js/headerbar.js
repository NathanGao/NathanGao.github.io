$(document).ready(function(){     // $(function(){
    $('#header_nav').data('size','big');
/*    $('.headertitlebox').data('size','big');
    $('.headertextbox').data('size','big');*/
    $('.headertitle').data('size','big');
    $('.headertext').data('title','none');
    $('.titlepic').data('size','big');
});

$(window).scroll(function(){
    var $nav = $('#header_nav');
    if ($('body').scrollTop() >= 200) {
        if ($nav.data('size') == 'big') {
            $nav.data('size','small').stop();
            $nav.data('size','small').animate({height:'75px'}, 100);
            $nav.data('size','small').animate({boxShadow : '0 5px 0px 0px rgba(0,0,0,.5)'}, 40);/*x y blur border?*/
        }
    } else {
        if ($nav.data('size') == 'small') {
            $nav.data('size','big').stop();
            $nav.data('size','big').animate({height:'125px'}, 60);
            $nav.data('size','big').animate({boxShadow : '0 5px 0px 0px rgba(0,0,0,1)'}, 100);/*x y blur border?*/

        }
    }

 var $nav = $('.titlepic');
    if ($('body').scrollTop() >= 150) {
        if ($nav.data('size') == 'big') {
            $nav.data('size','small').stop();
            // $nav.data('size','small').hide({easing:'easeOutBack'}, 500);
            $nav.data('size','small').animate({marginTop: '-30%'}, 200);
        }
    } else {
        if ($nav.data('size') == 'small') {
            $nav.data('size','big').stop();
            // $nav.data('size','big').show({easing:'easeOutBack'}, 500);
            $nav.data('size','big').animate({marginTop: '-13%'}, 200);

        }
    }

    var $nav = $('.headertitle');
    if ($('body').scrollTop() >= 200) {
        if ($nav.data('size') == 'big') {
            $nav.data('size','small').animate({fontSize : '2em'}, 40);
        }
    } else {
        if ($nav.data('size') == 'small') {
            $nav.data('size','big').animate({fontSize : '3em'}, 100);
        }

    }

          var $nav = $('.headertext');
          if ($('body').scrollTop() < 200) {
                if ($nav.data('title') != 'none') {
                  $nav.data('title','none').animate({top: '0px'}, 0);
                  $nav.data('title','none').animate({left: '2px'}, 0);
                  $nav.data('title','none').animate({width: '100%'}, 0);
                  $nav.data('title','none').animate({fontSize : '1em'}, 0);
                  $nav.data('title','none').text('User Experience/Interaction Designer, Information Architect. NYC');
                }

          } else {
          if (($('body').scrollTop() >= 200 ) && ($('body').scrollTop() < $('#pagemalbec').offset().top -600)) {
                  if ($nav.data('title') != 'intro') {
                        $nav.data('title','intro').animate({width: '60%'}, 10);
                        $nav.data('title','intro').animate({left: '50%'}, 10);
                        $nav.data('title','intro').animate({top: '-30px'}, 10);
                        $nav.data('title','intro').animate({text: '30px'}, 10);
                        $nav.data('title','intro').text('My background: UXD, IA, IxD, NYC');}

          } else {
          if (($('body').scrollTop() > $('#pagemalbec').offset().top -800) && ($('body').scrollTop() < $('#pageperseus').offset().top -600)) {
                  if ($nav.data('title') != 'Malbec') {
                        $nav.data('title','Malbec').animate({width: '60%'}, 10);
                        $nav.data('title','Malbec').animate({left: '50%'}, 10);
                        $nav.data('title','Malbec').animate({top: '-30px'}, 10);
                        $nav.data('title','Malbec').text('Project Malbec - Financial Reonciliation');}

          } else {
            if (($('body').scrollTop() > $('#pageperseus').offset().top -800) && ($('body').scrollTop() < $('#pageprivate').offset().top -600)) {
                    if ($nav.data('title') != 'perseus') {
                          $nav.data('title','perseus').animate({width: '60%'}, 10);
                          $nav.data('title','perseus').animate({left: '50%'}, 10);
                          $nav.data('title','perseus').animate({top: '-30px'}, 10);
                          $nav.data('title','perseus').text('Perseus Telecom: Corporate Site');}
           } else {
            if (($('body').scrollTop() > $('#pageprivate').offset().top -800) && ($('body').scrollTop() < $('#pagesite').offset().top -600 )) {
                    if ($nav.data('title') != 'private') {
                          $nav.data('title','private').animate({width: '60%'}, 10);
                          $nav.data('title','private').animate({left: '50%'}, 10);
                          $nav.data('title','private').animate({top: '-30px'}, 10);
                          $nav.data('title','private').text('Private Startup: Design Challenge');}
           } else {
            if (($('body').scrollTop() > $('#pagesite').offset().top -800) && ($('body').scrollTop() < $('body').scrollTop() < 18500 )) {
                    if ($nav.data('title') != 'site') {
                          $nav.data('title','site').animate({width: '60%'}, 10);
                          $nav.data('title','site').animate({left: '50%'}, 10);
                          $nav.data('title','site').animate({top: '-30px'}, 10);
                          $nav.data('title','site').text('The Making of this Site. Thanks for Visiting!');}}

}}}
                }

        }


});


// var $nav = $('.headertext');
// if ($('body').scrollTop() > 70) {
//     if ($nav.data('size') == 'big') {
//         $nav.data('size','small').animate({width: '50%'}, 10);
//         $nav.data('size','small').animate({left: 'auto'}, 10);
//         $nav.data('size','small').animate({right: '1px'}, 10);
//         $nav.data('size','small').animate({top: '20px'}, 10);
//         $nav.data('size','small').text('UXD/IxD, IA, NYC');
//
//
//     }
//
// } else {
//     if ($nav.data('size') == 'small') {
//         // $nav.data('size','big').animate({fontSize : '14px'}, 40);
//         $nav.data('size','big').animate({top: '80px'}, 10);
//         $nav.data('size','big').animate({width: '100%'}, 20);
//         $nav.data('size','big').animate({left: '1px'}, 20);
//         $nav.data('size','big').animate({right: 'auto'}, 20);
//         $nav.data('size','big').text('User Experience/Interaction Designer, Information Architect. NYC');
//
//     }
// }
