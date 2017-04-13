/*向现有URL末尾追加查询字符串*/
function addURLParam(url,name,value){
	url+=(url.indexOf("?")==-1?"?":"&");
	url+=encodeURIComponent(name)+"="+encodeURIComponent(value);
	return url;
};
var url="example.php";
// 添加参数
url=addURLParam(url,"name","Nicholas");
url=addURLParam(url,"book","Professional JavaScript");

// 初始化请求
xhr.open("get",url,false);