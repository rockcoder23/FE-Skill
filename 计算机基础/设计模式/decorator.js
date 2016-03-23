/**
 * 装饰者模式
 */


function Macbook() {
	this.cost = function() {
		return 10000;
	}
}

function FourGMemoryMacbook(macbook) {
	this.cost = function() {
		return macbook.cost() + 200;
	}
}

function SSDDiskMacbook(macbook) {
	this.cost = function() {
		return macbook.cost() + 500;
	}
}

function InsuranceMacbook(macbook) {
	this.cost = function() {
		return macbook.cost() + 250;
	}
}


// ====test
var myMacbook = new InsuranceMacbook(new SSDDiskMacbook(new FourGMemoryMacbook(new Macbook())));

console.log(myMacbook.cost());