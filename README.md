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
3. **toDataURL()**方法，可以导出canvas元素上绘制的图像，接收一个参数：图像的MIME类型，如"image/png"

## 15.2 2D上下文
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