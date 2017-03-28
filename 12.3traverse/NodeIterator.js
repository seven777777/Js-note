var div=document.getElementById("div1");
//			var iterator=document.createNodeIterator(div,NodeFilter.SHOW_ELEMENT,null,false);
/*只想返回li元素*/
var filter=function(node){
	return node.tagName.toLowerCase()=='li'?
	NodeFilter.FILTER_ACCEPT:
	NodeFilter.FILTER_SKIP;
}
var iterator=document.createNodeIterator(div,NodeFilter.SHOW_ELEMENT,filter,false);
var node=iterator.nextNode();
while(node!=null){
	console.log(node.tagName);
	node=iterator.nextNode();
}