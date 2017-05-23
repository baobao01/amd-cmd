define(function(require,exports,module){
    //console.log("this is module1");
    exports.changecolor = function(a){  //公开模块成员
			$(a).on("click",function(){
				$("body").css("background","red")
			})
		}
})