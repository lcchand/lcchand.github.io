// Employees.js - makes an AJAX request to "https://randomuser.me/" using the Random User Generator API

/* Default API for site --------------------------------------------------------------------------------------------------------

$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    console.log(data);
  }
});

// Query String format --------------------------------------------------------------------------------------------------------
?parameter=...&parameter=... (&parameterName=value for each additional parameter)
Example: ?results=12&nat=AU,CA,GB,IE,NZ,US (12 requested random users from English alphabet nationalities)

// Query String Parameters for Randomuser (that are needed for Project 10) ----------------------------------------------------
results = requested number of users (12 required for project) - must start with Question Mark (?), 
Additional Parameters Prepended with an "&" ampersand

nat = Nationality (AU,CA,GB,IE,NZ,US) "English Alphabet countries"
inc = include only these fields
exc = exlcude only these and show the rest of the fields

End of Default API ---------------------------------------------------------------------------------------------------------- */

// --- Global Vars for API ----------------------------------------------------------------------------------------------------
//var url = "https://randomuser.me/api/";                               //URL API was updated - broke application
var url = "https://randomuser.me/api/1.1/";                             //URL - reverted to Version used during original development
var ruResults = "?results=12";                                          //Only 12 users requested-must start with Question Mark
var ruNationality = "&nat=AU,CA,GB,IE,NZ,US";                           //English Aphabet Countries(& = options)
var ruIncludes = "&inc=picture,name,login,email,location,cell,nat,dob"; //Include only these fields
var RandomUserRequest = url + ruResults + ruNationality + ruIncludes;   //concatenated final API request



//Check "nat" abbreviation and return full name (IE: country)
function whichcountry( nat ) {
    if (nat === 'AU') {
	nat = 'Australia';
	return nat;
    } else if (nat === 'CA') {
	nat = 'Canada';
	return nat;
    } else if (nat === 'GB') {
	nat = 'Great Britain';
	return nat;
    } else if (nat === 'IE') {
	nat = 'Ireland';
	return nat;
    } else if (nat === 'NZ') {
	nat = 'New Zealand';
	return nat;
    } else if (nat === 'US') {
	nat = 'United States';
	return nat;
    } else {
	return nat;
    }
}


// RandomUserRequest defined with a concatenated variable
$.ajax({
    url: RandomUserRequest,
    dataType: 'json',
    error: function(data) {
	var ajaxError = data.statusText;
	var employeeHTML = '';
	employeeHTML += `<p class="employee-error">${ ajaxError }, Server is not avaialable.</p>`;
	$('#employees').html(employeeHTML);
	console.log(data);//Debugging purposes
    },
    success: function(data) {
	var employeeHTML = '';
	$.each( data.results, function (i, employee) {
	    
	    // define Local Vars for use with Template Literals
	    var name = employee.name.first + ' ' + employee.name.last;
	    var photo = employee.picture.large;
	    var userName = employee.login.username;
	    var email = employee.email;
	    var cell = employee.cell;
	    var street = employee.location.street;
	    var city = employee.location.city;
	    var address = street + ', ' + city;
	    var state = employee.location.state;
	    var nat = employee.nat;
	    var postCode = employee.location.postcode;
	    var statePost = state + ' ' + postCode;
	    var dob = (employee.dob).substr(0, 10);
	    var country = whichcountry( nat );//returns Full Country Name from Abbreviation


	    //Create Employee Widget HTML for each Employee result with Data-Tags on "article" ( to be used for detailed overlay )
	    employeeHTML += `<article class="employee-widget" data-name="${ name }" data-userName="${ userName }" data-email="${ email }" data-city="${ city }" data-cell="${ cell }" data-address="${ street }" data-statePost="${ statePost }" data-nat="${ nat }" data-country="${ country }" data-dob="${ dob }">`;
	    employeeHTML += '<figure>';
	    employeeHTML += `<img class="employee-photo" src='${ photo }' alt="${ name }">`;
	    employeeHTML += '</figure>';
	    employeeHTML += '<div>';
	    employeeHTML += `<p class="employee-name" data-name="${ name }">${ name }</p>`;
	    employeeHTML += `<p>${ userName }</p>`;
	    employeeHTML += `<p class="employee-city">${ city }, ${ country }</p>`;
	    employeeHTML += '</div>';
	    employeeHTML += '</article>';

	});
	$('#employees').html(employeeHTML);
	console.log(data);//Debugging purposes
	
    }

});

