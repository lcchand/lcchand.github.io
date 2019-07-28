(function() {

    // Modeled on Andrew Chalkley's video - create a simple Lightbox

    // --- Global Overlay jQuery DOM objects --
    var $overlay = $('<div id="overlay"></div>');                 // create JQuery DIV object for overlay - $ is convention for JQuery objects
    var $modal = $('<div id="modal"></div>');                     // create JQuery DIV object for modal
    var $prevArrow = '<a class="prev" href="#" ><svg class="leftarrow"><use xlink:href="#leftarrow" /></svg></a>';     // Create Left/Previous Arrow
    var $nextArrow = '<a class="next" href="#" ><svg class="rightarrow"><use xlink:href="#rightarrow" /></svg></a>';     // Create Right/Next Arrow
    var $image = $("<img id='photo'>");                           // create Image JQuery object selected from: a href link
    var $caption = $('<p></p>');                                  // create JQuery object for caption

    // --- Detached DOM elements ------
    $overlay.append($modal);
    $modal.append($prevArrow);                                   // Left/Previous Arrow - add to modal
    $modal.append($image);                                       // Update modal with the image linked in href
    $modal.append($nextArrow);                                   // Right/Next Arrow - add to modal
    $modal.append($caption);                                     // caption - append to overlay
    $("body").append($overlay);                                  // Overlay - Append to BODY of document
    // --- Overlay jQuery DOM objects --

    // -------- LiveSearch ------------
    var $allimages = $('#gallery img');                           // Get all the images(img) within the Div ID: gallery
    var $searchBox = $('#filter-search');                         // Get the text input element with ID: filter-search
    var allImgsCache = [];                                        // Create an array called allImgsCache
    $allimages.each(function() {                                  // iterate thru each image
	allImgsCache.push({                                       // Add an object to the allImgsCache array
	    element: this,                                        // current image
	    text: this.alt.trim().toLowerCase()                   // current image's alt text - remove any start/end spaces & convert to lower case
	});
    });


    function filterPhotos() {                                     // Declare filterPhotos() function
	var imgQuery = this.value.trim().toLowerCase();           // Get the imgQuery text cleaned up - remove any start/end spaces & convert to lower case

	allImgsCache.forEach(function(img) {                      // For each entry in allImgsCache pass image
	    var index = 0;                                        // Set index to 0
	    if (imgQuery) {                                       // imgQuery is not empty - use the text
		index = img.text.indexOf(imgQuery);               // Does imgQuery text match any text within "alt" text
	    }

	    img.element.closest('a').style.display = index === -1 ? 'none' : '';   // anchor = Show / hide
	    img.element.closest('a').className = index === -1 ? '' : 'active';     // anchor = if its a match, assign class of active, otherwise no class
	    img.element.className = index === -1 ? 'notActive' : 'active';         // img = Class = active / notActive

	});
    }
    // -------- LiveSearch ------------

    // --- Click Event Handler - Wrapper DIV with Gallery=ID - "Any" anchors with a class=active containing images --------------

    $('#gallery a[class="active"]').click(function(event){               // Capture Click event - Gallery ID assigned to DIV wrapper
  	event.preventDefault();                                          // prevent click event from going to link
  	var imageLocation = $(this).attr("href");                        // select current href (IMG w/ anchor) & assign to variable
	var numOfImages = $('#gallery a[class="active"]');               // Select all anchors with class=active within Div ID=Gallery
	var currentImageIndex = $( 'a[class="active"]' ).index( this );  // assign Index number of current slide


  	$(".leftarrow").click(function(event) {                     // If you clicked on the "Left/Previous" arrow
  	    event.stopPropagation();
  	    var prevImage = numOfImages[currentImageIndex-1];       // assign prevImage to the element one position less in the array
  	    currentImageIndex = (currentImageIndex - 1);            // decrement index postion in the array
  	    if (currentImageIndex < 0) {                            // Make sure we are not going beyond the first element in the array
  		currentImageIndex = 0;                              // Reset to Index Postion = 0 because you can not go any further
  		prevImage = numOfImages[0];                         // Reset to First slide because you can not go any further
  	    }
  	    imageLocation = $(prevImage).attr("href");
  	    updateOverlay(prevImage);                               // pass prevImage value to function updateOverlay
  	});


  	$(".rightarrow").click(function(event) {                    // If you clicked on the "Right/Next" arrow
  	    event.stopPropagation();
  	    var nextImage = numOfImages[currentImageIndex+1];       // assign nextImage to the element one position more in the array
  	    currentImageIndex = (currentImageIndex + 1);            // increment index postion in the array
  	    if (currentImageIndex == numOfImages.length) {          // Make sure we are not going beyond the last element in the array
  		currentImageIndex = (numOfImages.length - 1);       // Reset to Index Postion = Last because you can not go any further
  		nextImage = numOfImages[currentImageIndex];         // Reset to Last slide because you can not go any further
  	    }
  	    imageLocation = $(nextImage).attr("href");
  	    updateOverlay(nextImage);                               // pass nextImage value to function updateOverlay
  	});

  	function updateOverlay (switchPhoto) {                      // called by Arrow click events
  	    var scrollImageLocation = switchPhoto;                  // assign parameter(switchPhoto) to var(scrollImageLocation)
  	    $image.attr("src", scrollImageLocation);                // Update overlay with the image linked in href
  	    var captionText = $(scrollImageLocation).children("img").attr("alt");   // Get child's ALT attribute from selected IMG and set caption
  	    $caption.text(captionText);                             // Select "caption" element set text to contents of captionText
  	}


  	$image.attr("src", imageLocation);                          // Update overlay with the image linked in href
  	$overlay.fadeIn().css("display", "flex");                   // set display: flex, Fade In overlay instead of immediate 'show()'

  	var captionText = $(this).children("img").attr("alt");      // Get child's ALT attribute from selected IMG and set caption
  	$caption.text(captionText);                                 // Select "caption" element set text to contents of captionText


	// ------ Console Log: imageLocation - to see what is selected ------------------------------
  	console.log('Gallery contains ' + numOfImages.length + ' Active Slides');
  	console.log( 'currentImageIndex = ' + currentImageIndex);
	// ------

    });  // End of Click Event Handler


    // ------- Hide Overlay ----------
    $overlay.click(function(){  	                           // When overlay is clicked
	$overlay.fadeOut();                                        // Hide the overlay
    });
    // ------- Hide Overlay ----------


    // -------- LiveSearch ------------
    if ('oninput' in $searchBox[0]) {                              // Does the browser support the input event
	$searchBox.on('input', filterPhotos);                      // Use the input event to call filterPhotos()
    } else {                                                       // If the browser does not
	$searchBox.on('keyup', filterPhotos);                      // Use the keyup event to call filterPhotos()
    }
    // -------- LiveSearch ------------
}());                                                              // Place script in an IIFE
