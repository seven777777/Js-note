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


var drawing=document.getElementById("drawing");
var drawing2=document.getElementById("drawing2");

// 确定浏览器是否支持<canvas>元素
if (drawing.getContext) {
	var context=drawing.getContext("2d");
	// 描边
	context.strokeStyle="red";
	// 填充
	context.fillStyle="#0000ff";

	// 绘制蓝色矩形
	context.fillRect(10,10,50,50);
	// 绘制半透明蓝色矩形
	context.fillStyle="rgba(0,0,255,0.5)";
	context.fillRect(30,30,50,50);

	// 绘制红色描边矩形
	context.strokeRect(20,20,50,50);
	// 绘制半透明蓝色描边矩形
	context.strokeStyle="rgba(0,0,255,0.5)";
	context.strokeRect(40,40,50,50);

	// 在两个蓝色矩形重叠处清除一个小矩形
	context.clearRect(40,40,10,10);


	/*绘制不带数字的钟表盘*/
	var context2=drawing2.getContext("2d");
	// 开始路径
	context2.beginPath();

	// 绘制外圆
	context2.arc(100,100,99,0,2*Math.PI,false);

	// 绘制内圆
	context2.moveTo(194,100);
	context2.arc(100,100,94,0,2*Math.PI,false);

	// 绘制指针
	context2.moveTo(100,20);
	context2.lineTo(100,100);
	context2.lineTo(35,100);

	// 描边路径
	context2.strokeStyle="red";
	context2.stroke();

	// 为表盘描绘数字12
	context2.font="bold 14px Arial";
	context2.textAlign="center";
	context2.textBaseline="middle";
	context2.fillText("12",100,20);


	// 需要将文本控制在某一区域
	var fontSize=100;
	context2.font=fontSize+"px Arial";

	while(context2.measureText("Hello world!").width>140){
		fontSize--;
		context2.font=fontSize+"px Arial";
	}

	context2.fillText("Hello world!",120,120)
	context2.fillText("Font size is"+fontSize+"px",100,170)

}