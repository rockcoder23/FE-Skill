var http = require('http');
var url = require('url');


/**
 * [json 劫持 + csrf]
 * 攻击者构造一个页面，发起jsonp调用，然后把用户的信息拿到
 *
 * 
 * 1. 通过referer判断不严谨
 * 2. 当用户访问一个页面的时候,生成一个足够安全的token,然后在请求jsonp请求过来时候，校验token.
 * 这样就防止了csrf攻击
 * @return {Boolean} [description]
 */
function isFromSecurityDomain() {
	return true;
}


/**
 * [callback参数注入] http://blog.chacuo.net/295.html
 * callback名字必须固定，在server端进行校验;
 * @param  {Function} callback [description]
 * @return {Boolean}           [description]
 */
function isCallbackSecurity(callback) {
	return callback === 'getJsonpData';
}


http.createServer(function(req, res) {

	// 解析req里面的参数必须使用url模块的parse方法
	var query = url.parse(req.url, true).query;

	if (!isCallbackSecurity(query.callback)){
		res.end('console.warn("检测到恶意的callback参数注入")');
		return;
	}

	// 把callback当做函数把数据返回。
	res.write(query.callback + '(' + JSON.stringify({name: 'kugua', age: 26}) + ')');
	res.end();
}).listen(8888);
console.log('server listen at 8888');