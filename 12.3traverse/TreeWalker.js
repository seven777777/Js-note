//document.createTreeWalker():接收四个参数参数,分别是作为遍历起点的根节点、要显示的节点类型、过滤器和一个表示是否扩展实体引用的布尔值。
/*var div=document.getElementById("div1");
var filter=function(node){
	return node.tagName.toLowerCase()=="li"?
		NodeFilter.FILTER_ACCEPT:
		NodeFilter.FILTER_SKIP;
}
var walker=document.createTreeWalker(div,NodeFilter.SHOW_ELEMENT,filter,false);
var node=walker.nextNode();
while(node!=null){
	console.log(node.tagName);
	node=walker.nextNode();
}
*/

/*
 * 在使用NodeIterator对象时，
 * NodeFilter.FILTER_SKIP和NodeFilter.FILTER_REJECT作用相同：跳过指定的节点
 * 在使用TreeWalker对象时，
 * NodeFilter.FILTER_SKIP会跳过相应节点继续前进到子树中的下一个节点
 * NodeFilter.FILTER_REJECT会跳过相应节点及该节点的整个子树
 * */

/*TreeWalker可以不定义过滤器就获取所有li标签元素*/
var div=document.getElementById("div1");
var walker=document.createTreeWalker(div,NodeFilter.SHOW_ELEMENT,null,false);
console.log(walker.firstChild());
console.log(walker.nextSibling());
var node=walker.firstChild();
while(node!=null){
	console.log(node.tagName);
	node=walker.nextSibling();
}
