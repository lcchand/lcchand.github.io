/* modal.js
----------------------
Problem:  Click on Portfolio Widget to obtain further details of item
Solution: Create an Modal of Portfolio Item with the following:

Image of Selected Work
H3 : Name of Project
Unordered List Items of Technology used
Description
-----------------------
*/

// 1. Create DOM Elements for Overlay & Modal Item
let overlayElement = document.createElement('div');
overlayElement.setAttribute('id', 'overlay');
overlayElement.classList.add('overlay');

let modalElement = document.createElement('article');
modalElement.setAttribute('id', 'modal');
modalElement.classList.add('modal');

// 2. Add "overlay element" to end of Body, then append "Modal Element" to Overlay
let bodyElement = document.getElementById('container');
bodyElement.appendChild(overlayElement);
overlayElement.appendChild(modalElement);

// Select all Article Elements with a Class Name of: portfolio
const selectedWork = document.getElementsByClassName('portfolio');

/* --- Event Listeners -------------------------------------------- */
// Capture Click Event on all Portfolio classed Articles
for (let i = 0; i < selectedWork.length; i++) {
    selectedWork[i].addEventListener('click', openModal);
}

// Capture Click Event on Overlay
overlayElement.addEventListener('click', outsideModal);



/* --- Functions -------------------------------------------------- */

// Activate Overlay & Open Modal with Contents of selectedwork element
function openModal(e) {
    // debug purposes
    console.log(this.textContent);

    // Get selected Gallery Item's info from <article> & <data-?> attributes
    let detailHTML = '';//create empty string to append to
    let detailName = this.dataset.name;
    console.log(detailName);// debug
    let detailPath = this.dataset.path;
    console.log(detailPath);
    let detailSkills = this.dataset.skills;
    console.log(detailSkills);// debug
    let arrDetailSkills = listSkills(detailSkills);
    console.log(arrDetailSkills);// debug
    let detailDesc = this.dataset.desc;
    console.log(detailDesc);// debug 
    let detailImage = e.target.parentElement.children[0].src;//DOM:figure -> img -> src
    console.log(detailImage);
     

    // Assemble HTML elements for popup modal
    detailHTML += `<figure id="galleryItem" class="galleryItem">`;
    detailHTML += `<div class="galleryItem_Div_image">`;
    detailHTML += `<img class="modal_img" src="${ detailImage }">`;
    detailHTML += `</div>`;
    detailHTML += `<div class="galleryItem_info">`;
    detailHTML += `<h3 class="modal_h3">${ detailName }</h3>`;
    detailHTML += `<h4 class="modal_h4">Technologies</h4>`;
    detailHTML += `${ arrDetailSkills }`;
    detailHTML += `<p class="modal_p">${ detailDesc }</p>`;
    detailHTML += `<p class="modalSite"><a class="modalSite_a" href=${ detailPath }>Proceed to Site</a></p>`;
    detailHTML += `</div>`;

    detailHTML += `</figure>`;
    console.log(detailHTML);

    //Update the article with "Contents of Gallery Item" - including "data-tag" values
    //insert detailHTML as the first child of <article class="modalElement"> 
    modalElement.innerHTML = detailHTML;
    

    
    // display overlay
    overlayElement.style.display = 'flex';
    // display modal
    modalElement.style.display = 'grid';

}

// Select a href just created from modal
let modalSiteHref = document.querySelector(".modalSite_a");



/* --- Functions --- */

// Remove Overlay & Close Modal for selected Gallery element
function closeModal() {
    // Remove Overlay by setting style to none
    overlayElement.style.display = 'none';
    // Remove modalelement by setting style to none
    modalElement.style.display = 'none';
    // Select <figure> element by ID and remove from DOM
    let figureElement = document.getElementById('galleryItem');
    figureElement.remove('galleryitem');
}



// call function: closeModal - if Click event is outside of modalSitehref
function outsideModal(e) {
    if(e.target !== modalSiteHref) {//modalElement
	closeModal();
    }
}


// Creates an array from comma delimited attribute: data-skills
// and returns html for <li> elements
function listSkills(skills) {
    skillsUsed ='<ul class="modal_ul">';
    let arr = skills.split(",");
    for (let i = 0; i < arr.length; i++) {
	skillsUsed += '<li class="modal_li">' + arr[i].trim() + '</li>';
    }
    skillsUsed += '</ul>';
    return(skillsUsed);
}

