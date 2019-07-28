/* overlay-employee.js
----------------------
Problem:  Click on Employee Widget to obtain further details of person
Solution: Create an Overlay of Employee with the following:
Employee Image
Name
Username
Email
Cell Number
Detailed Address, including street name and number, city, country and post code.
Birthdate
-----------------------
*/

//1. Create elements for Overlay
//$varname is a JQuery representation of an disembodied object - DOM element
var $overlay = $('<div id="overlay"></div>');
var $employeeArticle = $('<article class="employee-detail"></article>');


//1.2 Add the "article" element to the "overlay" div
$overlay.append($employeeArticle);

//1.3 Add Overlay to the existing DOM
$("body").append($overlay);



//2. Capture Click Event on Employee Widget
$( "body" ).on("click", "article.employee-widget", function() {
    //event.preventDefault();
    
    var whichEmployee = $(this).attr("data-name");//data-tag value from element
    console.log( whichEmployee );//Debug purposes
    //2.2 Get clicked employee's info from <article>
   
    var $this = $(this);//save reference to currently clicked employee-widget
    var detailHTML = '';//create empty string
    var detailPhoto = $this.find('img').attr("src");//Path to  Employee Photo
    var detailName = $this.data( "name" );//retrieve data-tag value assigned to <article>, etc.
    var detailUserName = $this.data( "username" );
    var detailEmail = $this.data( "email" );
    var detailCell = $this.data( "cell" );
    var detailStreetCity = $this.data( "address" ) + ', ' + $this.data( "city" );
    var detailStatePost = $this.data( "statepost" );
    var detailCountry = $this.data( "country" );
    var detailDob = $this.data( "dob" );

    //Show Photo of Employee
    detailHTML += `<figure class="figure-detail">`;
    detailHTML += `<img class="employee-detail-photo" src='${ detailPhoto }' alt="${ detailName }">`;
    detailHTML += `</figure>`;
    //Create Elements for  additional required info
    detailHTML += `<div>`;
    detailHTML += `<p class="employee-name">${ detailName }</p>`;
    detailHTML += `<p>${ detailUserName }</p>`;
    detailHTML += `<p>${ detailEmail }</p>`;
    detailHTML += "<hr />";
    detailHTML += `<p class="employee-contact">${ detailCell }`;
    detailHTML += `<p class="employee-contact">${ detailStreetCity }`;
    detailHTML += `<p class="employee-contact">${ detailStatePost }`;
    detailHTML += `<p>${ detailCountry }`;
    detailHTML += `<p>Birthday: ${ detailDob }`;
    detailHTML += `</div>`;
    
    //Update the article with "Contents of Employee Widget - including "data-tag values
    //insert detailHTML as the first child of <article class=".employee-detail"> 
    $( ".employee-detail" ).prepend(detailHTML);
    //Show the overlay
    $overlay.show();
    
    
    
    //3. When user clicks on Overlay
    $overlay.click(function() {
	//2.1 Hide the Overlay
	$overlay.hide();
	//2.2 Keep <article> but remove elements: <figure> & <div>
	//<figure> & <div> will be recreated if another employee-widget is clicked afterwards
	$( "#overlay").contents().find("figure").remove();//remove div
	$( "#overlay").contents().find("div").remove();//remove div
    });

});
