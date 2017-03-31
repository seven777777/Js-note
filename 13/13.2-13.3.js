/*
跨浏览器事件处理程序
addHandler()
removeHandler()
接受三个参数：
1.要操作的元素
2.事件名称
3.事件处理程序函数
*/
var EventUtil={
	addHandler:function(element,type,handler){
		if(element.addEventListener){
			element.addEventListener(type,handler,false);
		}else if(element.attachEvent){
			element.attachEvent("on"+type,handler);
		}else{
			element["on"+type]=null;
		}
	}
};
var btn=document.getElementById("myBtn");
var handler=function(){
	alert("clicked");
};
EventUtil.addHandler(btn,"click",handler);
// ...
EventUtil.removeHandler(btn,"click",handler);

/*
跨浏览器的事件对象
*/
var EventUtil={
	addHandler:function(element,type,handler){
		// ...
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
	removeHandler:function(element,type,handler){
		//...
	},
	stopPropagation:function(event){
		if (event.stopPropagation) {
			event.stopPropagation();
		}else{
			event.cancelBubble=true;
		}
	}
};

/*
使用getEvent()
必须假设有一个事件对象传入到事件处理程序中，且要把该变量传给这个方法
*/
btn.onclick=function(event){
	event=EventUtil.getEvent(event);
};
/*使用getTarget()*/
btn.onclick=function(event){
	event=EventUtil.getEvent(event);
	var target=EventUtil.getTarget(event);
};
/*使用preventDefault()*/
var link=document.getElementById("myLink");
link.onclick=function(event){
	event=EventUtil.getEvent(event);
	EventUtil.preventDefault(event);
};
/*使用stopPropagation()*/
var btn=document.getElementById("myBtn");
btn.onclick=function(event){
	alert("Clicked");
	event=EventUtil.getEvent(event);
	EventUtil.stopPropagation(event);
};
document.body.onclick=function(event){
	alert("body clicked");
}