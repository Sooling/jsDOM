function prepareSlideshow(){
	if(!document.getElementById) return false;
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById("linklist") || !document.getElementsByTagName("a") || !document.getElementById("preview")) return false;
	
	var list = document.getElementById("linklist");
	var preview = document.getElementById("preview");
	var link = list.getElementsByTagName("a");
	
	preview.style.position = "absolute";
	preview.style.left = "0px";
	preview.style.top = "0px";
	
	for (var i = 0; i < link.length; i ++){
		link[i].index = i+1;
		link[i].onmouseover = function(){
			moveElement("preview",-100*this.index,0,10);
		};
		
		/* link[i].onmouseout = function(){
			moveElement("preview",0,0,10);
		}; */
	};
};
addLoadEvent(prepareSlideshow);