
// 原理：
// 利用script的没有同源限制的策略，把src中参入回调参数的
// 例如： createJsonp('http://localhost:8888?callback=getJsonpData')
// 
function createJsonp(src) {
	if (!src) return;
	var scriptEle = document.createElement('script');
	scriptEle.type = 'text/javascript';
	scriptEle.src =  src + Date.now();
	scriptEle.async = true;
	document.getElementsByTagName('head')[0].appendChild(scriptEle);
}

//jquery的方式
$.ajax({
	type: 'get',
	url: 'http:localhost:8888',
	dataType: 'jsonp',
	jsonp: 'callback',
	jsonpCallback: 'getJsonpData',
	success: function(json) {
		console.log(json);
	},
	error: function() {
		alert('failed...')
	}
})