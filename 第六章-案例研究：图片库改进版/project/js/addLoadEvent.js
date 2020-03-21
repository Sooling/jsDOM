function addLoadEvent(func){
	var old_onload = window.onload;
	//把现有的window.onload的值存入变量
	if(typeof window.onload!="function"){
		//如果在这个处理函数上还没有绑定任何函数，就像平时一样把新函数添加给它
		window.onload = func;
	}else{
		//如果在这个函数上已经绑定了函数，就把新函数添加到现有指令的末尾
		window.onload = function(){
			old_onload();
			func();
		};
	};
};