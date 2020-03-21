function addClass(element,value){
	var new_class_name;
	if(!element.className){
		element.className = value;
	}else{
		new_class_name = element.className;
		new_class_name +=" ";
		new_class_name +=value;
		element.className = new_class_name;
	};
};