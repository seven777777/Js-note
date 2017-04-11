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

//取得元素引用
var player=document.getElementById("player"),
	btn=document.getElementById("video-btn"),
	curtime=document.getElementById("curtime"),
	duration=document.getElementById("duration");

// 更新播放时间
EventUtil.addHandler(player,"canplay",function(){
	duration.innerHTML=player.duration.toFixed(2);
})

// 为按钮添加事件处理程序
EventUtil.addHandler(btn,"click",function (event) {
	if (player.paused) {
		player.play();
		btn.value="Pause";
	}else{
		player.pause();
		btn.value="Play";
	}
});

// 定时更新当前时间
setInterval(function(){
	curtime.innerHTML=player.currentTime.toFixed(2);
},10);