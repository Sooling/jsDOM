function getNewContent(){
	var request = getHTTPObject();//获取电话号码
	var url = "submit.html";
	if(request){
		request.open("GET",url,true);//拨号
		request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		request.onreadystatechange = function(){//当对方接电话时触发
			//onreadystatechange是一个事件处理函数，它会在服务器给XMLHttpObject对象送回响应的时候被触发执行
			//在这个函数中，可以根据服务器的具体响应做相应的处理
			if(request.readyState == 4){//当对方提供信息时触发
				//readyState属性在不同阶段有5个不同的值
				//0表示未初始化
				//1表示正在加载
				//2表示加载完毕
				//3表示正在交互
				//4表示完成，只要值为4，就可以访问服务器发送回来的数据了
				console.log(request.readyState);
				if((request.status >= 200 && request.status < 300) || request.status == 304){
					//确保数据已经准备就绪
					/* var h1 = document.createElement("h1");
					var txt = document.createTextNode(request.responseText);
					h1.appendChild(txt);
					document.getElementById("new").appendChild(h1); */
					console.log(request.responseText);
				};				
			};			
		};
		/* request.setRequestHeader("name","guohui");	 */	
		request.send(null);//拨号人自己发送信息
		/* alert(request.getAllResponseHeaders()); */
	}else{
		alert("你的浏览器不支持XMLHttpRequest对象");
	};
};
addLoadEvent(getNewContent);