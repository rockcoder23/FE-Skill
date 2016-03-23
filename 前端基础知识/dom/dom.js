(function(win){
	var global = win;
	var doc = win.document;

	var dom = function(params, context) {
		return new GetOrMakeDom(params, context);
	}

	var GetOrMakeDom = function(params, context) {
		if(context) {
			if (context.nodeType) {
				currContext = context;
			} else {
				currContext = doc.querySelector(context);
			}
		}
	}

	global.dom = dom;

	dom.fn = GetOrMakeDom.prototype;
})(window) 


// https://github.com/dkraczkowski/dom.js/blob/master/src/dom.js