var sidebarHamburger = document.getElementById('hamburger');
var HBsidebar = document.getElementById('sidebar');

sidebarHamburger.onclick = function() {
    //var HBsidebar = document.getElementById('sidebar');
    
    if (HBsidebar.style.display === "") {
	 HBsidebar.style.display = "block";
	//HBsidebar.style.transition = "ease-in 3s";
 	//HBsidebar.classList.add("aside-mobile-show");
	//HBsidebar.style.transition = "ease-in 3s";
    } else {
	 HBsidebar.style.display = "";
	//HBsidebar.style.transition = "ease-in 3s";
	//HBsidebar.classList.remove("aside-mobile-show");
	//HBsidebar.style.transition = "ease-out 3s";
	
    }
}
