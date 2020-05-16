	

	// let header = document.querySelector(".hlavicka");

	// let logo = document.querySelector("#logo");

	// let tl = new TimelineMax();


	// tl.fromTo(header, 2, { height: "0px" }, { height: "500px" , ease: Power2.easeInOut });

function skuska(){

	TweenMax.from('#logo', 2, { ease: Bounce.easeOut, left: "-100%"});


	TweenMax.from('#logo-holder', 2, {ease: "slow(0.7, 0.7, false)", right: "-100%"});

	TweenMax.from('#logo-holder2', 2, {ease: "slow(0.7, 0.7, false)", right: "-100%"});

	TweenMax.from('#logo-holder3', 2, {ease: "slow(0.7, 0.7, false)", left: "100%"});

	TweenMax.from('#logo-holder4', 2, {ease: "slow(0.7, 0.7, false)", right: "-100%"});

	TweenMax.from('#logo-holder5', 2, {ease: "slow(0.7, 0.7, false)", left: "100%"});

	TweenMax.from('#logo-holder6', 2, {ease: Slow.easeOut, opacity: 0});
}

