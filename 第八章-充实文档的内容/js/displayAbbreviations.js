function displayAbbreviations(){
	if(!document.getElementById || !document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
	//对象检测
	
	var abbreviations = document.getElementsByTagName("abbr");
	if(abbreviations.length<1) return false;
	var defs = new Array();
	//创建数组，存放定义列表的键和值
	
	for(var i = 0; i < abbreviations.length; i ++){
		var current_abrr = abbreviations[i];
		if(current_abrr.childNodes.length < 1) continue;
		//针对IE早期版本的平稳退化
		
		var definition = current_abrr.getAttribute("title");
		var key = current_abrr.firstChild.nodeValue;
		defs[key] = definition;
	};
	var dlist = document.createElement("dl");
	for(var key in defs){
		var dtitle = document.createElement("dt");
		var dtitle_text = document.createTextNode(key);
		//创建dt元素和文本节点
		
		var ddesc = document.createElement("dd");
		var ddesc_text = document.createTextNode(defs[key]);
		//创建dd元素和文本节点
		
		dtitle.appendChild(dtitle_text);
		ddesc.appendChild(ddesc_text);
		dlist.appendChild(dtitle);
		dlist.appendChild(ddesc);
	};
	//创建dl元素并添加内容
	if(dlist.childNodes.length < 1) return false;
	//因为数组defs为空，不会创建任何dt和dl元素，子节点的length为0，返回出去
	
	var header = document.createElement("h2");
	var header_text = document.createTextNode("Abbrebiations");
	header.appendChild(header_text);
	//创建并添加标题
	
	var info = document.getElementById("info");
	insertAfter(dlist,info);
	insertAfter(header,info);
	//把缩略语表和标题插入到文中
};
addLoadEvent(displayAbbreviations);