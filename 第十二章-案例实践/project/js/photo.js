function createPlaceholder(){
	var pPlaceholder = document.createElement("p");
	var pPlaceholderText = document.createTextNode("Choose a image");
	pPlaceholder.setAttribute("id","pPlaceholder");
	pPlaceholder.appendChild(pPlaceholderText);
	
	var imgPlaceholder = document.createElement("img");
	imgPlaceholder.setAttribute("id","imgPlaceholder");
	imgPlaceholder.setAttribute("src","../image/placeholder.gif");
	
	var imagegallery = document.getElementById("imagegallery");
	insertAfter(imgPlaceholder,imagegallery);
	insertAfter(pPlaceholder,imagegallery);
};
//添加占位符图片

function showPic(src,elem){
	var imgPlaceholder = document.getElementById("imgPlaceholder");
	imgPlaceholder.setAttribute("src",src);
	
	var image = elem.getElementsByTagName("img");
	var text = image[0].getAttribute("alt");
	var pPlaceholder = document.getElementById("pPlaceholder");
	/* var pPlaceholderText = document.createTextNode(text);
	pPlaceholder.appendChild(pPlaceholderText); */
	pPlaceholder.firstChild.nodeValue = text;
};

function prepareShowPic(){
	createPlaceholder();
	
	var imagegallery = document.getElementById("imagegallery");
	var imageLinks = imagegallery.getElementsByTagName("a");
	
	for(var i = 0; i < imageLinks.length; i ++){
		if(!imageLinks[i].getAttribute("href")){
			continue;
		};
		
		imageLinks[i].onclick=function(){			
			var source = this.getAttribute("href");
			showPic(source,this);			
			return false;
		};
	};
	
};

addLoadEvent(prepareShowPic);