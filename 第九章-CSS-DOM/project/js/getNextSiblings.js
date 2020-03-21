function getNextSiblings(node){
	//寻找元素节点的下一个元素节点,node参数为元素的下一个节点
	if(node.nodeType == 1){
		//如果元素的下一个节点是元素节点就返回出去
		return node;
	};
	if(node.nextSibling){
		//否则，如果元素的下下个节点存在，则在此执行该函数。
		return getNextSiblings(node.nextSibling);
	};
	return null;
};