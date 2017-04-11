var drawing=document.getElementById("drawing");
var drawing2=document.getElementById("drawing2");
var drawing3=document.getElementById("drawing3");
var drawing4=document.getElementById("drawing4");
var drawing5=document.getElementById("drawing5");
var drawing6=document.getElementById("drawing6");

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

	/*变换*/
	var context3=drawing3.getContext("2d");

	// 开始路径（钟表，变换原点）
	context3.beginPath();
	// 绘制外圆
	context3.arc(100,100,99,0,2*Math.PI,false);
	// 绘制内圆
	context3.moveTo(196,100)
	context3.arc(100,100,96,0,2*Math.PI,false);
	// 变换原点
	context3.translate(100,100);
	// 旋转
	context3.rotate(1);
	// 绘制分针
	context3.moveTo(0,0);
	context3.lineTo(0,-85);
	// 绘制时针
	context3.moveTo(0,0);
	context3.lineTo(-65,0);


	// 描边路径
	context3.stroke();

	// save()
	var context4=drawing4.getContext("2d");

	context4.fillStyle="#ff0000";//红色
	context4.save();

	context4.fillStyle="#00ff00";//绿色
	context4.translate(100,100);
	context4.save();

	context4.fillStyle="#0000ff";//蓝色
	context4.fillRect(0,0,80,80);//从点(100,100)开始绘制蓝色矩形

	context4.restore();//回到之前保存的设置
	context4.fillRect(10,10,80,80);//从点(110,110)开始绘制绿色矩形

	context4.restore();
	context4.fillRect(10,10,80,80);//从点(110,110)开始绘制绿色矩形


	// 绘制图像
	var context5=drawing5.getContext("2d");
	var image=document.images[0];
	context5.drawImage(image,10,10);//后两个参数分别为该图像绘制的起点坐标x和y

	// 若想改变绘制图像的大小，可增加两个参数，分别表示目标宽度和目标高度
	context5.drawImage(image,250,10,20,20);

	// 可将图像中的某个区域绘制到画布上
	// 以下9个参数分别表示：要绘制的图像，源图像的x坐标，源图像的y坐标，源图像的宽度，源图像的高度，目标图像的x坐标，目标图像的y坐标，目标图像的宽度，目标图像的高度
	context5.drawImage(image,0,10,50,50,0,100,40,60);

	// 绘制canvas的图像
	context5.drawImage(drawing3,100,200);

	/*阴影*/
	var context6=drawing6.getContext("2d");
	// 设置阴影
	context6.shadowOffsetX=5;
	context6.shadowOffsetY=5;
	context6.shadowBlur=4;
	context6.shadowColor="rgba(0,0,0,0.5)";

	// 绘制红色矩形
	context6.fillStyle="#ff0000";
	context6.fillRect(10,10,50,50);

	// 绘制蓝色矩形
	context6.fillStyle="rgba(0,0,255,1)";
	context6.fillRect(50,50,50,50);


}