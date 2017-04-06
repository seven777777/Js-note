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
/*未使用事件代理绑定事件*/
/*var item1=document.getElementById("goSomewhere");
var item2=document.getElementById("doSomething");
var item3=document.getElementById("sayHi");
EventUtil.addHandler(item1,"click",function(event){
	location.href="http://www.wrox.com";
});
EventUtil.addHandler(item2,"click",function(event){
	document.title="I changed the document's title";
});
EventUtil.addHandler(item3,"click",function(event){
	alert('hi');
});*/


/*使用事件代理*/
var list=document.getElementById("mylinks");

EventUtil.addHandler(list,"click", function (event) {
	event=EventUtil.getEvent(event);
	var target=EventUtil.getTarget(event);

	switch(target.id){
		case "doSomething":
			document.title="I changed the document's title";
			break;

		case "goSomewhere":
			location.href="http://www.wrox.com";
			break;

		case "sayHi":
			alert('hi');
			break;
	}
});


