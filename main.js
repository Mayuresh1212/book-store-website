// --------------Sticky Navigation-----------

let navbar = $(".navbar");

$(window).scroll(function(){
    // console.log(window.innerHeight);
    // console.log($(".about").offset().top)
    let top = $(".features").offset().top - window.innerHeight;
    if($(window).scrollTop() > top){
        navbar.addClass("sticky");
    }
    else{
        navbar.removeClass("sticky");
    }
});


// ----------------CounterUp-------------
$(".count").counterUp({
    delay: 10,
    time: 1000
});

// ----------------smooth scroll-------------
// All animations will take exactly 500ms
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
})

