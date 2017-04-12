# 第12章 DOM2和DOM3
## 12.3 DOM元素遍历
* [NodeIterator](https://seven777777.github.io/Js-note/12.3traverse/NodeIterator.html)
* [TreeWalker](https://seven777777.github.io/Js-note/12.3traverse/TreeWalker.html)

## 12.4 [DOM中的范围](https://seven777777.github.io/Js-note/12.4range/12.4.1.html)

# 第13章 事件
## 13.2-13.3 [跨浏览器事件处理程序&跨浏览器的事件对象](https://github.com/seven777777/Js-note/blob/gh-pages/13/13.2-13.3.js)
## 13.4 事件类型
1. **UI事件**（用户与页面元素交互时触发）DOMActivate、load、unload、abort、error、select、resize、scroll
2. **焦点事件**（元素获得或失去焦点时触发）blur、DOMFocusIn、DOMFocusOut、focus、focusin、focusout
3. **鼠标与滚轮事件**（用户通过鼠标在页面执行操作时触发&使用鼠标滚轮时触发）click、dblclick、mousedown、mouseenter、mouseleave、mousemove、mouseout、mouseover、mouseup 
	* [判断鼠标滚轮方向demo](https://seven777777.github.io/Js-note/13/13.4.3.html)
4. **键盘与文本事件**（用户通过键盘在页面执行操作时触发&在文档中输入文本时触发）
	* textInput：在可编辑区域输入字符时触发，其event对象有以下属性
		* data 表示用户输入的字符
		* inputMethod 表示文本输入到文本框中的方式
			* 0：不确定、1：键盘、2：粘贴、3：拖放、4：IME、5：通过在表单中选择某一项输入的、6：手写（如手写笔）、7：语音、8：几种方式组合、9：脚本
5. **复合事件**（当IME即Input Method Editor，输入法编辑器，输入字符时触发）
6. **变动事件**（当底层DOM结构发生变化时触发）
7. **HTML5事件**
	* [contextmenu:显示自定义上下文菜单](https://seven777777.github.io/Js-note/13/13.4.7contextmenu.html)
	* [beforeunload:在浏览器卸载之前触发](https://seven777777.github.io/Js-note/13/13.4.7beforeunload.html)
	* DOMContentLoaded:不需要等所有文件资源都加载完，在形成完整的DOM树之后就会别触发（对于不支持的浏览器，可以在加载期间设置一个时间为0毫秒的超时调用：setTimeout(function(){},0);)
8. **设备事件**
9. **触摸与手势事件**
	1. 触摸事件（以下事件都会冒泡，都可取消）
		* touchstart：手指触摸屏幕时触发；即使已有一个手指放在屏幕上也会触发
		* touchmove：手指在屏幕上滑动时连续地触发，此事件期间调用preventDefault()可以阻止滚动
		* touchend：手指从屏幕上移开时触发
		* touchcancel：系统停止跟踪触摸时触发。
	2. 手势事件
		* gesturestart：当一只手已经按在屏幕上而另一只手又触摸屏幕时触发
		* gesturechange：当触摸屏幕的任何一个手指的位置变化时触发
		* gestureend：当任何一个手指从屏幕上移开时触发 
## 13.5内存和性能
1. **[事件委托](https://seven777777.github.io/Js-note/13/13.5.1.html)**
2. **[移除事件处理程序](https://seven777777.github.io/Js-note/13/13.5.1.html)**

## 13.6模拟事件

# 第14章 表单脚本
## [14.1表单基础知识](https://seven777777.github.io/Js-note/14/14.1.html)
1. [**提交表单**](https://github.com/seven777777/Js-note/blob/gh-pages/14/14.1.1.js)
2. **重置表单**
3. **表单字段** [**代码**](https://github.com/seven777777/Js-note/blob/gh-pages/14/14.1.3.html)/[**页面**](https://seven777777.github.io/Js-note/14/14.1.3.html)

## 14.2文本框脚本
1. **选择文本**
	1. select()方法和select事件
	2. [取得选择的文本](https://seven777777.github.io/Js-note/14/14.2.1.html)[（代码）](https://github.com/seven777777/Js-note/blob/gh-pages/14/14.2.1.html)

2. **过滤输入**
3. [**自动切换焦点**](https://seven777777.github.io/Js-note/14/14.2.3.html)
4. **HTML5约束验证API**
	1. 必填字段：**required**属性，拥有该属性则为必填选项
	2. 输入其他类型：HTML为input新增几个值，可以反映类型信息同时拥有默认验证功能。如："email"和"url"
	3. 数值范围
	4. 输入模式：**pattern**属性
		* 如：pattern="\d+" 表示只允许输入文字
	5. 检测有效性：**checkValidity()**方法，若字段值有效，返回true，否则返回false。
		* 可以对表单调用该方法，若所有表单字段都有效，则返回true，即使只有一个字段无效，这个方法也会返回false。
		* **validity**属性可以告诉你为什么字段有效或无效
	6. 禁用验证：通过设置**novalidate**属性，可以告诉表单不进行验证

## 14.3选择框脚本
1. 选择选项:getSelectedOptions()获得所有选中项
2. 添加选项
	* 创建并添加文本节点
	* Option构造函数，接收两个参数：文本（text）和值（value），第二个参数可选；
		* var newOption=new Option("Option text", "Option value"); selectbox**.appendChild**(newOption);（**除IE之外的浏览器都可以使用**）
	* add():两个参数：要添加的新选项和将位于新选项之后的选项，若在列表最后添加，第二个参数设置为null。
		* var newOption=new Option("Option text", "Option value"); selectbox**.add**(newOption, undefined);（**最佳方案**）
3. 移除选项
	* removeChild()
	* remove()
	* 将相应选项设置为null
4. 移除和重排选项

## [14.4表单序列化](https://github.com/seven777777/Js-note/blob/gh-pages/14/14.4.js)
## [14.5富文本编辑](https://seven777777.github.io/Js-note/14/14.5-1.html)
1. **contenteditable**属性：true打开，false关闭，inherit从父元素继承
2. 操作富文本：document.execCommand()方法对文档执行预定义的命令，可接受三个参数：要执行的命令名称，表示浏览器是否应该为当前命令提供用户界面的一个布尔值和执行命令必须的一个值（若不需要，则传递null）为确保跨浏览器兼容性，第二个参数应始终设为false
3. 富文本选区：使用框架（iframe）的getSelection()方法，可以确定实际选择的文本
4. 表单与富文本

# 第15章 使用Canvas绘图
## 15.1基本用法
1. 先设置width和height
2. 调用**getContext()**方法并传入上下文的名字。如“2d”，就可以获得2D上下文对象
3. **toDataURL()**方法，可以导出canvas元素上绘制的图像，接收一个参数：图像的MIME类型，如"image/png"(**注意**：该方法是canvas对象的方法，不是上下文对象的方法）

## [15.2 2D上下文](https://seven777777.github.io/Js-note/15/15.2.html)
1. **填充和描边**：默认值都是#000000
	1. 填充：fillStyle
	2. 描边：strokeStyle
2. **绘制矩形**：唯一一种可直接在2D上下文中绘制的形状
	1. fillRect()在画布上绘制的矩形会填充指定颜色，颜色由fillStyle属性指定
	2. strokeRect()在画布上绘制的矩形会使用指定颜色描边，颜色由strokeStyle属性指定
		* 控制描边线条宽度:**lineWidth**，值可以是任意整数
		* 控制线条末端形状：**lineCap**
			* butt：平头
			* round：圆头
			* square：方头
		* 控制线条相交方式：**lineJoin**
			* round：圆交
			* bevel：斜交
			* miter：斜接
	3. clearRect()清除画布上的矩形区域
	
	> 以上三个方法均接受四个参数，分别是：矩形的x坐标、矩形的y坐标、矩形的宽度以及矩形的高度。
3. **绘制路径**：要绘制路径，首先必须调用**beginPath()**方法
	* **arc(x,y,radius,startAngle,endAngle,countercolockwise**)
		* 以(x,y)为圆心绘制一条弧线
		* 弧线半径为radius
		* startAngle,endAngle两个参数表示起始和结束角度
		* 最后一个参数表示startAngle,endAngle是否按逆时针方向计算，false表示顺时针
	* **arcTo(x1,y1,x2,y2,radius)**
		* 从上一点开始绘制一条弧线，到(x2,y2)为止
		* 以给定的半径radius穿过(x1,y1)
	* **bezierCurveTo(c1x,c1y,c2x,c2y,x,y)**
		* 从上一点开始，到(x,y)为止
		* 以(c1x,c1y)和(c2x,c2y)为控制点
	* **lineTo(x,y)**：从上一点开始绘制一条直线，到(x,y)为止
	* **moveTo(x,y)**：将会图游标移动到(x,y)，不划线
	* **quadraticCurveTo(cx,cy,x,y)**：从上一点开始绘制一条二次曲线，到(x,y)为止，以(cx,cy)为控制点
	* **rect(x,y,width,height)**：从(x,y)点绘制一个矩形，宽高由width、height指定。该方法绘制的是矩形路径，并非strokeRect()和fillRect()绘制的独立的形状
	* **isPointInPath()**：接x，y坐标作为参数，用于路径关闭前确定画布上的某一点是否位于路径上

	> 1. 绘制一条连接到路径起点的线条：**closePath()**
	> 2. 路径完成要填充：**fill()**或调用**stroke()**方法描边
	> 3. 在路径上创建剪切区域：**clip()**
4. **绘制文本**：fillText()、strokeText()均接受四个参数：**要绘制的文本字符串，x坐标，y坐标和可选的最大像素宽度**
	* **font**：表示文本样式、大小及字体。如："10px Arial"
	* **textAlign**：表示文本对齐方式。可能的值有："start"、"end"、"left"、"right"、"center"
	* **textBaseline**：表示文本基线。可能的值有："top"、"hanging"、"middle"、"alphabetic"、"ideographic"、"bottom"
	* **measureText()**：接收一个参数，即要绘制的文本，返回一个TextMrtrics对象，目前该对象值有一个width属性

5. **变换**
	* rotate(angle)：围绕原点旋转图像angle弧度
	* scale(scalex,scaley)：缩放
	* translate(x,y)：将坐标原点移动到(x,y)
	* transform(m1_1,m1_2,m2_1,m2_2,dx,dy)：直接修改变换矩阵
	* setTransform(m1_1,m1_2,m2_1,m2_2,dx,dy)：将矩阵重置为默认状态
	* save()：保存绘图对上下文的设置及变换，不会保存内容
6. **绘制图像**：drawImage()
7. **阴影**
	* shadowColor：阴影颜色
	* shadowOffsetX：形状或x轴阴影偏移量
	* shadowOffsetY：形状或y轴阴影偏移量
	* shadowBlur：模糊像素数
8. **渐变**
	1. 线性渐变：createLinearGradient()，四个参数：起点的x坐标，起点的y坐标，终点的x坐标，终点的y坐标
	2. 径向渐变：createRadialGradient()，六个参数：前三个为起点圆心及半径，后三个为终点圆心和半径
9. **模式**：重复的图像，可调用createPattern()，两个参数：HTML img 元素和表示如何重复的字符串
10. **使用图像数据**：getImageData()取得原始图像数据，四个参数：要取得数据的画面区域的x坐标和y坐标以及该区域的像素宽度和高度
11. **合成**
	1. globalAlpha：指定所有绘制的透明度
	2. globalCompositionOperation：表示后绘制的图像怎样与先绘制的图形结合

## 15.3 WebGL：针对Canvas的3D上下文
1. 类型化数组
2. WebGL上下文

# 第16章 HTML5脚本编程
## 16.1跨文档消息传递-postMessage()

## 16.2原生拖放
### 16.2.1拖放事件
### [16.2.2自定义放置目标](https://github.com/seven777777/Js-note/blob/gh-pages/16/16.2.2.js)
> 通过重写**dragenter**和**dragover**事件的默认行为，可以把任何元素变成有效的放置目标
### 16.2.3dataTransfer对象
1. getData()
2. setData()
### 16.2.4dropEffect与effectAllowed
1. dropEffect：得知被拖动的元素能够执行哪种放置行为，可能的值如下
	+ "none"：不能把拖动元素放在这里
	+ "move"：应该将拖动元素移动到放置区域
	+ "copy"：应该将拖动元素复制到放置区域
	+ "link"：放置区域会打开拖动的元素（拖动的元素必须是一个链接，有URL）
2. effectAllowed：表示允许拖动元素的哪种dropEffect，可能的值如下
	+ "uninitialized"：没有设置任何放置行为
	+ "none"：被拖动元素不能有任何行为
	+ "copy"：只允许值为"copy"的dropEffect
	+ "link"：只允许值为"link"的dropEffect
	+ "move"：只允许值为"move"的dropEffect
	+ "copyLink"：只允许值为"copy"和"link"的dropEffect
	+ "copyMove"：只允许值为"copy"和"move"的dropEffect
	+ "linkMove"：只允许值为"link"和"move"的dropEffect
	+ "all"：允许任意dropEffect
### 16.2.5可拖动-draggable属性

## 16.3媒体元素
### [16.3.3自定义媒体播放器](https://seven777777.github.io/Js-note/16/16.3.3.html)
## 16.4历史状态管理
- history.pushState()方法
	- 通过状态管理API，能够在不加载新页面的情况下改变浏览器的URL、
	- 接收三个参数：**状态对象，新状态标题，可选的相对URL**
	- popstate事件，该事件的事件对象只有一个state属性，该属性包含当初以第一个参数传递给pushState()的状态对象
- replaceState()，用来更新当前状态，前两个参数与pushState()的前两个参数相同

# 第17章 错误处理与调试
## 17.2错误处理
### 17.2.1 try-catch语句

# 第20章 JSON
## 20.1 语法
### 20.1.1简单值
JavaScript字符串与JSON字符串的最大区别：JSON字符串必须使用双引号
### 20.1.2对象
JS中的对象字面量

	var person ={
		name:"Nicholas",
		age:29
	};
或

	var object={
		"name":"Nicholas",
		"age":29
	};
JSON的表示方法如下

	{
		"name":"Nicholas",
		"age":29
	}
两点不同：**1.JSON对象没有声明变量 2.没有末尾的分号**
### 20.1.3 数组
JavaScript
 	
	var values=[25,"hi",true];
JSON（同样没有变量和分号）

	[25,"hi",true]
## 20.2解析与序列化
### 20.2.1JSON对象
1. stringfy()：把JavaScript对象序列化为JSON字符串（可接受参数进行筛选）
2. parse（)：把JSON字符串解析为原生的JavaScript值
### 20.2.2序列化选项
1. 过滤选项
2. 字符串缩进
3. toJSON()：返回其自身的JSON数据格式

# 第21章 Ajax与Comet