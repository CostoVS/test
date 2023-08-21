
 // toggle 
$(document).ready(function(){
    
    $('.search-toggle').click(function(){
        $('.search-wrapper').toggleClass('show');
    });

    $('.modal-toggle').click(function(){
        $('.modalBox').toggleClass('show');
    })

    $('.modalBox').click(function(){
        $(this).removeClass('show');
    });

    $('.spinner').click(function(){
        $(".theme-selector").toggleClass('show');
    });
    $('.light').click(function(){
        $('body').addClass('light-theme');
        $('body').removeClass('dark-theme');
    });
    $('.dark').click(function(){
        $('body').toggleClass('dark-theme');
        $('body').removeClass('light-theme');
    });
});



// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
}); 


var masterTl = new TimelineMax();
var animationDuration = 3;

function startAnimation() {
  masterTl.clear(); // Clear any previous animations
  masterTl.fromTo("#body, #speed3, #speed2, #speed1, #tire-2, #tire", animationDuration, { x: -100 }, { ease: Power0.easeNone, x: window.innerWidth, onComplete: restartAnimation });
}

function restartAnimation() {
  masterTl.restart(); // Restart the master timeline
}

// Start the animation loop
startAnimation();



    // Blup
    const container = document.querySelector('[animateText]')
    const words = container.querySelectorAll('span')
    const elements = document.createElement('div')
    
    // Blap
    const createSpanElem = (word, key) => {
        let elem = document.createElement('span')
        word.className = 'animation-span animation-delay-' + key
    }
    
    // Loop
    words.forEach(createSpanElem)
    
    
