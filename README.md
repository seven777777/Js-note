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
			* 0：不确定
			* 1：键盘
			* 2：粘贴
			* 3：拖放
			* 4：IME
			* 5：通过在表单中选择某一项输入的
			* 6：手写（如手写笔）
			* 7：语音
			* 8：几种方式组合
			* 9：脚本
5. **复合事件**（当IME即Input Method Editor，输入法编辑器，输入字符时触发）
6. **变动事件**（当底层DOM结构发生变化时触发）
7. **HTML5事件**
	* [contextmenu:显示自定义上下文菜单](https://seven777777.github.io/Js-note/13/13.4.7contextmenu.html)
	* [beforeunload:在浏览器卸载之前触发](https://seven777777.github.io/Js-note/13/13.4.7beforeunload.html)
	* DOMContentLoaded:不需要等所有文件资源都加载完，在形成完整的DOM树之后就会别触发（对于不支持的浏览器，可以在加载期间设置一个时间为0毫秒的超时调用：setTimeout(function(){},0);)
8. **设备事件**
9. **触摸与手势事件**



