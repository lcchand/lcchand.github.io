var sidebarHamburger = document.getElementById('hamburger');
var HBsidebar = document.getElementById('sidebar');

sidebarHamburger.onclick = function() {
    
    if (HBsidebar.style.display === "") {
	 HBsidebar.style.display = "block";

    } else {
	 HBsidebar.style.display = "";

    }
};
