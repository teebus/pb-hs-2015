$(document).ready(function(){

     $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
       'scrollTop': $target.offset().top
  }, 900, 'swing', function () {
       window.location.hash = target;
  });
 });



     $(window).bind('scroll', function() {
       var navHeight = $( window ).height() - 70;
       if ($(window).scrollTop() > navHeight) {
         $('nav').addClass('fixed');
    }
    else {
         $('nav').removeClass('fixed');
    }
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
              $("a[href='" + theID + "']").addClass("active");
         } else {
              $("a[href='" + theID + "']").removeClass("active");
         }
    }

    if(windowPos + windowHeight == docHeight) {
        if (!$("nav li:last-child a").hasClass("active")) {
         var navActiveCurrent = $(".active").attr("href");
         $("a[href='" + navActiveCurrent + "']").removeClass("active");
         $("nav li:last-child a").addClass("active");
    }
}
});



var mainTitle = new TimelineMax()
.to('#logo', 3, {autoAlpha:1, delay:1})
.from('#logo', 2, {ease: Circ.easeOut, y: -100,},"-=3")
.to('#title', 2, {opacity:1}, "-=2.0")
.from('#title', 2, {ease: Circ.easeOut, y: 100,},"-=2")
.to ('#scroll', 2, {opacity:1}, "-=2");


var arrow = new TimelineMax({repeat:5, repeatDelay:3, yoyo:true})
.to ('#scroll', 0.2, {y:-10})
.to ('#scroll', 0.2, {y:0})
.to ('#scroll', 0.2, {y:-10})
.to ('#scroll', 0.2, {y:0});



var pandora = new TimelineMax()

.to('#colour-explosion-pandora', 2, {opacity:1, ease: Back.easeIn.config(1), y: 0})
.to('#pandora-text', 1, {opacity:1, ease:Strong.easeIn}, "=-1")
.from('#pandora-text', 1, {left:"100px"}, "=-1")
.to('section#pandora .shop-button', 2, {opacity:1}, "=+0.5");


var scene = new ScrollMagic.Scene({triggerElement: '#trigger1'})
.setTween(pandora)
.addTo(controller);


var hattie = new TimelineMax()

.to('#colour-explosion-hattie', 2, {opacity:1, ease: Back.easeIn.config(1), y: 0})
.to('#hattie-text', 1, {opacity:1, ease:Strong.easeIn}, "=-1")
.from('#hattie-text', 1, {right:"200px"}, "=-1")
.to('section#hattie .shop-button', 2, {opacity:1}, "=+0.5");

var scene = new ScrollMagic.Scene({triggerElement: '#trigger2', offset: 0})
.setTween(hattie)
.addTo(controller);


var bailey = new TimelineMax()

.to('#colour-explosion-bailey', 2, {opacity:1, ease: Back.easeIn.config(1), y: 0})
.to('#bailey-text', 1, {opacity:1, ease:Strong.easeIn}, "=-1")
.from('#bailey-text', 1, {left:"200px"}, "=-1")
.to('section#bailey .shop-button', 2, {opacity:1}, "=+0.5");


var scene = new ScrollMagic.Scene({triggerElement: '#trigger3'})
.setTween(bailey)
.addTo(controller);



var molly = new TimelineMax()

.to('#colour-explosion-molly', 2, {opacity:1, ease: Back.easeIn.config(1), y: 0})
.to('#molly-text', 1, {opacity:1, ease:Strong.easeIn}, "=-1")
.from('#molly-text', 1, {right:"200px"}, "=-1")
.to('section#molly .shop-button', 2, {opacity:1}, "=+0.5");


var scene = new ScrollMagic.Scene({triggerElement: '#trigger4'})
.setTween(molly)
.addTo(controller);

var lilly = new TimelineMax()

.to('#colour-explosion-lilly', 2, {opacity:1, ease: Back.easeIn.config(1), y: 0})
.to('#lilly-text', 1, {opacity:1, ease:Strong.easeIn}, "=-1")
.from('#lilly-text', 1, {left:"200px"}, "=-1")
.to('section#lilly .shop-button', 2, {opacity:1}, "=+0.5");


var scene = new ScrollMagic.Scene({triggerElement: '#trigger5'})
.setTween(lilly)
.addTo(controller);



// https://developers.google.com/youtube/iframe_api_reference

// global variable for the player
var player;

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
  // create the global player from the specific iframe (#video)
  player = new YT.Player('ytplayer', {
    events: {
      // call this function when player is ready to use
      'onReady': onPlayerReady
    }
  });
}


      $(window).scroll(function() {
        function onPlayerReady() {
        $("iframe").each( function() {
            if( $(window).scrollTop() > $(this).offset().top - 200 ) {
                player.playVideo();
            } else {
                player.stopVideo();
            }
        }); 
            }
    });





});