/**
 * Doc: https://developer.mozilla.org/zh-CN/docs/AJAX
 * 
 * Standards: https://www.w3.org/TR/XMLHttpRequest/#the-open()-method
 * 
 * Des: 
 * 		1. 创建XMLHttpRequest对象. IE低版本为window.ActiveXObject对象。
 * 		2. 绑定onreadystatechange事件,监听请求的状态.
 * 		3. 调用open方法，三个参数： 请求的方法， 请求的url， 请求是同步(false)还是异步(true).
 * 		4. 调用send方法，参数：要发送的数据; get方法，因为数据在url的上面，所以传入null.
 * 		
 * Detail:
 * 	#### Request(XMLHttpRequest对象)
 * 		1. readyState状态分为：0-4五种
 *   		0: 未打开(UNSENT)，open()方法未调用。
 *   		1: 未发送(OPENED)，send()方法没有被调用。
 *   		2: 以获取响应头(HEADERS_RECEIVED), send()方法已经被调用, 响应头和响应状态已经返回.
 *   		3: 正在下载响应体(LOADING), 响应体下载中; responseText中已经获取了部分数据.
 *   		4: 请求完成(DONE), 整个请求过程已经完毕.
 *   	2. setRequestHeader() 
 *   	3. abort()
 *   	4. timeout  (单位为毫秒)
 *
 * #### Response(XMLHttpRequest对象)
 * 		1. status (请求的响应状态码)
 * 		2. statusText (请求 status text)
 * 		3. getResponseHeader()
 * 		4. getAllResponseHeaders() 
 * 		5. responseType 
 * 		6. responseXML
 * 		7. addEventListener('timeout', callback)等(readystatechange, progress, abort, error, load, timeout, loadend)
			req.addEventListener("progress", updateProgress, false);
			req.addEventListener("load", transferComplete, false);
			req.addEventListener("error", transferFailed, false);
			req.addEventListener("abort", transferCanceled, false);

 * #### 表单的提交(https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
 * 		使用 POST 方法，并设置 enctype 属性为 application/x-www-form-urlencoded (默认)
		使用 POST 方法，并设置 enctype 属性为 text/plain
		使用 POST 方法，并设置 enctype 属性为 multipart/form-data
		使用 GET 方法（这种情况下 enctype 属性会被忽略）
	

	Q: 
		1. 发送ajax的请求的流程。
		2. open方法的参数和含义-->http方法和含义及区别。
		3. ajax中请求对象的readState状态和含义。
		4. 怎么获取请求头和获取响应头。
		5. 怎么获取服务端的响应数据。
		6. 请怎么设置ajax的超时，怎么取消ajax请求, 怎么获取请求是否出错。

 */


//====定义callback====
function callback(event) {

	switch (oReq.readyState) {
		case 0: console.log('还没有调用open()方法.'); break;
		case 1: console.log('还没有调用send()方法.'); break;
		case 2: console.log('已经调用send()方法,响应头和响应状态已经返回.'); break;
		case 3: console.log('下载中,已经得到部分响应实体'); break;
		case 4: console.log('请求完成'); break;
	}


	if (oReq.readyState === 4 && oReq.status === 200) {
		console.log(oReq.responseText,  oReq.statusText);
	}
}


//====get 方法====
function getMsg(url) {
	var oReq = new XMLHttpRequest();
	oReq.open('GET', url, true);

	//onreadystatechange是当readyState属性改变时会调用它
	oReq.onreadystatechange = callback;
	oReq.send(null);	
}


//===post 方法===
function postMsg(url, msg) {
	var client = new XMLHttpRequest();
	client.open('POST', url, true);
	client.onreadystatechange = callback;

	// 设置请求头
	client.setRequestHeader('Content-Type', 'text/plain;charset=utf-8');
	client.send(msg);
}

//=== HEAD 方法===
//一般是获取服务端的响应码，maybe可以用来检测心跳(不过用udp协议 + retry的方式或许更好)
function fetchStatus(url) {
	var client = new XMLHttpRequest();
	client.onreadystatechange = function (event) {

		// 从请求完成结束后，判断状态。
		if (client.readyState === 4) {
			return client.status;
		}
	}

	// 使用HEAD方法。
	client.open('HEAD', 'http://yourdomain.com', true);

	client.send();
}





