/* 
=========================================================================
accordion-sidebar.js
1. Toggles Accordion Effect for each Support Category Button
2. Section content - sets the <input id="tab1" type="radio" name="tabs" > 
   to "checked" which changes <section id="content1"> to display:block
=========================================================================
*/


// Select all the <button class="accordion_button"> within the aside
var accordionsSidebar = document.getElementsByClassName("accordion_button");
// Select <aside id="sidebar">
var sideBar = document.getElementById("sidebar");
// Select all anchor elements within <aside id="sidebar">
var sidebarHrefs = sideBar.getElementsByTagName('a');



/* 
=========================================================================
1. Toggles - Upon "clicking" button.accordion-sidebar", Child Element
 Div with UL/LI = Open/Close with Accordion Effect
=========================================================================
*/
for (var i = 0; i < accordionsSidebar.length; i++) {
  accordionsSidebar[i].onclick = function() {
      this.classList.toggle('is-open');

    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      // accordion is currently open, so close it
      content.style.maxHeight = null;
    } else {
      // accordion is currently closed, so open it
      content.style.maxHeight = content.scrollHeight + "px";
    }
  };
}



/* 
=========================================================================
2. Clicking any of the child anchor elements within the <aside id="sidebar">
sets the <input id="tab1" type="radio" name="tabs" > 
to "checked" which sets <section id="content1"> display: block
=========================================================================
*/
for (var j = 0; j < sidebarHrefs.length; j++) {
    sidebarHrefs[j].onclick = function() {
	document.getElementById("tab1").checked = true;
    };
}
