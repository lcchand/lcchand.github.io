// Videoapp - HTML5 video player using JavaScript and the HTML Video API

/* ================================================================
   Global Scope
   ================================================================ */

//Video
var video1 = document.getElementById("video1");
var video1Progress = document.getElementById("vid-progress");
var video1ProgressBar = document.getElementById("vid-progress-bar");
var timeElapsed = document.getElementById("time-elapsed");
var videoTranscript = document.getElementById("video-transcript");
var videoTranscriptSpans = videoTranscript.getElementsByTagName("span");
var timeDivder = document.getElementById("time-divider");
var timeTotal = document.getElementById("time-total");



/* ================================================================
   Event Listeners & Functions
   ================================================================ */

// Video1ProgressBar - Orange Progress
// The timeupdate event is fired when the time indicated by the currentTime attribute has been updated.
video1.addEventListener("timeupdate", function() {
    if (!video1Progress.getAttribute('max')) video1Progress.setAttribute('max', video1.duration);
    video1Progress.value = video1.currentTime;
    video1ProgressBar.style.width = Math.floor((video1.currentTime / video1.duration) * 100) + '%';

    displayVideoTimes(); // call function to Display Elapsed & Total video time
    highLight(); // call function to highlight Transcript span according to current video segment
    hasVideoEnded(); // call function to see if Video has reached the end - reset Play Button
});



// Time Elapsed & Total Time - Video Display
function displayVideoTimes () {
    
    // Set Elapsed - Minute Time 
    var elapsedMinutes = Math.floor(video1.currentTime / 60);
    if (elapsedMinutes === 0) {
	elapsedMinutes = "00";
    } else if (elapsedMinutes < 10) {
	elapsedMinutes = "0" + elapsedMinutes;
    }
    
    // Set Elapsed - Seconds Time 
    var elapsedSeconds = Math.floor(video1.currentTime - elapsedMinutes * 60);
    if (elapsedSeconds < 10) {
	elapsedSeconds = "0" + elapsedSeconds;
    }

    // Set Total - Minutes Time
    var videoTotalMinutes = Math.floor(video1.duration / 60);
    if (videoTotalMinutes === 0 ) {
	videoTotalMinutes = "00";
    } else if (videoTotalMinutes < 10) {
	videoTotalMinutes = "0" + videoTotalMinutes;
    } 

    // Set Total - Seconds Time
    var videoTotalSeconds = Math.floor(video1.duration - videoTotalMinutes * 60);
    if (videoTotalSeconds < 10) {
	videoTotalSeconds = "0" + videoTotalSeconds;
    }
    
    // Update Time values on Bottom Controls
    timeElapsed.innerHTML = elapsedMinutes + ":" + elapsedSeconds;
    timeDivder.innerHTML = " / ";
    timeTotal.innerHTML = videoTotalMinutes + ":" + videoTotalSeconds;
}



// Convert WebVTT time tracks(00:00:00.000) to Seconds
function webvTime (scriptTime) {
    var webvHours = parseInt(scriptTime.substr(0, 2) * 3600);
    var webvMins = parseInt(scriptTime.substr(3, 2) * 60);
    var webvSecs = parseInt(scriptTime.substr(6, 6));
    var totalSecs = webvHours + webvMins + webvSecs;
    return totalSecs;
}



// Highlight Transcript as Video plays
function highLight() {
    var playingTime = Math.floor(video1.currentTime);
    for (var i = 0; i < videoTranscriptSpans.length; i++) { //loop thru array of transcript spans
	var timeStart = webvTime(videoTranscriptSpans[i].dataset.timestart); //span data-timestart
	var timeEnd = webvTime(videoTranscriptSpans[i].dataset.timeend); //span data-timeend
	if (playingTime >= timeStart && playingTime < timeEnd) {
	    videoTranscriptSpans[i].classList.add("highlight");
	} else {
	    videoTranscriptSpans[i].classList.remove("highlight");
	}
    }
}
    


// Video1Progressbar - < Click & Drag > to different point in the video
video1Progress.addEventListener( 'click', function(e) {
    var LocationOfMouse = e.offsetX;
    var ProgressTrack = video1Progress.offsetWidth;
    var video1Pos = (LocationOfMouse / ProgressTrack);
    video1.currentTime = video1Pos * video1.duration;
});



// if Video has reached the end - reset Play Button
function hasVideoEnded() {
    if (video1.ended === true) {
	playButton.src="assets/play-icon.png";
    }
}



// Play-Pause Button Object
var playButton = document.getElementById("play");
playButton.onclick = function() {
     if (video1.paused === true) {
	video1.play();
	 playButton.src="assets/pause-icon.png";
     } else {
	 video1.pause();
	 playButton.src="assets/play-icon.png";
     }
};


 
// Sound Button Object
var muteButton = document.getElementById("mute");
muteButton.onclick = function() {
    if (video1.muted === false) {
	video1.muted = true;
	muteButton.src = "assets/volume-off-icon.png";
    } else {
	video1.muted = false;
	muteButton.src = "assets/volume-on-icon.png";
    }
};



// Full Screen Button Object
var fullScreenButton = document.getElementById("fullscreen");
fullScreenButton.onclick = function() {
    if (video1.requestFullscreen) {
	video1.requestFullscreen();
    } else if (video1.mozRequestFullScreen) {
	video1.mozRequestFullScreen();
    } else if (video1.webkitRequestFullscreen) {
	video1.webkitRequestFullscreen();
    }
};

