function crossme() {
	const x = document.querySelector(".hamburger");
  x.classList.toggle("change");
  console.log(x);
  const y = document.querySelector(".hiddenCircle");
  y.classList.toggle("change2");
  console.log(y);
}

/*$(document).ready(function(){

 var controller = new ScrollMagic.Controller();

		// define movement of panels
		var wipeAnimation = new TimelineMax()
			
			.fromTo("div.row.col-7.rightbox",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
			

		// create scene to pin and link animation
		new ScrollMagic.Scene({
				triggerElement: "#chkpoint1",
				triggerHook: 0,
				duration: "300%"
			})
			.setPin("#chkpoint1")
			.setTween(wipeAnimation)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);

});*/

$(document).ready(function() {

    	// init
		var controller = new ScrollMagic.Controller();

		// define movement of panels
		var wipeAnimation = new TimelineMax()
		   .fromTo("div.trishul2", .1, {y: "0%"}, {y: "-250%", ease:  Power4.easeOut},"-=0.25")
			.fromTo("div.leftbox", .5, {x: "0%"}, {x: "-100%", ease: Power4.easeOut}) // in from left
		//	.fromTo("div.panel.ii", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}) // in from top

              
		     .fromTo("p.he1",.2,{y:"0%",opacity:1 }, {y: "-100%",opacity:0, ease: Power4.easeOut},"-=0.75")
		     .fromTo("p.he2",.2,{x:"0%",opacity:1 }, {x: "100%",opacity:0, ease: Power4.easeOut},"-=0.75")
		     .fromTo("p.he3",.2,{y:"0%",opacity:1 }, {y: "100%",opacity:0, ease: Power4.easeOut},"-=0.75")

		      .fromTo("p.he4",.2,{y:"-100%",opacity:0 }, {y: "0%",opacity:1, ease: Power4.easeOut})
		     .fromTo("p.he5",.2,{x:"100%",opacity:0 }, {x: "0%",opacity:1, ease: Power4.easeOut})
		     .fromTo("p.he6",.2,{y:"100%",opacity:0 }, {y: "0%",opacity:1, ease: Power4.easeOut})
		     .fromTo("div.heroT1",.3,{opacity:1 }, {opacity:0, ease: Power4.easeOut})


              .fromTo("p.he7",.2,{y:"-100%",opacity:0 }, {y: "0%",opacity:1, ease: Power4.easeOut})
		     .fromTo("p.he8",.2,{x:"100%",opacity:0 }, {x: "0%",opacity:1, ease: Power4.easeOut})
		     .fromTo("p.he9",.2,{y:"100%",opacity:0 }, {y: "0%",opacity:1, ease: Power4.easeOut})
		     .fromTo("div.heroT2",.3,{opacity:1 }, {opacity:0, ease: Power4.easeOut})

		     .fromTo("p.he10",.2,{y:"-100%",opacity:0 }, {y: "0%",opacity:1, ease: Power4.easeOut})
		     .fromTo("p.he11",.2,{x:"100%",opacity:0 }, {x: "0%",opacity:1, ease: Power4.easeOut})
		     .fromTo("p.he12",.2,{y:"100%",opacity:0 }, {y: "0%",opacity:1, ease: Power4.easeOut})
		     .fromTo("div.heroT3",.3,{opacity:1 }, {opacity:0, ease: Power4.easeOut})

		     .fromTo("p.he13",.2,{y:"-100%",opacity:0 }, {y: "0%",opacity:1, ease: Power4.easeOut})
		     .fromTo("p.he14",.2,{x:"100%",opacity:0 }, {x: "0%",opacity:1, ease: Power4.easeOut})
		     .fromTo("p.he15",.2,{y:"100%",opacity:0 }, {y: "0%",opacity:1, ease: Power4.easeOut})
		     .fromTo("div.heroT4",.3,{opacity:1 }, {opacity:0, ease: Power4.easeOut})

		     .fromTo("p.he16",.2,{y:"-100%",opacity:0 }, {y: "0%",opacity:1, ease: Power4.easeOut})
		     .fromTo("p.he17",.2,{x:"100%",opacity:0 }, {x: "0%",opacity:1, ease: Power4.easeOut})
		     .fromTo("p.he18",.2,{y:"100%",opacity:0 }, {y: "0%",opacity:1, ease: Power4.easeOut})
		     .fromTo("div.heroT5",.3,{opacity:1 }, {opacity:0, ease: Power4.easeOut})

		     .fromTo("p.he19",.2,{y:"-100%",opacity:0 }, {y: "0%",opacity:1, ease: Power4.easeOut})
		     .fromTo("p.he20",.2,{x:"100%",opacity:0 }, {x: "0%",opacity:1, ease: Power4.easeOut})
		     .fromTo("p.he21",.2,{y:"100%",opacity:0 }, {y: "0%",opacity:1, ease: Power4.easeOut})
		     .fromTo("div.heroT6",.3,{opacity:1 }, {opacity:0, ease: Power4.easeOut});

        
		// create scene to pin and link animation
		new ScrollMagic.Scene({
				
				triggerHook: 1,
				duration: "3000"
			})
			.setClassToggle(".trishul2", "show")
			.setTween(wipeAnimation)
			//.addIndicators() // add indicators (requires plugin)
			.setPin(".pagebg")
			.addTo(controller);
});


/*const flightpath = {

	curviness : 5,
	autoRotate : false,
	values : [
      {x:0, y:-30},
      {x:0, y:-250},
     
      

	]
}
const flightpath2 = {

	curviness : 2,
	autoRotate : false,
	values : [
      {x:0, y:-30},
      {x:10, y:-20},
      {x:-50, y: 69},
     
      

	]
}*/

/*const tween = new TimelineLite({repeat: -1});
tween.add(
TweenLite.to(".trishul",5,{repeat:-1}, {
bezier : flightpath,
ease : Power1.easeInOut,
repeat : true

}),
TweenLite.to(".trishul2",5, {
bezier : flightpath2,
ease : Power1.easeInOut,
repeat : true

})
);
	// init
		var controller = new ScrollMagic.Controller();

	
		// create scene to pin and link animation
		new ScrollMagic.Scene({
				triggerElement: "#pinContainer2",
				triggerHook: .7,
				duration: "2000"
			})
			.setPin("#pinContainer")
			.setTween(tween)
			//.addIndicators() // add indicators (requires plugin)
			.addTo(controller);*/


const year = new Date().getFullYear();
const fourthOfJuly = new Date((year + 1), 2, 28).getTime();

// countdown
let timer = setInterval(function() {

  // get today's date
  const today = new Date().getTime();

  // get the difference
  const diff = fourthOfJuly - today;

  // math
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // display
  document.getElementById("timer").innerHTML =
    "<div class=\"days\"> \
  <div class=\"numbers\">" + days + "</div>days</div> \
<div class=\"hours\"> \
  <div class=\"numbers\">" + hours + "</div>hours</div> \
<div class=\"minutes\"> \
  <div class=\"numbers\">" + minutes + "</div>minutes</div> \
<div class=\"seconds\"> \
  <div class=\"numbers\">" + seconds + "</div>seconds</div> \
</div>";

}, 1000);