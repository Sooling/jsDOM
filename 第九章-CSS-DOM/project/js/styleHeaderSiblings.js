function styleHeaderSiblings(tag,theclass){
	//传递参数，让函数更加通用化，即对函数进行抽象
	//为指定元素节点的下一个元素节点添加/修改样式
	if(!document.getElementsByTagName) return false;
	var elements = document.getElementsByTagName(tag);
	var elem;
	for(var i = 0; i < elements.length; i++){
		elem = getNextSiblings(elements[i].nextSibling)
		//elem.style.backgroundColor = "#eee";
		addClass(elem,"bg");
		/* elem.className = "XXX" */
	};
};
addLoadEvent(styleHeaderSiblings("h1","bg"));