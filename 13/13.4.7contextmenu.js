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
EventUtil.addHandler(window,"load", function (event) {
	var div=document.getElementById("myDiv");
	EventUtil.addHandler(div,"contextmenu",function(event){
		event=EventUtil.getEvent(event);
		EventUtil.preventDefault(event);
		var menu=document.getElementById("myMenu");
		menu.style.left=event.clientX+"px";
		menu.style.top=event.clientY+"px";
		menu.style.visibility="visible";
	});
	EventUtil.addHandler(document,"click",function(event){
		document.getElementById("myMenu").style.visibility="hidden";
	})
});


