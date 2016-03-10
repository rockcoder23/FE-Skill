/**
 * 结合工厂函数的写法
 * 
 */

function Person(name) {
	this.name = name;
}


var singletonify = function (creater) {
	var instance = null;
	return function() {
		return instance || (instance == creater.call(this, arguments));
	}
}


/**
 * 结合工厂函数的写法
 * 
 */

function Person(name) {
	this.name = name;
}


var singleTon = (function(creator) {
	var instance;

	function createInstance() {
		var stamp = Date.now();
		var obj = new creator('bbox' + stamp);
		return obj;
	}

	return {
		getInstance: function() {
			if (!instance) {
				instance = createInstance();
				return instance;
			}
			return instance;
		}
	}
})(Person);




/**
 * 最直接的方式，但是会暴露instance
 * 
 */

function Person () {
}

Person.getInstance = function() {
	if (!this.__instance) {
		return this.__instance = new Person();
	} else {
		return this.__instance;
	}
}

// testing

var p1 = Person.getInstance()
var p2 = Person.getInstance()
p1 === p2  //true


function Person () {
}

Person.getInstance = (function() {
	var instance = null;
	return function () {
		if (!instance) {
			return instance = new Person();
		} else {
			return instance;
		}
	}
})();







