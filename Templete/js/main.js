let myRondomNumber, mySliderRandom;
let myBoolOption = true;
// check items in local storage
let myColorStorage = localStorage.getItem("color_option");
if (myColorStorage !== null) {
	document.documentElement.style.setProperty("--main-color", myColorStorage);
	document.querySelectorAll(".colors li").forEach((el) => {
		el.classList.remove("active");
		if (el.dataset.color === myColorStorage) {
			el.classList.add("active");
		}
	});
}
/////////////////////////////////////////////////////////////////
// Start Setting Box opened and  closed
let mySetting = document.querySelector(".setting");
mySetting.addEventListener("click", () => {
	document.querySelector(".setting-box").classList.toggle("open-setting");
	document.querySelector(".fa-gear").classList.toggle("fa-spin");
});
// Start Change bgcolor page
let myColors = document.querySelectorAll(".colors li");
myColors.forEach((li) => {
	li.addEventListener("click", (e) => {
		document.documentElement.style.setProperty(
			"--main-color",
			e.target.dataset.color
		);
		localStorage.setItem("color_option", e.target.dataset.color);
		///
		e.target.parentElement.querySelectorAll(".active").forEach((el) => {
			el.classList.remove("active");
		});
		e.target.classList.add("active");
	});
});
// End Change bgcolor page
// start random background

let myRondomOption = document.querySelectorAll(".backgroungRondom span");
myRondomOption.forEach((span) => {
	span.addEventListener("click", (e) => {
		///
		e.target.parentElement.querySelectorAll(".active").forEach((el) => {
			el.classList.remove("active");
		});
		e.target.classList.add("active");
	});
});
// end random background

// get landing page
let myLandingPage = document.querySelector(".landing-page");

// my Array imgs
let myArrayImgs = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

// Start my Slider
let myLocalStorageBg = localStorage.getItem("bg_option");
if (myLocalStorageBg !== null) {
	if (myLocalStorageBg === "true") {
		myBoolOption = true;
	} else {
		myBoolOption = false;
	}
	console.log(myLocalStorageBg);
}
document.querySelectorAll(".backgroungRondom span").forEach((e) => {
	e.classList.remove("active");
});
if (myLocalStorageBg === "true") {
	document.querySelector(".backgroungRondom .yes").classList.add("active");
} else {
	document.querySelector(".backgroungRondom .no").classList.add("active");
}

// Start or Stop slider
document.querySelectorAll(".backgroungRondom span").forEach((e) => {
	e.addEventListener("click", (e) => {
		if (e.target.dataset.background == "yes") {
			myBoolOption = true;
			randomImage();
			localStorage.setItem("bg_option", true);
		} else {
			myBoolOption = false;
			clearInterval(mySliderRandom);
			localStorage.setItem("bg_option", false);
		}
		///
	});
});

// End my Slider

function randomImage() {
	if (myBoolOption) {
		mySliderRandom = setInterval(() => {
			myRondomNumber = Math.floor(Math.random() * myArrayImgs.length);
			myLandingPage.style.backgroundImage = `url("../img/${myArrayImgs[myRondomNumber]}")`;
		}, 1000);
	}
}
randomImage();

// Start Skills Progress
let mySkills = document.querySelector(".skills");
window.onscroll = () => {
	// Skills offset
	let skillsOfsetTop = mySkills.offsetTop;
	// Skills outer height
	let skillsOuterHeight = mySkills.offsetHeight;

	//  window height
	let windowHeight = this.innerHeight;

	// window scrollTop
	let windowTop = this.pageYOffset;
	if (windowTop > skillsOfsetTop + skillsOuterHeight - windowHeight) {
		let mySpanProgress = document.querySelectorAll(".box .progress span");
		mySpanProgress.forEach((span) => {
			span.style.transition = ".5s";
			span.style.width = span.dataset.progress;
			span.style.backgroundColor = "var(--main-color)";
			span.textContent = span.dataset.progress;
		});
	}
};

// Create Pupus window
let myAllImage = document.querySelectorAll(".gallery .image img");
myAllImage.forEach((img) => {
	img.addEventListener("click", () => {
		// Create overLay window
		let overLay = document.createElement("div");
		overLay.className = "overlay-popus";

		// Add overlay to body
		document.body.appendChild(overLay);

		// Create popus window
		let popusWindow = document.createElement("div");
		popusWindow.className = "popus-Window";
		// Creat heading image
		if (img.alt !== null) {
			let myHeading = document.createElement("h3");
			myHeading.className = "title-img";
			myHeading.textContent = img.alt;
			popusWindow.appendChild(myHeading);
		}
		// Create img popus
		let imgPopus = document.createElement("img");
		imgPopus.src = img.src;
		// Append image to div
		popusWindow.appendChild(imgPopus);
		document.body.appendChild(popusWindow);
		// Create close button
		let closePupus = document.createElement("span");
		closePupus.className = "close-popus";
		let textClose = document.createTextNode("X");
		closePupus.appendChild(textClose);
		popusWindow.appendChild(closePupus);
	});
	document.addEventListener("click", (e) => {
		if (e.target.className == "close-popus") {
			e.target.parentNode.remove();
      document.querySelector(".overlay-popus").remove();
		}
	});
});
