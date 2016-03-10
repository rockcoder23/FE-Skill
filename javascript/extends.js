function isObj(obj) {
	return Object.prototype.toString.apply(obj) === '[object object]';
}

function isArray(arr) {
	return Array.isArray(arr);
}



function extendsBeta(obj1, obj2, deep) {
	if (!obj2) return obj1;
	for (var key in obj2) {
		if (deep && (isObj(obj2[key]) || isArray(obj2[key]))) {

			obj1[key] = (isObj(obj2[key]) && !isObj(obj1[key])) ? {} : obj1[key];
			obj1[key] = (isArray(obj2[key]) && !isArray(obj1[key])) ? [] : obj1[key];

			extendsBeta(obj1[key], obj2[key]);
		} else {
			obj1[key] = obj2[key];
		}
	}
	return obj1;
}