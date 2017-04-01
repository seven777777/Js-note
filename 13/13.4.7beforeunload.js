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
/*beforeunload*/
EventUtil.addHandler(window,"beforeunload",function(event) {
	event=EventUtil.getEvent(event);
	var message="确定要离开？";
	event.returnValue=message;
	return message;
});