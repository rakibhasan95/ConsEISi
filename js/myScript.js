// Back to top
$('.backToTop').tottTop({
    scrollTop: 100
});


// nivo slider
$(window).on('load', function() {
    $('#slider').nivoSlider(); 
}); 

$('#slider').nivoSlider({
        // effect: 'fade',
    effect: 'random',
    slices: 15,
    boxCols: 8,
    boxRows: 4,
    animSpeed: 500,
    pauseTime: 5000,
    prevText: 'p<br/>r<br/>e<br/>v', 
    nextText: 'n<br/>e<br/>x<br/>t',
    startSlide: 0,
    directionNav: true,
    controlNav: true,
    controlNavThumbs: false,
    pauseOnHover: true,
    manualAdvance: false
});


// sticky area
window.onscroll = function() {myFunction()};
var sticky_area = document.getElementById("sticky_area");
var sticky = sticky_area.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    sticky_area.classList.add("sticky")
  } else {
    sticky_area.classList.remove("sticky");
  }
}


// service slider
    $('.service-slider').slick({
        arrows: false,
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 3,
        responsive: [
            { breakpoint: 991, settings: { slidesToShow: 3, slidesToScroll: 2 }}, 
            { breakpoint: 767, settings: { slidesToShow: 2, slidesToScroll: 1 }}, 
            { breakpoint: 479, settings: { slidesToShow: 1, slidesToScroll: 1 }}  
        ]
    });
    // agents slider
    $('.agent-slider').slick({
        arrows: false,
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 3,
        responsive: [
            { breakpoint: 991, settings: { slidesToShow: 3, slidesToScroll: 2 }}, 
            { breakpoint: 767, settings: { slidesToShow: 1, slidesToScroll: 1 }}, 
            { breakpoint: 479, settings: { slidesToShow: 1, slidesToScroll: 1 }}  
        ]
    });
    // client slider
    $('.client-slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    // from blog
    $('.blog-slider').slick({
        arrows: false,
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            { breakpoint: 991, settings: { slidesToShow: 2, slidesToScroll: 1 }}, 
            { breakpoint: 767, settings: { slidesToShow: 1, slidesToScroll: 1 }}, 
            { breakpoint: 479, settings: { slidesToShow: 1, slidesToScroll: 1 }}  
        ]
    }); 
    // brand slider
    $('.brand-slider').slick({
        arrows: false,
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 4,
        responsive: [
            { breakpoint: 1169, settings: { slidesToShow: 4, slidesToScroll: 3 }},
            { breakpoint: 991, settings: { slidesToShow: 3, slidesToScroll: 2 }}, 
            { breakpoint: 767, settings: { slidesToShow: 2, slidesToScroll: 1 }}, 
            { breakpoint: 479, settings: { slidesToShow: 1, slidesToScroll: 1 }}  
        ]
    });

    // meanmenu sectio js
    jQuery(document).ready(function () {
        jQuery('#dropdown').meanmenu();
    });
  