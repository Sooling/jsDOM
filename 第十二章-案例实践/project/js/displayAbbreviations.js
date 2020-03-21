function displayAbbreviations(){
	var abbrs = document.getElementsByTagName("abbr");
	if(abbrs.length < 1){
		return false;
	};
	var defs = new Array();
	for(var i = 0; i < abbrs.length; i ++){
		var key = abbrs[i].lastChild.nodeValue;
		var value = abbrs[i].getAttribute("title");
		defs[key] = value;
	};
	
	var dlist = document.createElement("dl");
	for(var key in defs){
		var dt = document.createElement("dt");
		var dd = document.createElement("dd");
		var dtText = document.createTextNode(key);
		var ddText = document.createTextNode(defs[key]);
		dt.appendChild(dtText);
		dd.appendChild(ddText);
		dlist.appendChild(dt);
		dlist.appendChild(dd);
	};
	
	var header = document.createElement("h3");
	var headerText = document.createTextNode("Abbreviations");
	header.appendChild(headerText);
	var article = document.getElementsByTagName("article")[0];
	article.appendChild(header);
	article.appendChild(dlist);
};
addLoadEvent(displayAbbreviations);