//  https://jsfiddle.net/jLvus9rx/

//  获取元素距离文档边界的距离
var red = document.getElementById('red');
function getAbsolutePos(node) {
	var left = 0, top = 0;
  while(node) {
  	left += node.offsetLeft;
    top += node.offsetTop;
    node = node.offsetParent;
  }
  return {
  	left: left,
    top: top
  }
}

getAbsolutePos(red);


