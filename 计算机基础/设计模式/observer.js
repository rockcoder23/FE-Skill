function Publisher() {
	this.listeners = [];
}

Publisher.prototype.addListener = function(listener) {
	this.listeners.push(listener);
}

Publisher.prototype.removeListener = function(listener) {
	var index = this.listeners.indexOf(listener);
	if (index === -1) return -1;
	this.listeners.splice(index, 1);
	return index;
}

Publisher.prototype.notify = function(msg) {
	this.listeners.forEach(function(item, index){
		item.process(msg);
	})
}



function Subscriber(name) {
	this.name = name;
}

Subscriber.prototype.process = function (msg) {
	console.log('process: ' + this.name + ' ' + msg );
}


//=====testing======


var pub = new Publisher();
pub.addListener(new Subscriber('bob'));
pub.addListener(new Subscriber('lucy'));
pub.notify('haha, first msg....');