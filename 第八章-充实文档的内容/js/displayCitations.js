function displayCitations(){
	if(!document.getElementsByTagName || !document.createTextNode || !document.createElement) return false;
	
	var quotes = document.getElementsByTagName("blockquote");
	//获取所有的quotes元素
	for(var i = 0; i < quotes.length; i ++){
		if(!quotes[i].getAttribute("cite")) continue;
		//如果该quotes元素没有cite属性，则跳出继续下一次循环
		var url = quotes[i].getAttribute("cite");
		var link = document.createElement("a");
		var link_text = document.createTextNode(url);
		link.appendChild(link_text);
		link.setAttribute("href",url);
		link.setAttribute("target","_blank");
		
		var quoteElements = quotes[i].getElementsByTagName("*");
		//获取所有的子元素节点
		if(quoteElements.length < 1) continue;
		var elem = quoteElements[quoteElements.length-1];
		//获取最后一个子元素节点
		
		var supscript = document.createElement("sup");
		supscript.appendChild(link);
		elem.appendChild(supscript);
	};
};
addLoadEvent(displayCitations);