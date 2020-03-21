function getHttpObject(){
	if(!XMLHttpRequest){
		XMLHttpRequest = function(){
			try{
				return new ActiveXObject("Msxml2.XMLHTTP.6.0");
			}catch(e){}
			try{
				return new ActiveXObject("Msxml2.XMLHTTP.3.0");
			}catch(e){}
			try{
				return new ActiveXObject("Msxml2.XMLHTTP");
			}catch(e){}
			return false;
		};
	};
	return new XMLHttpRequest();
};

function getContent(whichform,targetElement){
	var dataParts = new Array();
	for(var i = 0; i < whichform.elements.length; i ++){
		var elem = whichform.elements[i];
		console.log(elem);
		if(elem.name == "" || elem.name == "fieldset") continue;
		dataParts[i] = elem.name + "=" + encodeURIComponent(elem.value);
	};
	console.log(dataParts);
	var data = dataParts.join("&");
	console.log(data);
	//获得表单数据
	
	while(targetElement.hasChildNodes()){
		targetElement.removeChild(targetElement.lastChild);
	};
	//删除原有的页面信息
	
	var request = getHttpObject();
	console.log(request);
	if(!request){
		return false;
	};
	console.log(whichform.getAttribute("action"));
	
	request.open("GET",whichform.getAttribute("action"),true);
	request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	request.onreadystatechange = function(){
		if(request.readyState == 4){
			console.log(request.readyState);
			console.log(request.status);
			/* console.log(request.responseText); */
			if((request.status >= 200 && request.status < 300) || request.status == 304){
				console.log(request.status);
				var matches = request.responseText.match(/<article>([\s\S]+)<\/article>/);
				/* console.log(matches[1]); */
				if(matches.length > 0){
					targetElement.innerHTML = matches[1];
				};
			};
		};
	};
	request.send(data);
	return true;
};

function prepareForms(){
	var forms = document.getElementsByTagName("form");
	for (var j = 0; j < forms.length; j ++){
		var thisForm = forms[j];
		thisForm.onsubmit = function(){
			var targetElement = document.getElementsByTagName("article")[0];
			if(getContent(this,targetElement)){
				return false;
				//如果Ajax请求发送成功，则让事件处理函数返回false，以便浏览器重复提交表单
			}else{
				return true;
			}
		};
	};
};

addLoadEvent(prepareForms);