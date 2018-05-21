
// Custom - Greensock Animation
function _customAd(){

	// Variables
	var loopsMax = 1;
	var loopsCount = 0;

	// TimelineLite instance
	var tl = new TimelineLite();

	tl.add("screen0", 0.1);
	tl.add("screen1", 0.5);
	tl.add("screen2", 3);
	tl.add("screen3", 4);
	tl.add("screen4", 7);
	tl.add("screen5", 8);
	tl.add("screen5", 8);

	// Custom Build
	// Intro animations
	tl.to("#ad", 0.1, {visibility:"visible"}, "screen0")
  tl.from("#frame-1-headline-1", 1, {autoAlpha:"0"}, "screen1")
		.to("#frame-1-headline-1", 1, {autoAlpha:"0"}, "screen2")
  	.from("#frame-1-headline-2", 1, {autoAlpha:"0"}, "screen3")
		.to("#frame-1-headline-2", 1, {autoAlpha:"0"}, "screen4")
		.to('#frame-2-text', 2, {autoAlpha:"1"}, "screen5")
		.to("#clickthrough-button", 0.5, {autoAlpha:"1"}, "screen6");
}
