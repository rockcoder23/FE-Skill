// 1. js继承








// 2. js对象copy
Object.prototype.clone = function () {
	var obj = this.constructor === Array ? [] : {};
	for (var e in this) {
		obj[e] = typeof this[e] === 'object' ? this[e].clone() : this[e];
	}
	return obj;
}


// 3. js数组去重
Array.prototype.unique = function () {
	var tmp = {}, result = [];
	for (var i = 0; i < this.length; i++) {
		if (!tmp[this[i]]) {
			result.push(this[i]);
			tmp[this[i]] = true;
		}
	}
	return result;
}


Array.prototype.unique2 = function () {
	var result = [];
	for (var i = 0; i < this.length; i++) {
		if (result.indexOf(this[i]) == -1) {
			result.push(this[i]);
		}
	}
	return result;



//4. 获取字符串的字节长度
String.prototype.getByteLength = function() {
	var len = this.length;
	var bytes = len;

	for (var i = 0; i < len; i++) {
		if (this.charCodeAt(i) > 255) { bytes++};
	}
	return bytes;
}



// 5.写一个方法判断js对象类型
Object.prototype.isTypeOf = function(type) {
	var that = this;
	return Object.prototype.toString.call(that) === '[object ' + type + ']';
}




