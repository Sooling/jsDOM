function insertAfter(new_elem,target_elem){
	var parent = target_elem.parentNode;
	if(parent.lastChild == target_elem){
		parent.appendChild(new_elem);
	}else{
		parent.insertBefore(new_elem,target_elem.nextSibling);
	};
};