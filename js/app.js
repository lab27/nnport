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

var elementHeight,elementWidth,offset;

//move things
var shuttleMe = function(el, offset, speedFactor, delay){
    elementHeight = el.outerHeight()
    elementWidth = el.outerWidth()
    offset = offset
    duration = 10*speedFactor
    delay = delay
    console.log("my coords: " + elementHeight, elementWidth, offset, duration)

TweenMax.fromTo(el,duration,{x:0-elementWidth-offset,y:0-elementHeight-offset},{x:(sectionHeight*1.73205)+offset, y:sectionHeight+offset, repeat: -1, delay: delay, ease: Power0.easeNone})
}

shuttleMe($(".post"),100,1.1, 0)
shuttleMe($(".vr"),300,1.6, 2)
shuttleMe($(".atfront"),100,1.1, 4)
shuttleMe($(".craft"),300,1.6, 8)



