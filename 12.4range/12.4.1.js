/*
selectNode()：选择整个节点，包括子节点
selectNodeContents()：只选择节点的子节点
*/

var range1=document.createRange(),
	range2=document.createRange(),
	p1=document.getElementById("p1"),
// range1.selectNode(p1);
// range2.selectNodeContents(p1);
/*用DOM范围实现复杂选择*/
	p1Index=-1,
	i,len;
for (i = 0,len=p1.parentNode.childNodes.length;i<len;i++){
	if (p1.parentNode.childNodes[i]==p1) {
		p1Index=i;
		break;
	}
}
range1.setStart(p1.parentNode,p1Index);
range1.setEnd(p1.parentNode,p1Index+1);
range2.setStart(p1,0);
range2.setEnd(p1,p1.childNodes.length);

/*如果只想选择代码从“hello”的“llo”到“ world！”的“o”*/
var helloNode=p1.firstChild.firstChild,
	worldNode=p1.lastChild;
var range=document.createRange();
range.setStart(helloNode,2);
range.setEnd(worldNode,3);

/*操作范围*/
// 删除
/*
deleteContents()或extractContents()
不同的是，后者会返回范围的文档片段。利用这个返回值，可以将范围的内容插入到文档中的其他地方
*/
// range.deleteContents();
// var fragment=range.extractContents();
// p1.parentNode.appendChild(fragment);
//添加到文档中的只是片段的子节点，非片段本身
//还有一种做法，使用cloneContents()创建对象的一个副本，然后向文档其他地方插入该副本
var fragment2=range.cloneContents();
p1.parentNode.appendChild(fragment2);

// 插入
// var span=document.createElement("span");
// span.style.color="red";
// span.appendChild(document.createTextNode("Inserted text"));
// range.insertNode(span);
// 显示结果是插到了范围选取的开始位置
/*
还可以环绕范围插入内容
surroundContents()接收一个参数：环绕范围内容的节点
后台执行步骤：
1.提取出范围内容（类似执行extractContents()）；
2.将指定节点插入到文档中原来范围所在的位置；
3.将文档片段的内容添加到给定节点中。
*/
range.selectNode(helloNode);
var span=document.createElement("span");
span.style.backgroundColor="yellow";
range.surroundContents(span);
