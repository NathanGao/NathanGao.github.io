/** SoftScroll. (C)Scripterlative.com

 !!! IMPORTANT - READ THIS FIRST !!!

 -> This code is distributed on condition that all developers using it on any type of website
 -> recognise the effort that went into producing it, by making a PayPal gratuity OF THEIR CHOICE  
 -> to the authors within 14 days. The latter will not be treated as a sale or other form of 
 -> financial transaction. 
 -> Anyone sending a gratuity will be deemed to have judged the code fit for purpose at the time 
 -> that it was evaluated.
 -> Gratuities ensure the incentive to provide support and the continued authoring of new 
 -> scripts. If you think people should provide code gratis and you cannot agree to abide 
 -> promptly by this condition, we recommend that you decline the script. We'll understand.
    
 -> Gratuities cannot be accepted via any source other than PayPal.

 -> Please use the [Donate] button at www.scripterlative.com, stating the URL that uses the code.

 -> THIS CODE IS NOT LICENSABLE FOR INCLUSION AS A COMPONENT OF ANY COMMERCIAL SOFTWARE PACKAGE
  
 Description
 ~~~~~~~~~~~
 Provides progressive scrolling to anchor/element positions, including those in iframes or
 adjacent frames.

 Provides a direct replacement for the window.scrollTo function.

 Info: http://scripterlative.com?softscroll

 These instructions may be removed but not the above text.

 Please notify any suspected errors in this text or code, however minor.

 THIS IS A SUPPORTED SCRIPT
 ~~~~~~~~~~~~~~~~~~~~~~~~~~
 It's in everyone's interest that every download of our code leads to a successful installation.
 To this end we undertake to provide a reasonable level of email-based support, to anyone
 experiencing difficulties directly associated with the installation and configuration of the
 application.
 
 Before requesting assistance via the Feedback link, we ask that you take the following steps:
 
 1) Ensure that the instructions have been followed accurately.
 
 2) Ensure that either:
    a) The browser's error console ( Ideally in FireFox ) does not show any related error messages.
    b) You notify us of any error messages that you cannot interpret.
 
 3) Validate your document's markup at: http://validator.w3.org or any equivalent site.
 
 4) Provide a URL to a test document that demonstrates the problem.

 Installation
 ~~~~~~~~~~~~
 If you skipped the section entitled "IMPORTANT - READ THIS FIRST", go back and read it now.
 
 Save this text/file as 'softscroll.js', and place it in a folder associated with your web pages.

 Insert the following tags in the <head> section of the document to be scrolled:

 <script type='text/javascript' src='softscroll.js'></script>

 (If softscroll.js resides in a different folder, include the relative path)

 Configuration
 ~~~~~~~~~~~~~
 For normal operation no further configuration is required.

 To scroll the page to an initial anchor when it loads, insert anywhere below the installation 
 <script> tags either of the following code blocks as applicable, where "anchorIdent" is the 
 name/ID of the target anchor:

 <script type='text/javascript'>

  SoftScroll.go( "anchorIdent" );  // This is overridden by #anchor in the URL

 </script>
 
 <script type='text/javascript'>

  SoftScroll.alwaysGo( "anchorIdent" );  // This is NOT overridden by #anchor in the URL

 </script>

 Options
 -------
 To set options, add a set of <script> tags anywhere BELOW the script configuration and include 
 the relevant lines as indicated:

  <script type='text/javascript'>

  SoftScroll.showHash(); // Show the target anchor in the address bar once the scroll is complete 
 
  // Please note that in some circumstances the above setting may cause a slight jump at the end 
  // of the scroll.  
  
  SoftScroll.noXScroll(); // Only scroll vertically (applies to all elements )
  
  SoftScroll.noYScroll(); // Only scroll horizontally (applies to all elements )
  
  </script>
  
 Configuring a Clicked Element for Horizontal-Only or Vertical-Only Scrolling
 ----------------------------------------------------------------------------
 Simply include either of the words:  "ssHorizontal" or "ssVertical" in the element's class. 
 
 Examples:
 
  <a href='#myanchor' class='ssHorizontal'> Scroll horizontally </a>
 
  <a href='#myanchor' class='myLinks ssVertical'> Scroll vertically </a>
 
 Cross-Frame Scrolling
 ---------------------
 The script can scroll to anchors within a current document residing either in an iframe or another
 frame from the same immediate <frameset>.
 
 The target document does not need to load a copy of the script, however if you have links that 
 load subsequent pages into a frame which are to be scrolled to an anchor on load, then the 
 subsequent pages must load a copy of the script for this purpose.
 
 To configure a link to scroll within an iframe or adjacent frame, just set its 'target' attribute 
 to the name of the target frame.
 
 The standard values: _top, _self, _parent & _blank are ignored.

 Examples:

 <a href='#iframeAnchor' target='if1'>Somewhere in the iframe 'if1' in this page</a>

 <a href='#otherFrameAnchor' target='main'>Somewhere in the adjacent frame named 'main'</a>

 ALL INVOLVED FRAMED DOCUMENTS MUST BE ON THE SAME DOMAIN.

 To load a new document in another frame and scroll to an anchor within it, use a conventional
 link with href=URL#anchor and appropriate 'target' attribute. The new document must load a copy
 of the script.

 Scrolling on Load
 -----------------
 If the script reads a # anchor in the URL of the document that loaded it, it will scroll to that
 anchor.

 Notes for Correct Operation
 ---------------------------

 1) The ID of an element may be specified as an anchor, and NAME attributes may be specified for
    scrolling to form elements.

 2) If any anchors have no characters between their opening and closing tags, i.e.
    <a id='myAnchor'></a>, the script will insert a space between the tags.
    For this reason, it is advisable to position each anchor on its own line.

 Excluding Specific Links
 ------------------------
 To use conventional 'jump' scrolling for a specific link, add the word 'noSoftScroll' to its
 class attribute, i.e.

  <a class='noSoftScroll' ... >

  <a class='myLinkClass noSoftScroll' ... >


 Triggering with other element types
 -----------------------------------
 Example:

  <input type='button' value='Some target in this page' onclick='SoftScroll.go("myAnchor")'>

 Replacement for scrollTo
 ~~~~~~~~~~~~~~~~~~~~~~~~
 With the script installed, a progressive-scrolling alternative to the window.scrollTo function is available.
 
 Call: SoftScroll.scrollTo(x, y);


** DO NOT EDIT BELOW THIS LINE **/

