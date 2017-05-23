define(function(require,exports,module){    // 定义模块
	var module1 = require("./module1.js");  //引入依赖模块
	require("jquery"); 
	module1.changecolor(".changecolor")  //使用模块中的方法
	$(".btn").on("click",function(){
		var val = $(this).attr("value");
		alert(val);
	})

})