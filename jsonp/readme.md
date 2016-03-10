### 跨域的其他方法
1. jsonp

2. 子父域名之间，可以修改document.domain来跨子域。

3. 使用h5的window.postMessage
https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage

4. 使用window.name来实现跨域 + iframe
http://www.cnblogs.com/rainman/archive/2011/02/21/1960044.html

5. 服务端使用Access-Control-Allow-Origin来控制哪些域名可以访问