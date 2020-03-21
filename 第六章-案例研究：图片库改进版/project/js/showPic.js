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
function countBodyChildren(){
	var body_element = document.getElementsByTagName('body')[0];
	//alert(body_element.childNodes.length);
	
};
window.onload = countBodyChildren;
//在文档加载时执行