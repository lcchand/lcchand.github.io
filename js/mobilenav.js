// mobilenav.js - add functionality to Hamburger element on Mobile devices


const mobileNav = document.getElementById("mobilenav");

const mainNav = document.getElementById("main-nav");
const mainNavUl = document.querySelector('ul');
//const mainNavLinks = mainNavUl.children;


function menuToggle() {
    //console.log('click');
    mobileNav.classList.toggle('mobile_nav--open');
    // If it has a positive value
    // It is currently Open, set to null or 0 to close
    if (mainNav.style.maxHeight) {
	mainNav.style.maxHeight = null;
    } else {
	// Calculate the maxHeight of Nav contents
	// assign it to style which will display Nav as drop down menu
	mainNav.style.maxHeight = mainNav.scrollHeight + "px";
	//mainNav.style.width = "calc(100vw)";
    }

};



// Capture Click Event on Hamburger
mobileNav.addEventListener('click', menuToggle);


// Capture Click Event on Mobile Menu & close after selection
mainNavUl.addEventListener('click', menuToggle);

// Capture keydown Event on Mobile Menu & close after selection
mainNavUl.addEventListener('keydown', menuToggle);
