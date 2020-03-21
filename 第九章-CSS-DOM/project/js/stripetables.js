function stripeTable(){
	if(!document.getElementsByTagName) return false;
	var tables = document.getElementsByTagName("table");
	var odd,rows;
	odd = false;
	for(var i = 0; i < tables.length; i ++){		
		rows = tables[i].getElementsByTagName("tr");
		for(var j = 0; j < rows.length; j ++){
			if(odd != true){
				//如果odd值为true，则修改样式，并把odd赋值为false
				//rows[j].style.backgroundColor = "#ffc";
				addClass(rows[j],"odd")
				//修改class属性，而不是用DOM直接修改属性
				odd = true;
			}else{
				//否则odd赋值为true
				odd = false;
			};
			//偶数行变，奇数行不变。这是一种奇偶隔行变色的算法
			
			rows[j].onmouseover = function(){
				this.style.fontWeight = "bold";
			};
			rows[j].onmouseout = function(){
				this.style.fontWeight = "normal";
			};
			//字体加粗/正常
		};
	};
};
addLoadEvent(stripeTable);