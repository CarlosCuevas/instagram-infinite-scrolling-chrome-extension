(function(){
	'use strict';

	// initialize url
	var currentUrl = location.href;

	// only need to click once
    var counter = 0;

    // try to load selector in case we're already on a profile page
    var selector = document.querySelector('#react-root > section > main > article > div > div._pupj3 > a');

	window.onscroll = function() {
	    if ((document.body.offsetHeight + document.body.scrollTop) === document.body.scrollHeight){
	    	//if url has changed, reset currentUrl and selector
	    	if (currentUrl !== location.href){
                counter = 0;
	    		currentUrl = location.href;
	    		selector = document.querySelector('#react-root > section > main > article > div > div._pupj3 > a');
	    	}

	        if (selector && (counter === 0)) {
	        	selector.click();
                counter = 1;
	        }
	    }        
	};
})();