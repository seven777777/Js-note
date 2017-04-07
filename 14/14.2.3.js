(function(){
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
	function tabForward(event){
		event=EventUtil.getEvent(event);
		var target=EventUtil.getTarget(event);

		if (target.value.length==target.maxLength) {
			var form=target.form;
			for (var i = 0,len=form.elements.length; i < len; i++){
				if (form.elements[i]==target) {
					if (form.elements[i+1]) {
						form.elements[i+1].focus();
					}
					return;
				}
			}
		}
	};
	var textbox1=document.getElementById("txtTel1");
	var textbox2=document.getElementById("txtTel2");
	var textbox3=document.getElementById("txtTel3");

	EventUtil.addHandler(textbox1,"keyup",tabForward);
	EventUtil.addHandler(textbox2,"keyup",tabForward);
	EventUtil.addHandler(textbox3,"keyup",tabForward);
})();