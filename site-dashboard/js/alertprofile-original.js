// Profile Alerts - alerts & Bell indicator
( function() {
    /* ========================================
       Global Scope
       ======================================== */

    var alertMessage = document.getElementById("alerts");            // Alerts - DIV
    var alertNotification = document.getElementById("profileAlert"); // Notification symbol - Profile Bell



    /* ========================================
       Event Listeners & Functions
       ======================================== */

    //Alerts - display on page load-cancel button to clear
    //Button = alert-submit
    var clearMessage = document.getElementById("alert-submit");
    clearMessage.onclick = function() {
	clearAlertMessage();
	clearAlertBell();
    };



    function clearAlertMessage() {
	alertMessage.style.display = "none";
    }



    function clearAlertBell() {
	alertNotification.style.display = "none";
    }

}());
