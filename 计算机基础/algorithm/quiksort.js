/**
 *  （1）在数据集之中，找一个基准点

　　 （2）建立两个数组，分别存储左边和右边的数组

　　 （3）利用递归进行下次比较
 */

function quiksort(arr) {
	var len = arr.length;
	var midPositon =  Math.floor(len / 2);
	var midNum, left = [], right = [];


	if (len <= 1) {return arr;}


	midNum = arr.splice(midPositon, 1);
	arr.forEach(function(item, index){
		if (item < midNum) {
			left.push(item);
		} else {
			right.push(item);
		}
	})
	return quiksort(left).concat(midNum, quiksort(right));
}


/**
 * 使用数组的sort方法
 * 
 */
function sort(arr){
	return arr.sort(function(a, b) {
		if (a < b) {
			return -1;
		} else if (a > b){
			return 1;
		} else {
			return 0;
		}
	})
}



