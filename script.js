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


