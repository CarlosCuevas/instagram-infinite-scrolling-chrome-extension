(function(){
	'use strict';

	//initialize url and selector
	var currentUrl = location.href;
	try {
	    var selector = setSelector();
	}
	catch(error) {
	    reportError(error);
	}

    var counter = 0;

	window.onscroll = function() {
	    if ((document.body.offsetHeight + document.body.scrollTop) === document.body.scrollHeight){
	    	//if url has changed, reset currentUrl and selector
	    	if (currentUrl !== location.href){

                counter = 0;
	    		currentUrl = location.href;
	    		
	    		try {
				    selector = setSelector();
				}
				catch(error) {
				    reportError(error);
				}

	    	}

	        if (selector && (counter === 0)){
	        	selector.click();
                counter = 1;
	        }
	    	
	    }        
	};

	function reportError(errorObj){
		console.error('Instagram Infinite Scrolling Extension:', errorObj.message);
	}

	function setSelector(){
		//check if we're on a profile page or the main feed. cache the appropriate selector.
		var selectorTmp = document.querySelector('#react-root > section > main > article > div > div.-cx-PRIVATE-AutoloadingPostsGrid__moreLoadingIndicator > a');
		if (!selectorTmp){
		   selectorTmp = document.querySelector('#react-root > section > main > section > div > div.-cx-PRIVATE-AutoloadingPostsGrid__moreLoadingIndicator > a');
		}

		if (!selectorTmp){
			throw new Error('Could not find expected DOM Element');
		}

		return selectorTmp;
	}

})();