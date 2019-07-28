/* message - User Message & Form validation */

(function() {
    
    /* ========================================
       Global Scope
       ======================================== */

    var userForm = document.getElementById("user-form");             // Form - Message user
    var formElements = userForm.elements;                            // Elements within the Form
    var userSearch = document.getElementById("user-search");         // input text - Message User
    var userMessage = document.getElementById("user-message");       // textarea - Message User
    var userSend = document.getElementById("user-send");             // SEND button - Message User
    var validBoth;                                                   // User Message Elements = Valid
    var validUser;                                                   // User-search
    var validMessage;                                                // User-message

    

    /* ========================================
       Event Listeners & Functions
       ======================================== */

    
    /*
      Send Button (user-send) - capture Mouse click or keydown - 
      check for Empty values in user-search & user-message form elements, if all is well, 
      Alert Dialog, clear fields after OK
    */
    userSend.addEventListener(("click" || "keydown"), function(e) {
	checkValue();
	if (!validUser) {
	    e.preventDefault();
	} else if (!validMessage) {
	    e.preventDefault();
	} else {
	    alert ("Message for " + userSearch.value + " sent");
	    formResetStyle();
	}
    });
    

    //User Search - Check for updates
    userSearch.addEventListener(("input" || "keydown"), function(e) {
	if (userSearch.value !== "") {
	    userSearch.className = "";
	}
    });


    //User Message - Check for updates
    userMessage.addEventListener(("input"), function(e) {
	if (userMessage.value !== "") {
	    userMessage.className = "";
	}
    });


    //Input Elements: user-search & user-message, Check for empty values
    function checkValue() {
	for (var i = 0; i < (formElements.length - 1); i++) {
	    elementValue = formElements[i].value;
	    elementName = formElements[i].name;
	    if (elementValue === "" && elementName === userSearch.name) {
		formErrorStyle(userSearch);
		validUser = false;
	    } else if (elementValue !== "" && elementName === userSearch.name) {
		validUser = true;
	    } else if (elementValue === "" && elementName === userMessage.name) {
		formErrorStyle(userMessage);
		validMessage = false;
	    } else if (elementValue !== "" && elementName === userMessage.name) {
		validMessage = true;
	    }
	}
    }
    

    // Set Error Style & Message for Message User Empty form elements
    function formErrorStyle(elName) {
	if (elName === userSearch) {
	    userSearch.className = "input-error";
	    userSearch.setAttribute("placeholder", "Please enter username");
	} else if (elName === userMessage) {
	    userMessage.className = "input-error";
	    userMessage.setAttribute("placeholder", "Please enter message for user");
	}
    }

    // Remove .input-error class style from Message User Form Elements
    function formResetStyle() {
	for (var i = 0; i < (formElements.length - 1); i++) {
	    formElements[i].className = "";
	    formElements[i].value = "";
	}
    }



}());
