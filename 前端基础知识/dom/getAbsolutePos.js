/**
 *  doc: https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetParent
 * 
 *  demo: https://jsfiddle.net/jLvus9rx/
 *
 * 	
 * getBoundingClientRect: 也能返回元素相对视口的上下左右值，注意right值，是元素相对于视口左边沿的距离，left值，是元素相对于视口右边沿的值；
 * 
 */

//  获取元素距离文档边界的距离
var red = document.getElementById('red');
function getAbsolutePos(node) {
	var left = 0, top = 0;
  while(node) {
  	left += node.offsetLeft;
    top += node.offsetTop;
    node = node.offsetParent;  //父级元素的position属性不为static为node.offsetParent的值，即offsetParent为最近一个定位了的父元素或者table元素。
  }
  return {
  	left: left,
    top: top
  }
}

getAbsolutePos(red);


