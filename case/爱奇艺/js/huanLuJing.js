 function createjscssfile(filename, filetype){
	 if (filetype=="js"){
		 var fileref=document.createElement('script')
		 fileref.setAttribute("type","text/javascript")
		 fileref.setAttribute("src", filename)
	 }//如果传的类型是js 就穿件script标签
	 else if (filetype=="css"){
		 var fileref=document.createElement("link")
		 fileref.setAttribute("rel", "stylesheet")
		 fileref.setAttribute("type", "text/css")
		 fileref.setAttribute("href", filename)
	 }//如果传的类型是css 就创建link标签
	 return fileref
	 //返回你创建的标签
 }

 function replacejscssfile(oldfilename, newfilename, filetype){
	 var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none"
	 var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none"
	 var allsuspects=document.getElementsByTagName(targetelement)
	 for (var i=allsuspects.length; i>=0; i--){
	 	 //获取遍历所有的script后link标签
		 if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(oldfilename)!=-1){
		 	//script或link标签要存在  并且第i个要有链接属性                     并且第i个的链接属性值 要是你传进去旧的路径 才执行以下步骤
		    var newelement=createjscssfile(newfilename, filetype)
		    //创建一个新的link 或script标签
		    allsuspects[i].parentNode.replaceChild(newelement, allsuspects[i])
		 }  //replaceChild(newelement, allsuspects[i]) 用newelement替换第 i个穿件的标签
	 }
 }
 // replacejscssfile("css/status1.css", "css/status2.css", "css");