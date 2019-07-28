/* Profile Alerts - Alert & Bell indicator           */
/* hide: Alert Notifications after initial page load */

( function() {
    /* ========================================
       Global Scope
       ======================================== */

    var alertMessage = document.getElementById("alerts");            // Alerts - DIV containing Alert message above Traffic Line Charts
    var alertNotification = document.getElementById("profileAlert"); // <header> Notification symbol - Green Dot beside Bell



    /* ========================================
       Event Listeners & Functions
       ======================================== */

    // Alerts - displays on page load - cancel button to clear
    // <button class="alert-button" type="submit" value="X" id="alert-submit">X</button>
    var clearMessage = document.getElementById("alert-submit");
    clearMessage.onclick = function() {
	clearAlertMessage();
	clearAlertBell();
    };


    // Turn off - Alert <div id="alerts">
    function clearAlertMessage() {
	alertMessage.style.display = "none";
    }


    // Turn off - Green Alert Dot within <header>
    // <li><img id="profileAlert" class="profile-alert" src="assets/icon-bell-alert.svg" alt="Alert Present Symbol"></li>
    function clearAlertBell() {
	alertNotification.style.display = "none";
    }

}()); // IIFE - immediately invoked function expression
