function insertAfter(new_element,target_element){
	var parent = target_element.parentNode;
	if(parent.lastChild == target_element){
		parent.appendChild(new_element);
	}else{
		parent.insertBefore(new_element,target_element.nextSibling);
	};
};