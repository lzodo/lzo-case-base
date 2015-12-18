function loadjscssfile(filename, filetype,where){
	if (filetype=="js"){
		var fileref=document.createElement('script')
		fileref.setAttribute("type","text/javascript")
		fileref.setAttribute("src", filename)
	}
	else if (filetype=="css"){
		var fileref=document.createElement("link")
		fileref.setAttribute("rel", "stylesheet")
		fileref.setAttribute("type", "text/css")
		fileref.setAttribute("href", filename)
	}
	if (typeof fileref!="undefined")
	    document.getElementsByTagName(where)[0].appendChild(fileref)
}
// loadjscssfile("cssfdlfja","css","body") 在哪添加一个什么类型的文件  URL地址是什么
function removejscssfile(filename, filetype){
	var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none"
	var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none"
	var allsuspects=document.getElementsByTagName(targetelement)
	for (var i=allsuspects.length; i>=0; i--){
		if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1)
		   allsuspects[i].parentNode.removeChild(allsuspects[i])
	}
}