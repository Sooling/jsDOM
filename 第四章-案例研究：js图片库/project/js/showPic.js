function showPic(whichpic){
	//把图片显示到占位符图片中
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src",source);	
	var text = whichpic.getAttribute("title");
	//获取title的值；
	var description = document.getElementById("description");
	description.firstChild.nodeValue = text;
	//设置p元素的文本内容为a元素title属性的值
};
function countBodyChildren(){
	var body_element = document.getElementsByTagName('body')[0];
	//alert(body_element.childNodes.length);
	
};
window.onload = countBodyChildren;
//在文档加载时执行