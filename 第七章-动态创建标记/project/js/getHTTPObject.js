function getHTTPObject(){
	if(typeof XMLHttpRequest == "undefined"){
		XMLHttpRequest = function(){
			//使用兼容IE各个版本的代码
			try{
				return new ActiveXObject("Msxml2.XMLHTTP.6.0");
			}catch (e){}
			try{
				return new ActiveXObject("Msxml2.XMLHTTP.3.0");
			}catch (e){}
			try{
				return new ActiveXObject("Msxml2.XMLHTTP");
			}catch (e){}
			return false;
		};
	};
	return new XMLHttpRequest();	
};
//getHTTPObject通过对象检测技术检测XMLHTTPRquest。如果失败，则继续检测其他方法，最终返回false或一个新的XMLHttpRequest对象。
