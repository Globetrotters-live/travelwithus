

function skuska(){

	TweenMax.from('#logo', 2, { ease: Bounce.easeOut, left: "-100%"});


	TweenMax.from('#logo-holder', 2, {ease: "slow(0.7, 0.7, false)", right: "-100%"});

	TweenMax.from('#logo-holder2', 2, {ease: "slow(0.7, 0.7, false)", right: "-100%", delay: 0.3});

	TweenMax.from('#logo-holder3', 2, {ease: "slow(0.7, 0.7, false)", left: "100%", delay: 0.6});

	TweenMax.from('#logo-holder4', 2, {ease: "slow(0.7, 0.7, false)", right: "-100%", delay: 1.5});

	TweenMax.from('#logo-holder5', 2, {ease: "slow(0.7, 0.7, false)", left: "100%", delay: 1.9});

	TweenMax.from('#logo-holder6', 2, {ease: "slow(0.7, 0.7, false)", opacity: 0,});
}

