// var EventBus = function CreateEventBus() {
// 	var eventMap = {};

// 	var EventBus = {
// 	    on : function(eventType, handler) {
// 	        //multiple event listener
// 	        if (!eventMap[eventType]) {
// 	            eventMap[eventType] = [];
// 	        }
// 	        eventMap[eventType].push(handler);
// 	    },

// 	    off : function(eventType, handler) {
// 	        for (var i = 0; i < eventMap[eventType].length; i++) {
// 	            if (eventMap[eventType][i] === handler) {
// 	                eventMap[eventType].splice(i, 1);
// 	                break;
// 	            }
// 	        }
// 	    },

// 	    fire : function(event) {
// 	        var eventType = event.type;
// 	        if (eventMap && eventMap[eventType]) {
// 	            for (var i = 0; i < eventMap[eventType].length; i++) {
// 	                eventMap[eventType][i](event);
// 	            }
// 	        }
// 	    }
// 	};
// 	return EventBus;
// }

// // 事件订阅代码

// EventBus.on("someEvent", function(event) {
//     // 这里处理事件
//     var c = event.data.a + event.data.b;
// });

// EventBus.fire({
//     type: "someEvent",
//     data: {
//         aaa: 1,
//         bbb: 2
//     }
// });


// var gua = window.gua = {};
// gua.on = function(name, callback) {
// 	var 
// }

(function(global){
	var gua = global.gua;
	var eventMap = {};
	gua.on = function(name, callback) {
		var list = eventMap[name] || (eventMap[name] = []);
		list.push(callback);
		return gua;
	}

	gua.fire = function(name, data) {
		var list = eventMap[name] || [];
		list.forEach(function(callback, index) {
			callback(data);
		})
		return gua;
	}

	gua.remove = function(name, callback) {
		var list = eventMap[name];
		var index = list.indexOf(callback);
		if (index > -1) {
			list.splice(index, 1);
		} else {
			delete eventMap[name];
		}
		return gua;
	}
	gua._eventMap = eventMap;
})(window)