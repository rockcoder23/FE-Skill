/**
 * 主要场景是将异步的回调化为链式调用
 * 三种状态： pending， fullfill, rejected
 *
 * Reference: http://liubin.org/promises-book/
 * Refernce: http://wiki.jikexueyuan.com/project/javascript-promise-mini-book/how-to-write-promise.html
 * https://github.com/amfe/article/issues/22
 */
 var promise = new Promise(function(resolve, reject) {
 	if (....) { //succeed
 		resolve();
 	} else { //fail
 		reject();
 	}
 })


 promise.then(onFulfilled, onRejected);