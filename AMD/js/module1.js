define(["jquery"],function(){
	return{    //公开模块成员，可以用return，exports，module.exports公开
		hello:function(){
			alert("hello")
		},
		hi:function(a){
			$(a).on("click",function(){
				$("body").css("background","red")
			})
		},
		click:function(b){
			$(b).on("click",function(){
				var val = $(this).attr("value");
				alert(val);
			})
		}
	}
	
})