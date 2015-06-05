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

	window.onscroll = function() {
	    if ((document.body.offsetHeight + document.body.scrollTop) === document.body.scrollHeight){

	    	//if url has changed, reset currentUrl and selector
	    	if (currentUrl !== location.href){
	    		
	    		currentUrl = location.href;
	    		
	    		try {
				    selector = setSelector();
				}
				catch(error) {
				    reportError(error);
				}

	    	}
	        
	        if (selector){
	        	selector.click();
	        }
	    	
	    }        
	};

	function reportError(errorObj){
		console.error('Instagram Infinite Scrolling Extension:', errorObj.message);
	}

	function setSelector(){
		//check if we're on a profile page or the main feed. cache the appropriate selector.
		var selectorTmp = null;
		if (document.querySelector('body.UserProfile')){
			selectorTmp = document.querySelector('.PhotoGridMoreButton');
		}
		else {
		   selectorTmp = document.querySelector('#react-root > div > div > div > div > div > div.timelineItem.timelineLast > div.timelineCenter > a');
		}

		if (!selectorTmp){
			throw new Error('Could not find expected DOM Element');
		}

		return selectorTmp;
	}

})();