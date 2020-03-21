//动态创建占位符图片
function preparePlaceholder(){
	if(!document.createElement){
		return false;
	};
	if(!document.createTextNode){
		return false;
	};
	if(!document.getElementById){
		return false;
	};
	if(!document.getElementById("imagegallery")){
		return false;
	};
	
	var placeholder = document.createElement("img");
	placeholder.setAttribute("id","placeholder");
	placeholder.setAttribute("src","../../images/placeholder.jpg");
	placeholder.setAttribute("alt","my image gallery");
	var description = document.createElement("p");
	description.setAttribute("id","description");
	var desctext = document.createTextNode("Choose an image<");
	description.appendChild(desctext);
	
	var imagegallery = document.getElementById("imagegallery");
	//imagegallery.parentNode.insertBefore(placeholder,imagegallery);
	//imagegallery.parentNode.insertBefore(description,imagegallery);
	insertAfter(description,imagegallery);
	insertAfter(placeholder,imagegallery);
};
addLoadEvent(preparePlaceholder);
//动态创建占位符图片

//动态效果实现
function showPic(whichpic){
	if(!document.getElementById("placeholder")){
		return false;
	};//如果不存在占位符图片，返回false
	
	//把图片显示到占位符图片中
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src",source);	
	
	var text = whichpic.getAttribute("title")?whichpic.getAttribute("title"):"";
	//获取title的值；如果title属性的值存在，则赋值给变量text，否则赋值为空字符串
	if(!document.getElementById("description")){
		return false;
	};
	var description = document.getElementById("description");
	if(description.firstChild.nodeType == 3){
		//检查description元素的第一个子节点是否为文本节点
		description.firstChild.nodeValue = text;
		//设置p元素的文本内容为a元素title属性的值
	};
	return true;
	//showPic函数执行成功，返回true
};
//动态效果实现

//为元素绑定事件处理函数
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
//为元素绑定事件处理函数


/*
function countBodyChildren(){
	var body_element = document.getElementsByTagName('body')[0];
	//alert(body_element.childNodes.length);
	
};
window.onload = countBodyChildren;
//在文档加载时执行
*/
