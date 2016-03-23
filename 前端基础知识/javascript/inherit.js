/**
 * Reference: http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_inheritance.html
 * 方法： 
 * 	 1. 构造函数继承
 * 	 2. 使用prototype继承(子构造器原型指向父对象，子构造器原型指向父构造器原型，采用空对象桥接，结合前两种实现继承)
 * 	 3. 采用copy方法实现继承
 *
 * 
 */


// 1. 构造函数绑定实现继承
function Person() {
	this.species = 'person';
}


function Student(name, age) {
	Person.apply(this.arguments);
	this.name = name;
	this.age = age;
}



// 2. prototype实现继承
function Person() {
	this.species = 'person';
}

function Student(name, age) {
	this.name = name;
	this.age = age;
}

Student.prototype = new Person();
Student.prototype.construtor = Student;


// 3. 直接使用同一个原型实现继承
function Person() {

}
Person.prototype.species = 'person';

function Student() {

}

Student.prototype = Person.prototype;
Student.prototype.construtor = Student;



// 4. 使用空对象继承
function Person() {

}
Person.prototype.species = 'person';

function Student(name, age) {
	this.name = name;
	this.age = age;
}

var F = function () {

}

F.prototype = Person.prototype;
Student.prototype = new F();
Student.prototype.construtor = Student;

// 5. 使用copy继承
function Person() {

}
Person.prototype.species = 'person';

function Student() {

}
function extend(child, parent) {
	var c = child.prototype;
	var p = child.prototype;

	for (var key in p) {
		c[key] =  p[key];
	}
	c.super = p;
}



