/**
 * 外观模式
 */

var addEvent = function(el, enTyep, fn) {
	if (el.addEventListener) {
		el.addEventListener(enType, fn);
	} else if (el.attachEvent) {
		el.attachEvent('on' + enTyep, fn);
	} else {
		el['on' + enType] = fn;
	}
}