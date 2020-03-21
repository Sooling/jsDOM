function prepareGallery(){
	if(!document.getElementById || !document.getElementsByTagName){
		return false;
	};	
	if(!document.getElementById("imagegallery")){
		return false;
	};
	//对象检测
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	for (var i = 0; i < links.length; i ++){
		links[i].onclick = function(){
			return !showPic(this);
			//如果showPic执行成功，返回true，取反为false，取消默认行为；否则返回false，取反为true，执行默认行为（本例是点击打开链接）
			//return false;
			//取消默认行为
		};
	};
};
addLoadEvent(prepareGallery);