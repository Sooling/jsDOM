function moveMessage(){
	if(!document.getElementById) return false;
	if(!document.getElementById("message")) return false;
	var elem = document.getElementById("message");
	
	 var xpos = parseInt(elem.style.left);
	 var ypos = parseInt(elem.style.top);
	 //获取当前位置；
	 
	 if(xpos == 200 && ypos == 300){
		 return true;
	 };
	 if(xpos < 200){
		 xpos ++;
	 };
	 if(xpos > 200){
		 xpos --;
	 };
	 if(ypos > 300){
		 ypos --;
	 };
	 if(ypos < 300){
		 ypos ++;
	 };
	 
	 elem.style.left = xpos + "px";
	 elem.style.top = ypos + "px";
	 
	 movent = setTimeout("moveMessage()",10);
	 //内部调用，自循环
};