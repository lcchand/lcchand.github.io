/* Select DOM Elements to manipulate with IntersectOberver API */
const header = document.querySelector("header");
const navElement = document.querySelector("nav");
const sectionIntro = document.querySelector(".section--intro");
const sectionFaders = document.querySelectorAll(".fade-in");
const allSections = document.querySelectorAll(".section");
// Hamburger/Mobile Nav is hidden
const viewPortWidth = window.matchMedia("(min-width:1024px)");



/* Observer: sectionIntroObserver -------------------------------*/

// Header with Nav-Bar - Transparent to Theme Color - Vice Versa
const sectionIntroOptions = {
    //root: null, // it is the viewport
    //threshold: 0, // How much of Object is visible 0 = part, 1 = all of it
    rootMargin: "-50%" // within 50% from top of section--intro   
};

const sectionIntroObserver = new IntersectionObserver(function(entries, sectionIntroObserver) {
    entries.forEach(entry => {
	//console.log(entry.target);
	// Add Theme Color if Intro Section is off screen: not intersecting
	if(!entry.isIntersecting) {
	    header.classList.add("header--scrolltotheme");


	} else {
	    // Remove Theme Color if scrolled back to: Intro Section
	    header.classList.remove("header--scrolltotheme");
	}
    });
},  sectionIntroOptions);


// Activate observer for Intro Section
sectionIntroObserver.observe(sectionIntro);




/* Observer: sectionFaders -------------------------------------*/

// Content Sections - Fade-in on scroll
const appearOptions = {
    rootMargin: "-15%"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
	//console.log(entry.target);
	if(!entry.isIntersecting) {
	    return;
	} else {
	    // Add  the .appear class to the current section
	    entry.target.classList.add("appear");
	    appearOnScroll.unobserve(entry.target);
	    // Add the .NAME class to the current <a> in the navbar
	    //document.querySelector(`.main_nav a[href="#${id}"]`).classList.add('.main_nav--active');
	   
	}
    });
},  appearOptions);




// Activate observer for Sections with "fade-in" class
sectionFaders.forEach(sectionFader => {
    appearOnScroll.observe(sectionFader);

});






/* Observer: sections -------------------------------------*/
// Highlight Navbar links per active intersecting Section on Screen
const navbarOptions = {
    threshold: 0,
    rootMargin: "-40%" // "-25%"
    
};

const navbarHighLight = new IntersectionObserver(function(entries, navbarHighLight) {
    entries.forEach(entry => {
	console.log(viewPortWidth);
	console.log(entry.target);
	if(!entry.isIntersecting) {
	    
	    return;
	} else if (entry.target.id == "intro") {
	    document.querySelectorAll('.main_nav--active').forEach((el) => el.classList.remove('main_nav--active'));
	    return;
	    // Only Highlight Nav Links if Hamburger/Mobile Nav is hidden
	    // Mobile Nav is only used if ( min-width < 1024px)
	} else if(viewPortWidth.matches && entry.isIntersecting) {
	    console.log(`"#${entry.target.id}" is intersecting`);
	    // Remove  the '.main_nav--active class from any previous sections
	    //document.querySelectorAll('.main_nav--active').forEach((el) => el.classList.remove('main_nav--active'));
	    document.querySelectorAll('.main_nav--active').forEach((el) => el.classList.remove('main_nav--active'));
	    
	    // Add the .NAME class to the current <a> in the navbar
	    //document.querySelector(`.main_nav a[href="#${entry.target.id}"]`).classList.toggle('main_nav--active');
	    document.querySelector(`nav a[href="#${entry.target.id}"]`).classList.toggle('main_nav--active');
	} else {
	    return;
	}
	
    });
},  navbarOptions);


// Activate observer for all Sections

allSections.forEach(allSection => {
    navbarHighLight.observe(allSection); 
});
