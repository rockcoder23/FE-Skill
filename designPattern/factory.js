//工厂： 就是根据不同的形参返回不同的类型的实例

function ProductA() {
	this.name = 'Person1';
}

function ProductB() {
	this.name = 'ProductB';
}

function Factory() {

}

Factory.prototype.createProduct = function(type) {
	var func = new Function('return new ' + type + '()');
	return func();
}


// =====test=====
var factory = new Factory();
var obj1 = factory.createProduct('ProductA');
var obj2 = factory.createProduct('ProductB');
console.log(obj1.name);
console.log(obj2.name);

