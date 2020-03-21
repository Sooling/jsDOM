function showSection(id){
	if(!document.getElementsByTagName("section")){
		return false;
	};
	var sections = document.getElementsByTagName("section");
	for(var i = 0; i < sections.length; i++){
		if(sections[i].getAttribute("id") != id){
			sections[i].style.display = "none";
		}else{
			sections[i].style.display = "block";
		};
	};
};

function prepareShowSection(){
	var articles = document.getElementsByTagName("article");
	var navs = articles[0].getElementsByTagName("nav");
	var links = navs[0].getElementsByTagName("a");
	for(var i = 0; i < links.length; i ++){
		var sectionID = links[i].getAttribute("href").split("#")[1];
		//将处理过a标签的href值赋值给变量
		if(!links[i].getAttribute("href")){
			continue;
		};
		/* console.log(sectionID); */
		document.getElementById(sectionID).style.display = "none";
		document.getElementsByTagName("section")[0].style.display = "block";
		
		links[i].sectionID = sectionID;
		links[i].onclick = function(){
			showSection(this.sectionID);
			return false;
		};
	};
};
addLoadEvent(prepareShowSection);