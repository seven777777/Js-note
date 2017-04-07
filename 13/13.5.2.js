var btn=document.getElementById("myBtn");
/*btn.onclick=function(){
	//先执行某些操作
	document.getElementById("myDiv").innerHTML="Processing...";
};*/
/*当按钮从页面移除时，他还带着一个事件处理程序，占用内存，最好手动移除，如下*/
btn.onclick=function(){
	//先执行某些操作
	btn.onclick=null;
	document.getElementById("myDiv").innerHTML="Processing...";
};