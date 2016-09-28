//Init fullpage
$(document).ready(function() {
    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        //anchors:['intro', 'design','code','beauty'],
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide'],
        showActiveTooltip: false,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: false,
        verticalCentered: true,
        //sectionsColor : ['red', 'yellow','lime','blue'],
        // paddingTop: '3em',
        // paddingBottom: '10px',
        //fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: false,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });
});

//Get screen width and section height
var screenWidth = $(window).width()
var sectionHeight = $(".section").outerHeight()

//renew on resize
$( window ).resize(function() {
  var screenWidth = $(window).width()
var sectionHeight = $(".section").outerHeight()
});

console.log("screenwidth: " + screenWidth + ", " + "sectionHeight: " + sectionHeight)

var goRight = toString("+="+20)
var goDown = toString("+="+Math.sqrt(30))

//move phone1
TweenMax.fromTo($(".post"),5,{x:0,y:0},{x:sectionHeight*1.732, y:sectionHeight, repeat: -1, ease: Power0.easeNone})
//TweenMax.fromTo($("img.post"), 4, {x:"+=10"}, {x: "+=20", repeat: -1});




