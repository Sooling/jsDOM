function stripeTable(){
	if(!document.getElementsByTagName) return false;
	var tables = document.getElementsByTagName("table");
	var changeColor,rows;
	changeColor = false;
	for(var i = 0; i < tables.length; i ++){		
		rows = tables[i].getElementsByTagName("tr");
		for(var j = 0; j < rows.length; j ++){
			if(changeColor != true){
				//如果changeColor值为true，则修改样式，并把changeColor赋值为false
				//rows[j].style.backgroundColor = "#ffc";
				addClass(rows[j],"changeColor")
				//修改class属性，而不是用DOM直接修改属性
				changeColor = true;
			}else{
				//否则changeColor赋值为true
				changeColor = false;
			};
			//偶数行变，奇数行不变。这是一种奇偶隔行变色的算法			
			
			
			rows[j].onmouseover = function(){
				this.oldColor = this.getAttribute("class");
				addClass(this,"highlight");
			};
			rows[j].onmouseout = function(){
				this.setAttribute("class",this.oldColor);
			};
			//字体加粗/正常
		};
	};
};
addLoadEvent(stripeTable);