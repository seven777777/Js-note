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
var form=document.getElementById("myForm");
/*下面代码会阻止表单提交*/
EventUtil.addHandler(form,"submit",function(event){
	//取得事件对象
	event=EventUtil.getEvent(event);
	//阻止默认事件
	EventUtil.preventDefault(event);
})

/*
在js中，以编程方式调用submit()方法也可以提交表单
无需表单包含提交按钮
不会触发submit事件，因此调用前先验证表单数据
*/
//提交表单
form.submit();

/*
用户反复单击提交按钮解决方法：
1.第一次提交表单后就禁用提交按钮
2.利用onsubmit事件处理程序取消后续表单提交操作
*/


/*下面代码会阻止重置表单*/
EventUtil.addHandler(form,"reset",function(event){
	//取得事件对象
	event=EventUtil.getEvent(event);
	//阻止默认事件
	EventUtil.preventDefault(event);
})

/*通过js重置表单*/
form.reset();