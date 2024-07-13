window.onload = () => {
	/*typing effect initiation*/
	var typed = new Typed(".input", {
		strings: ["Ricky Wijaya", "Learner", "Gamer", "Human"],
		typeSpeed: 70,
		backSpeed: 60,
		loop: true
	});

	/*nav bar open*/
	let hamburger = document.querySelector(".hamb");
	let navList = document.querySelector(".nav-list");

	hamburger.onclick = () => {
		hamburger.classList.toggle("bx-x");
		navList.classList.toggle("open");
	};

	window.onscroll = () => {
		hamburger.classList.remove("bx-x");
		navList.classList.remove("open");
	};
};

