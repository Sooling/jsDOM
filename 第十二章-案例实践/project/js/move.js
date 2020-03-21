function moveElement(elementID,final_x,final_y,interval){
	if(!document.getElementById(elementID)){
		return false;
	};
	
	var elem = document.getElementById(elementID);
	if(elem.moveElem){
		clearTimeout(elem.moveElem);
	};
	//清除上一个动画队列
	
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);
	if(xpos == final_x && ypos == final_y){
		return true;
	};
	
	if(xpos < final_x){
		xpos += Math.ceil((final_x-xpos)/10);
	}else{
		xpos -= Math.ceil((xpos-final_x)/10);
	};
	
	if(ypos < final_y){
		/* console.log(ypos);
		console.log(final_y); */
		ypos += Math.ceil((final_y-ypos)/10);
	}else{
		ypos -= Math.ceil((ypos-final_y)/10);
	};
	
	elem.style.left = xpos + "px";
	elem.style.top = ypos + "px";
	
	var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
	elem.moveElem = setTimeout(repeat,interval);
};
//移动元素

function prepareSlideShow(){
	var intro = document.getElementById("intro");
	var wrapDiv = document.createElement("div");
	wrapDiv.style.position = "relative";
	wrapDiv.style.width = "150px";
	wrapDiv.style.height = "150px";
	wrapDiv.style.overflow = "hidden";
	var outImg = document.createElement("img");
	outImg.setAttribute("id","outImg");
	outImg.setAttribute("src","../image/frame.gif");
	outImg.style.position = "absolute";
	outImg.style.top = 0;
	outImg.style.left = 0;
	outImg.style.borderWidth = 0;
	outImg.style.zIndex = 99;
	var moveImg = document.createElement("img");
	moveImg.setAttribute("id","moveImg");
	moveImg.setAttribute("src","../image/slideshow.gif");
	moveImg.style.position = "absolute";
	moveImg.style.borderWidth = 0;
	moveImg.style.top = 0;
	moveImg.style.left = 0;
	wrapDiv.appendChild(outImg);
	wrapDiv.appendChild(moveImg);
	insertAfter(wrapDiv,intro);
	
	var links = intro.getElementsByTagName("a");
	for(var i = 0; i < links.length; i ++){
		links[i].index = i+1;
		//索引
		
		links[i].onmouseover = function(){
			moveElement("moveImg",-this.index*150,0,5);
		};
	};
};
addLoadEvent(prepareSlideShow);