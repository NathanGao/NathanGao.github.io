<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <title>Single Page Site with Smooth Scrolling and Fixed Navigation</title>
    
    <meta name="description" content="In this lab, I'm going to demonstrate how to create a fixed navigation, single page site with smooth scrolling, and highlighting the navigation link depending on which section is currently being viewed. This technique is great for single page sites that want to pack in lots of goodies on one page, but use a navigation with cool scrolling to section it off." />
    
    <link href='http://fonts.googleapis.com/css?family=Quattrocento:400,700' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="css/base.css" />
    <link rel="stylesheet" href="css/style.css" />
    
    
    <script src="js/jquery-1.9.1.min.js"></script>
    <script src='js/jquery.scrollto.js'></script>
    
</head>



<body>


<div id="wrapper">


<header>
    <div class="container clearfix">
        <div id="logo">
            <a href="http://callmenick.com"><img src="img/logo.png" /></a>
        </div>
        <div id="title">
            <h1>Single Page Site with Smooth Scrolling and Fixed Navigation</h1>
            <span><a href="http://www.callmenick.com/labs/single-page-site-with-smooth-scrolling-highlighted-link-and-fixed-navigation">&larr; Back to the tutorial</a></span>
        </div>
    </div>
</header>



<div id="main">
    <div class="container clearfix">
        
        
        <div id="sidebar">
            <div id="nav-anchor"></div>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div><!-- /sidebar -->
        
        
        <div id="content">
            
            
        
            <section id="home">
                <h1>Home</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                    volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
                    molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero
                    eros et accumsan et iusto odio dignissim qui blandit praesent luptatum
                    zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber
                    tempor cum soluta nobis eleifend option congue nihil imperdiet doming id
                    quod mazim placerat facer possim assum.
                </p>
            
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                    volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
                    molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero
                    eros et accumsan et iusto odio dignissim qui blandit praesent luptatum
                    zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber
                    tempor cum soluta nobis eleifend option congue nihil imperdiet doming id
                    quod mazim placerat facer possim assum.
                </p>
            </section>
        
        
            <section id="about">
                <h1>About</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                    volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
                    molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero
                    eros et accumsan et iusto odio dignissim qui blandit praesent luptatum
                    zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber
                    tempor cum soluta nobis eleifend option congue nihil imperdiet doming id
                    quod mazim placerat facer possim assum.
                </p>
            
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                    volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
                    molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero
                    eros et accumsan et iusto odio dignissim qui blandit praesent luptatum
                    zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber
                    tempor cum soluta nobis eleifend option congue nihil imperdiet doming id
                    quod mazim placerat facer possim assum.
                </p>
            </section>
        
        
            <section id="services">
                <h1>Services</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                    volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
                    molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero
                    eros et accumsan et iusto odio dignissim qui blandit praesent luptatum
                    zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber
                    tempor cum soluta nobis eleifend option congue nihil imperdiet doming id
                    quod mazim placerat facer possim assum.
                </p>
            
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                    volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
                    molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero
                    eros et accumsan et iusto odio dignissim qui blandit praesent luptatum
                    zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber
                    tempor cum soluta nobis eleifend option congue nihil imperdiet doming id
                    quod mazim placerat facer possim assum.
                </p>
            </section>
        
        
            <section id="blog">
                <h1>Blog</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                    volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
                    molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero
                    eros et accumsan et iusto odio dignissim qui blandit praesent luptatum
                    zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber
                    tempor cum soluta nobis eleifend option congue nihil imperdiet doming id
                    quod mazim placerat facer possim assum.
                </p>
            
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                    volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
                    molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero
                    eros et accumsan et iusto odio dignissim qui blandit praesent luptatum
                    zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber
                    tempor cum soluta nobis eleifend option congue nihil imperdiet doming id
                    quod mazim placerat facer possim assum.
                </p>
            </section>
        
        
            <section id="contact">
                <h1>Contact</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                    volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
                    molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero
                    eros et accumsan et iusto odio dignissim qui blandit praesent luptatum
                    zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber
                    tempor cum soluta nobis eleifend option congue nihil imperdiet doming id
                    quod mazim placerat facer possim assum.
                </p>
            
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                    nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                    volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
                    molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero
                    eros et accumsan et iusto odio dignissim qui blandit praesent luptatum
                    zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber
                    tempor cum soluta nobis eleifend option congue nihil imperdiet doming id
                    quod mazim placerat facer possim assum.
                </p>
            </section>
        
        </div><!-- /#content -->
        
    </div>
</div>


<footer>
    <div class="container">
        <a href="http://www.callmenick.com/labs/single-page-site-with-smooth-scrolling-highlighted-link-and-fixed-navigation">&larr; Back to the tutorial</a>
    </div>
</footer>



</div>






<script>
    

        
    $(document).ready(function(){
        
        /** 
         * This part does the "fixed navigation after scroll" functionality
         * We use the jQuery function scroll() to recalculate our variables as the 
         * page is scrolled/
         */
        $(window).scroll(function(){
            var window_top = $(window).scrollTop() + 12; // the "12" should equal the margin-top value for nav.stick
            var div_top = $('#nav-anchor').offset().top;
                if (window_top > div_top) {
                    $('nav').addClass('stick');
                } else {
                    $('nav').removeClass('stick');
                }
        });
        
        
        /**
         * This part causes smooth scrolling using scrollto.js
         * We target all a tags inside the nav, and apply the scrollto.js to it.
         */
        $("nav a").click(function(evn){
            evn.preventDefault();
            $('html,body').scrollTo(this.hash, this.hash); 
        });
        
        
        
        /**
         * This part handles the highlighting functionality.
         * We use the scroll functionality again, some array creation and 
         * manipulation, class adding and class removing, and conditional testing
         */
        var aChildren = $("nav li").children(); // find the a children of the list items
        var aArray = []; // create the empty aArray
        for (var i=0; i < aChildren.length; i++) {    
            var aChild = aChildren[i];
            var ahref = $(aChild).attr('href');
            aArray.push(ahref);
        } // this for loop fills the aArray with attribute href values
        
        $(window).scroll(function(){
            var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
            var windowHeight = $(window).height(); // get the height of the window
            var docHeight = $(document).height();
            
            for (var i=0; i < aArray.length; i++) {
                var theID = aArray[i];
                var divPos = $(theID).offset().top; // get the offset of the div from the top of page
                var divHeight = $(theID).height(); // get the height of the div in question
                if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
                    $("a[href='" + theID + "']").addClass("nav-active");
                } else {
                    $("a[href='" + theID + "']").removeClass("nav-active");
                }
            }
            
            if(windowPos + windowHeight == docHeight) {
                if (!$("nav li:last-child a").hasClass("nav-active")) {
                    var navActiveCurrent = $(".nav-active").attr("href");
                    $("a[href='" + navActiveCurrent + "']").removeClass("nav-active");
                    $("nav li:last-child a").addClass("nav-active");
                }
            }
        });
    });

</script>




</body>
</html>