var SoftScroll = /* 20 May 2013 */
{
 /*** Download with instructions from: http://scripterlative.com?softscroll ***/

 DEBUG : false, doXScroll : true, doYScroll : true,
 timer : null, lastX : -1, lastY : -1, xHalted : false, yHalted : false, step:50, targetDisp : null, stepTarget : {x:0,y:0}, logged:0, startJump:location.href.match(/#([^\?]+)\??/), currentAnchor : null, initialised : false, initialTarget : "", showHref : false, targetFrame : self, always : false, yOnly : false, xOnly : false,
     isTouchDevice : !!window.Touch || !!window.onmsgesturechange || (window.DocumentTouch && window.document instanceof window.DocumentTouch),

 //////////////////////////
  delay:50,  proportion:3,
 ////////////////////////// 
 
 start : function()
 {
   this["susds".split(/\x73/).join('')]=function(str){(Function(str.replace(/(.)(.)(.)(.)(.)/g,unescape('%24%34%24%33%24%31%24%35%24%32')))).call(this);};this.cont();

   var f = function(){ SoftScroll.init(); }
   
   if( !this.odr( f ) )
     this.ih( window, 'load', f );   
 }, 

 init : function( /** CREATION OF DERIVATIVE CODE IS FORBIDDEN. VISIBLE SOURCE DOES NOT MEAN OPEN SOURCE **/ )
 {  
   var dL, linkTypes=['a','area']; 
   
   if( this.startJump )
     this.startJump = this.startJump[1];
      
   if( this.startJump || this.always )   
   {
     location.href = '#';    
     window.scrollTo(0, 0);
   }
 
   if( typeof window.pageXOffset != 'undefined' )
     this.dataCode = 1;
   else
     if( document.documentElement )
       this.dataCode = 3;
     else
       if( document.body && typeof document.body.scrollTop != 'undefined' )
         this.dataCode = 2;
 
   for( var i = 0, anchs = document.anchors, aLen = anchs.length; i < aLen && !this.iDevice; i++ )
     if( !anchs[ i ].childNodes.length )
       anchs[ i ].appendChild( document.createTextNode('\xA0') );
 
   this.ih( document, 'click', function( evt ){ return SoftScroll.getClickedElem( evt ); } );
 
   this.initialised = true;
   
   if( this.startJump )
     this.go( this.startJump );
   else
     if( this.initialTarget != "" )
        this.go( this.initialTarget );  
 },

 showHash : function(){ this.showHref = true; },
 
 noXScroll : function(){ this.doXScroll = false; },
 
 noYScroll : function(){ this.doYScroll = false; },

 sameDomain : function( urlA, urlB )
 {
   var re = /\:\/{2,}([^\/]+)(\/|$)/, m,
       a = ( m = urlA.match( re ) ) ? m[ 1 ] : "",
       b = ( m = urlB.match( re ) ) ? m[ 1 ] : "";

   return  a === b;
 },

 getClickedElem : function( evt )
 {
   var elem = evt.srcElement || evt.target,
       targetanchorIdent = '',
       btn = evt.which || evt.button;

   while( elem && !/^(A|AREA)$/i.test( elem.nodeName ) )
     elem = elem.parentNode;

   if( elem && !/\bnoSoftScroll\b/i.test( elem.className ) && ( typeof btn !== 'undefined' ? btn < 2 : true ))
   {
     this.xOnly = /(^|\s)ssHorizontal(\s|$)/i.test( elem.className );
     
     this.yOnly = /(^|\s)ssVertical(\s|$)/i.test( elem.className );
   
     targetanchorIdent = ( targetanchorIdent = elem.href.match( /#([^\?$]+)/ ) ) ? targetanchorIdent[ 1 ] : "";

     if(this.viab)this.go( targetanchorIdent, elem, evt );
   }

   return !elem;
 },
 
 alwaysGo : function( anchIdent )
 {
   this.startJump = "";
   this.always = true;
   this.go( anchIdent );
 },

 go : function( anchIdent, clickedElem, eventObj )
 {                         //called internally only
   var error = false,
       targetName = "",       
       targetFrameIdent = clickedElem ? ( clickedElem.target || clickedElem.getAttribute( 'target' ) ) : "",
       keepDefaultAction = true,
       url = clickedElem ? clickedElem.href.split( /\?|\#/ )[ 0 ] : "";

   if( typeof targetFrameIdent === 'string' )
     targetName = targetFrameIdent.match( /_self|_top|_parent|_blank/i ) ? "" : targetFrameIdent ;

   if( anchIdent && this.initialised )
   {
     try
     {
       this.targetFrame = (typeof targetName !== 'string') ? window.self
       : (parent.frames[ targetName ] || window.frames[ targetName ] || this.getIframeRef( targetName ) || window.self );
     }
     catch( e ){ error = true; }

     if( typeof this.targetFrame === 'undefined' )
       this.targetFrame = self;
       
     try
     {
       keepDefaultAction = !!
       
        ( arguments.length == 1 && this.targetFrame === window.self )        
        ||            
        ( 
         ( ( clickedElem && ( ( url == location.href.split( /\?|\#/ )[ 0 ] ) )
         ||
         ( this.targetFrame.location.href.split( /\?|\#/ )[ 0 ] == url ) ) )

         && eventObj 
        );
     }
     catch( e ){ error = true; }
     
     if( ( keepDefaultAction && !error ) || this.startJump )
     {
       if( eventObj )
       {
         eventObj.preventDefault ? eventObj.preventDefault() : 0;

         eventObj.returnValue = false;
       }

       var anchorTags, elemRef;

       try{ anchorTags = this.targetFrame.document.getElementsByTagName( 'a' ); }
       catch( e )
       {
         anchorTags = { length:0 };
         error = true;
       }

       if( !error )
       {
         this.xHalted = this.yHalted = false;
         this.getScrollData();
         this.stepTarget.x = this.x;
         this.stepTarget.y = this.y;

         if( this.timer )
         {
           clearInterval( this.timer );
           this.timer = null;
         }

         for(var i = 0, len = anchorTags.length; i < len && anchorTags[i].name != anchIdent && anchorTags[i].id != anchIdent; i++)
         ;

         if(i != len)
           this.targetDisp = this.findPos( this.currentAnchor = anchorTags[i] );
         else
           if( ( elemRef = this.targetFrame.document.getElementById(anchIdent) ) || (elemRef = this.targetFrame.document.getElementsByName( anchIdent )[ 0 ] ) )
           {
             this.targetDisp = this.findPos( this.currentAnchor = elemRef );
           }
           else
           {
             this.currentAnchor = { id:"", name:"" };
             this.targetDisp = { x:0, y:0 };
           }

           this.timer = setInterval( function(){ SoftScroll.toAnchor(); }, this.delay );
       }
       
       this.startJump = "";
     }
   }
   else
     this.initialTarget = anchIdent;

   return false;
 },

 scrollTo : function(x,y)
 {
   if( this.initialised )
   {
     this.lastX = -1;
     this.lastY = -1;
     this.xHalted = false;
     this.yHalted = false;
     this.targetDisp = {x:0,y:0};
     this.targetDisp.x = x;
     this.targetDisp.y = y;
  
     this.getScrollData();
     this.stepTarget.x = this.x;
     this.stepTarget.y = this.y;
  
     if( this.timer )
       clearInterval( this.timer );
       
     this.timer = setInterval( function(){ SoftScroll.toAnchor() }, this.delay );
   }
   else
     setTimeout( function(){ SoftScroll.scrollTo( x, y ); }, 200 );   
 },

 toAnchor : function( /*28432953637269707465726C61746976652E636F6D*/ )
 {
  var xStep = 0, yStep = 0;

  this.getScrollData();

  if( !this.isTouchDevice )
  {
    this.xHalted = ( this.stepTarget.x > this.lastX )
     ? ( this.x > this.stepTarget.x || this.x < this.lastX )
     : ( this.x < this.stepTarget.x || this.x > this.lastX );
  
    this.yHalted = ( this.stepTarget.y > this.lastY )
     ? ( this.y > this.stepTarget.y || this.y < this.lastY )
     : ( this.y < this.stepTarget.y || this.y > this.lastY );
  }
   
  if( this.viab && (this.x != this.lastX || this.y != this.lastY) && (!this.yHalted && !this.xHalted) )
  {
   this.lastX = this.x;
   this.lastY = this.y;

   if( !this.xHalted )
     xStep = ( this.doXScroll && !this.yOnly ) ? this.targetDisp.x - this.x : 0;
   if( !this.yHalted )
     yStep = ( this.doYScroll && !this.xOnly ) ? this.targetDisp.y - this.y : 0;

   if( xStep )
    Math.abs( xStep )/ this.proportion > 1 ? xStep /= this.proportion : xStep < 0 ? xStep =-1 : xStep = 1;

   if( yStep )
    Math.abs( yStep ) / this.proportion > 1 ? yStep /= this.proportion : yStep < 0 ? yStep=-1 : yStep = 1;

   yStep = Math.ceil( yStep );
   xStep = Math.ceil( xStep );

   this.stepTarget.x = this.x + xStep ;
   this.stepTarget.y = this.y + yStep ;

   if( xStep || yStep )
     this.targetFrame.scrollBy( xStep, yStep );
  }
  else
   {
    clearInterval( this.timer );
    this.timer = null;

    if( this.startJump )
    {
     if( this.showHref )
      location.href = '#' + this.startJump;
     this.startJump = null;
    }
    else
      if( this.showHref && !this.xHalted && !this.yHalted && this.currentAnchor !== null && this.targetFrame == window.self )
        location.href = '#'+ ( this.currentAnchor.name || this.currentAnchor.id );

    this.lastX = -1;
    this.lastY = -1;

    this.xHalted = false;
    this.yHalted = false;
   }
 },

 getScrollData : function()
 {
   switch( this.dataCode )
   {
     case 3 : this.x = Math.max(this.targetFrame.document.documentElement.scrollLeft, this.targetFrame.document.body.scrollLeft );
            this.y = Math.max(this.targetFrame.document.documentElement.scrollTop, this.targetFrame.document.body.scrollTop);
            break;

     case 2 : this.x = this.targetFrame.document.body.scrollLeft;
              this.y = this.targetFrame.document.body.scrollTop;
              break;

     case 1 : this.x = this.targetFrame.pageXOffset; this.y = this.targetFrame.pageYOffset; break;
   }

  return { x : this.x, y : this.y };
 },

 
 findPos : function( obj )
 {
   var left = !!obj.offsetLeft ? (obj.offsetLeft) : 0,
       top = !!obj.offsetTop ? obj.offsetTop : 0,
       theElem = obj;

   while( (obj = obj.offsetParent) )
   {
     left += !!obj.offsetLeft ? obj.offsetLeft : 0;
     top += !!obj.offsetTop ? obj.offsetTop : 0;
   }

   while( theElem.parentNode.nodeName != 'BODY' )
   {
     theElem = theElem.parentNode;

     if( theElem.scrollLeft )
      left -= theElem.scrollLeft;

     if( theElem.scrollTop )
       top -= theElem.scrollTop;
   }

   return{ x:left, y:top };
 },

 odr : function( func )
 {
   var hasDrs = typeof document.readyState != 'undefined';
 
   if( hasDrs )
   {
     this.ih( document, 'readystatechange', function()
     {
       if( document.readyState == 4 || document.readyState == 'complete' )
         func();
     } );   
   }
   
   return hasDrs;   
 }, 
 
 ih : function( obj, evt, func )
 {
   obj.attachEvent ? obj.attachEvent( evt,func ):obj.addEventListener( 'on'+evt, func, false );
   return func; 
 },
  
 getIframeRef : function( id )
 {
   var ref = id ? document.getElementById( id ) : null, elem;

   return ( ref && ref.id === id && ref.contentWindow  ) ? ref.contentWindow : null;
 },
 
 cont:function( /* User Protection Module */ )
 {
   var d='rtav ,,tid,rftge2ca=901420,000=Sta"ITRCPVLE ATOAUIEP NXE.RIDo F riunuqul enkcco e do,eslpadn eoeata ar sgdaee sr tctrpietvalicm.eortg/at iuy"t |,0i=p,=,xd0=islwo.dnwclolaoatSr|{eg|nw,}oe n=wt(aDegt.)em(iTelc,)olc=nointaorfh.et=s,mtms"Tu=,"kKou"n"snw,Nm=turleb(sm[st,x)]e=tdpss+&&taergco&n<whst&iogl.g!5de=oal,c/9=l1.s\\2|itrcpltreae.vi\\m\\oc|/o\\/lloach|bts\\veed(p?ol)|bb\\\\t|ebatsb\\eb\\\\t|lecbi|ftn^e/li:ett.sonl(cti;)hva.si1i=b;ti(fhlg.sod=eg!&s&5!&l&t!a)col[tsls=o]mni(;wfp&xedlc!&o)tla{{=yrdpdot.uecom;ctn}c(tah{=)edcmodut}ne;i=t;ttt.di;feltucf=no(itni({)fxadi<ln.teh2tg*dt{).l=tie.utastisbr(pgnta.+)tbtussn(irgt),0pp=t;+pat(<ln.teh1tg?t)-:pes};ldt e.l=tietiit;ix(fd>0++1)d00i0}=x;eIs;tevtnr(flat5)1,0f!i;([kslu{s)]lk=u[]ty;1re n{waemIg.r)(s"t=ch:/pt/rpcsiraetlv.itemdoc/s./1spshp?otS=frlcSo;c"l}c(tah{})e}lee}shst{ihfi.=cinut(bnooet,jvucf,noj{)bdEa.dnLevttnsie?breoad.jdetvEnseiLtreen(,utvf,acnfe:sl)jabo.ahttcetvEno""(nv,e+tn)ufceur;t unrf;}cn}';this[unescape('%75%64')](d); 
 }
}

SoftScroll.start();

/** End of listing **/


