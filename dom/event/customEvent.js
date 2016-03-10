/**
 * 创建自定义的浏览器事件
 * 方法：
 * 	1. 使用document.createEvent('CustomEvent');  & event.initCustomEvent()  //这种方法已经已过时
 * 	2. 使用CustomEvent构造器: new CustomEevnt();
 *  3. 使用Event()
 * demo: https://jsfiddle.net/kugua923/o44b941s/
 *
 * doc: https://developer.mozilla.org/zh-CN/docs/Web/Guide/Events/Creating_and_triggering_events
 */




/**
 * [createCustomEvent description] 根据caniuse,在IE下面CustomEvent方法有不能直接 new。只能使用第一种方式
 * @param  {[type]} eName [事件名字]
 * @param  {[type]} eInit [事件的初始化对象]
 * @return {[type]}       [description]
 */
function createCustomEvent(eName, eInit) {
    var eventObj = null;
    try {
        eventObj = new CustomEvent(eName, eInit);
    } catch (e) {
        console.log('catched: ', e);
        if (document.createEvent) {
            eventObj = document.createEvent('CustomEvent');
            eventObj.initCustomEvent(
                eName, //事件的名字
                eInit.bubbles, //是否冒泡
                eInit.cancelable, //是否可取消
                eInit.detail //event.detail的数据
            );
        } else {
        	eventObj = new Event(eName);
        }
    }
    return eventObj;
}



//testing: 


var divEle = document.querySelector('#clickme');
var parentEle = document.querySelector('#parent');


var eObj = createCustomEvent('biu', {
    bubbles: true,
    cancelable: false,
    detail: { msg: 'this is biu detail' }
});


divEle.addEventListener('biu', function(event) {
    console.log(event, 'from divEle');
}, false);


parentEle.addEventListener('biu', function(event) {
    console.log(event, 'from parentEle');
}, false);

divEle.dispatchEvent(eObj);
