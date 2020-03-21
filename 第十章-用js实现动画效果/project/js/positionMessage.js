function positionMessage(){
	if(!document.getElementById) return false;
	if(!document.getElementById("message")) return false;
	
	var elem = document.getElementById("message");
	elem.style.position = "absolute";
	elem.style.top = "100px";
	elem.style.left = "50px";
	//给要移动的元素给予定位和初始位置
	
	//movent = setTimeout("moveMessage()",10);
	//moveMessage();
	moveElement("message",200,300,10);
	//传入id信息字符串
};
addLoadEvent(positionMessage);