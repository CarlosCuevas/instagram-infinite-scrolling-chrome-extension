(function(){
	'use strict';

	// initialize url
	let currentUrl = location.href;

	// only need to click once
    let alreadyClicked = false;

    const selector = '#react-root > section > main > article > div > a';

    // try to load selector in case we're already on a profile page
    let loadMoreButton = document.querySelector(selector);

	window.onscroll = function() {
	    if ((document.body.offsetHeight + document.body.scrollTop) === document.body.scrollHeight){
	    	//if url has changed, reset currentUrl and selector
	    	if (currentUrl !== location.href){
                alreadyClicked = false;
	    		currentUrl = location.href;
	    		loadMoreButton = document.querySelector(selector);
	    	}

	        if (loadMoreButton && !alreadyClicked) {
	        	loadMoreButton.click();
                alreadyClicked = true;
	        }
	    }        
	};
})();