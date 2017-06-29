{
	'use strict';

	// need to click again if on a new profile
	let currentPath = location.pathname;

	// only need to perform initial 'load more' click
    let alreadyClicked = false;

	const selector = '#react-root > section > main > article > div > a';

	window.onscroll = () => {
		// only profile pages need a click
		if (location.pathname === '/') return;

		if ((document.body.offsetHeight + document.body.scrollTop) === document.body.scrollHeight) {
	    	if (currentPath !== location.pathname) {
                alreadyClicked = false;
	    		currentUrl = location.pathname;
	    	}

	        if (!alreadyClicked) {
				// must call querySelector here or element ends up null
				document.querySelector(selector).click();
                alreadyClicked = true;
	        }
	    }
	};
}
