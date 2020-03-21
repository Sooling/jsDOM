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