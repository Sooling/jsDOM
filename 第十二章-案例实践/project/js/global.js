function addLoadEvent(func){
	var old_onload = window.onload;
	if(typeof window.onload != "function"){
		window.onload = func;
	}else{
		window.onload = function(){
			old_onload();
			func();
		};
	};
};
//加载事件

function insertAfter(newElement,targetElement){
	var parent = targetElement.parentNode;
	if(targetElement == parent.lastChild){
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	};
};
//元素节点插到指定元素后面

function addClass(element,className){
	if(!element.className){
		element.className = className;
	}else{
		var newClassName = "";
		newClassName += element.className;
		newClassName += " ";
		newClassName += className;
		element.className = newClassName;
	};
};
//为元素节点添加class

function lineHightPage(){
	if(!document.getElementsByName("header") || !document.getElementsByName("nav") || !document.getElementsByName("a")){
		return false;
	};
	//对象检测
	
	var header = document.getElementsByTagName("header");
	var nav = header[0].getElementsByTagName("nav");
	var links = nav[0].getElementsByTagName("a");
	//获取元素
	
	for(var i = 0; i < links.length; i ++){
		var linkUrl = links[i].getAttribute("href");
		//获取当前a元素的href属性值
		
		if(window.location.href.indexOf(linkUrl) != -1){
			links[i].setAttribute("class","here");
			//相应页面高亮显示导航条内容	
			
			var linkText = links[i].lastChild.nodeValue.toLowerCase();
			document.getElementsByTagName("body")[0].setAttribute("id",linkText);
			//修改当前body的id属性值，以便于改变页面背景
		};			
	};
};
addLoadEvent(lineHightPage);
//高亮显示

