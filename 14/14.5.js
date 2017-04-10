var EventUtil={
	addHandler:function(element,type,handler){
		if(element.addEventListener){
			element.addEventListener(type,handler,false);
		}else if(element.attachEvent){
			element.attachEvent("on"+type,handler);
		}else{
			element["on"+type]=null;
		}
	},
	getEvent:function(event){
		return event?event:window.event;//返回对event对象的引用
	},
	getTarget:function(event){
		return event.target||event.srcElement;//返回事件目标
	},
	preventDefault:function(event){//取消事件的默认行为
		if (event.preventDefault) {
			event.preventDefault();
		}else{
			event.returnValue=false;
		}
	},
	stopPropagation:function(event){
		if (event.stopPropagation) {
			event.stopPropagation();
		}else{
			event.cancelBubble=true;
		}
	}
};
EventUtil.addHandler(window,"onload",function(){
	frames["richedit"].document.designMode="on";
});

// 转换粗体文本
frames["richedit"].document.execCommand("bold",false,null);
// 转换斜体文字
frames["richedit"].document.execCommand("italic",false,null);
// 创建指向www.wrox.com的链接
frames["richedit"].document.execCommand("createlink",false,"http://www.wrox.com");
// 格式化为1级标题
frames["richedit"].document.execCommand("formatblock",false,"<h1>");

/*同样的方法也适用于页面中的contenteditable属性为true的区块，只要把对框架的引用替换成当前窗口的document对象即可*/
// 转换粗体文本
document.execCommand("bold",false,null);
// 转换斜体文字
document.execCommand("italic",false,null);
// 创建指向www.wrox.com的链接
document.execCommand("createlink",false,"http://www.wrox.com");
// 格式化为1级标题
document.execCommand("formatblock",false,"<h1>");