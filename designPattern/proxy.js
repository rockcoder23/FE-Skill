function Person(name) {
	this.name = name;
	this.getName = function() {
		console.log(this.name);
	}

	this.setName = function(name) {
		this.name = name;
	}
}


function Proxyer(name) {
	this.orignObj = new Person(name);
	this.callMethod = function(methodName, args) {
		this.orignObj[methodName].apply(this.orignObj, args);
	}
}


//=====test=====
var proxy = new Proxyer('box');
proxy.callMethod('getName');
proxy.callMethod('setName', ['lucy']);
proxy.callMethod('getName');