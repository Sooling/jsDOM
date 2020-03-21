function preparelinks(){
	if(!document.getElementsByTagName) return false;
	//对象检测
	var links = document.getElementsByTagName("a");
	for (var i=0; i<links.length; i++){
		if(links[i].getAttribute("class")=="popup"){
			links[i].onclick=function(){
				popUp(this.getAttribute("href"));
				return false;
			};			
		};
	};
};
window.onload=preparelinks;
//在文档加载时执行preparelinks函数;