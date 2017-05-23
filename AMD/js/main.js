define(["module1"],function(m1){
	console.log(222);
	m1.hello();  //调用所依赖模块中的方法
	m1.hi(".changecolor");
	m1.click(".btn");

})