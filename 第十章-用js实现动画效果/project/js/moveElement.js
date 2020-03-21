function moveElement(elementID,final_x,final_y,interval){
	if(!document.getElementById) return false;
	if(!document.getElementById(elementID)) return false;
	var elem = document.getElementById(elementID);
	
	 var xpos = parseInt(elem.style.left);
	 var ypos = parseInt(elem.style.top);
	 //获取当前位置；	
	 
	 if(elem.movement){
		 clearTimeout(elem.movement);
	 };
	 //作用是清除上一个动画队列，方便开始下一个动画队列	 
	  
	 var dist = 0;
	 //平滑过渡变量
	 
	 if(xpos == final_x && ypos == final_y){
		 return true;
	 };
	 if(xpos < final_x){
		 dist = Math.ceil((final_x - xpos)/10);
		 xpos+=dist;
	 };
	 if(xpos > final_x){
		 dist = Math.ceil((xpos - final_x)/10);
		 xpos-=dist;
	 };
	 if(ypos > final_y){
		 dist = Math.ceil((ypos - final_y)/10);
		 ypos-=dist;
	 };
	 if(ypos < final_y){
		 dist = Math.ceil((final_y - xpos)/10);
		 ypos+=dist;
	 };
	 //判断与目标点的位置，并作相应的处理
	 
	 elem.style.left = xpos + "px";
	 elem.style.top = ypos + "px";
	 
	 var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
	 
	 elem.movement = setTimeout(repeat,interval);
	 //内部调用，自循环
};