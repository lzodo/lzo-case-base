// var Wai_Ul=document.getElementById("pubuliu");
// var Wai_Ul_img=document.getElementsByTagName("li");
// var everHeight={lie1:[],lie2:[],lie3:[],lie4:[],lie5:[]}
//  for(var i=0;i<Wai_Ul_img.length;i++){
//  	var lieShu=i%5;//你要几列就%几 余是几就第几列
//  	switch(lieShu){
//  		case 0:Wai_Ul_img[i].style.left=lieShu*(Wai_Ul_img[0].offsetWidth+15)+"px";
//  		       everHeight.lie1.push(Wai_Ul_img[i].offsetHeight);//每次把图片i的高度加到数组中去
//  	           var hanShu=Math.floor(i/5);//计算当前第i个图片第第几行
//  		       if (hanShu==0){
//  		       	  Wai_Ul_img[i].style.top=0+"px"
//  		       }else{//如果不是第一行就执行下面的代码
//  		       	  var sum=0;
//  		       	  for(var j=0;j<hanShu;j++){
//  		       	  	 sum=sum+everHeight.lie1[j]+15;
//  		       	  }
//  		       	  Wai_Ul_img[i].style.top=sum+"px";
//  		       }
//  		       break;
//  	    case 1:Wai_Ul_img[i].style.left=lieShu*(Wai_Ul_img[0].offsetWidth+15)+"px";
//  	           everHeight.lie2.push(Wai_Ul_img[i].offsetHeight);//每次把图片i的高度加到数组中去
//  	           var hanShu=Math.floor(i/5);//计算当前第i个图片第第几行
//  		       if (hanShu==0){
//  		       	  Wai_Ul_img[i].style.top=0+"px"
//  		       }else{//如果不是第一行就执行下面的代码
//  		       	  var sum=0;
//  		       	  for(var j=0;j<hanShu;j++){
//  		       	  	 sum=sum+everHeight.lie2[j]+15;
//  		       	  }
//  		       	  Wai_Ul_img[i].style.top=sum+"px";
//  		       }
//  	           break;
//  	    case 2:Wai_Ul_img[i].style.left=lieShu*(Wai_Ul_img[0].offsetWidth+15)+"px";
//  	           everHeight.lie3.push(Wai_Ul_img[i].offsetHeight);//每次把图片i的高度加到数组中去
//  	           var hanShu=Math.floor(i/5);//计算当前第i个图片第第几行
//  		       if (hanShu==0){
//  		       	  Wai_Ul_img[i].style.top=0+"px"
//  		       }else{//如果不是第一行就执行下面的代码
//  		       	  var sum=0;
//  		       	  for(var j=0;j<hanShu;j++){
//  		       	  	 sum=sum+everHeight.lie3[j]+15;
//  		       	  }
//  		       	  Wai_Ul_img[i].style.top=sum+"px";
//  		       }
//  	           break;
//  	    case 3:Wai_Ul_img[i].style.left=lieShu*(Wai_Ul_img[0].offsetWidth+15)+"px";
//  	           everHeight.lie4.push(Wai_Ul_img[i].offsetHeight);//每次把图片i的高度加到数组中去
//  	           var hanShu=Math.floor(i/5);//计算当前第i个图片第第几行
//  		       if (hanShu==0){
//  		       	  Wai_Ul_img[i].style.top=0+"px"
//  		       }else{//如果不是第一行就执行下面的代码
//  		       	  var sum=0;
//  		       	  for(var j=0;j<hanShu;j++){
//  		       	  	 sum=sum+everHeight.lie4[j]+15;
//  		       	  }
//  		       	  Wai_Ul_img[i].style.top=sum+"px";
//  		       }
//  	           break;
//  	    case 4:Wai_Ul_img[i].style.left=lieShu*(Wai_Ul_img[0].offsetWidth+15)+"px";
//  	           everHeight.lie5.push(Wai_Ul_img[i].offsetHeight);//每次把图片i的高度加到数组中去
//  	           var hanShu=Math.floor(i/5);//计算当前第i个图片第第几行
//  		       if (hanShu==0){
//  		       	  Wai_Ul_img[i].style.top=0+"px"
//  		       }else{//如果不是第一行就执行下面的代码
//  		       	  var sum=0;
//  		       	  for(var j=0;j<hanShu;j++){
//  		       	  	 sum=sum+everHeight.lie5[j]+15;
//  		       	  }
//  		       	  Wai_Ul_img[i].style.top=sum+"px";
//  		       }
//  	           break;
//  	}
//  }
//封装后 最多五列 参数列表父级、多少列、左边距、下边距
function pubul(id,lie,marLeft,marButt){
	var Wai_Ul=document.getElementById(id);
	var Wai_Ul_img=document.getElementsByTagName("li");
	var everHeight={lie1:[],lie2:[],lie3:[],lie4:[],lie5:[]}
	 for(var i=0;i<Wai_Ul_img.length;i++){
	 	var lieShu=i%lie;//你要几列就%几 余是几就第几列
	 	switch(lieShu){
	 		case 0:Wai_Ul_img[i].style.left=lieShu*(Wai_Ul_img[0].offsetWidth+marLeft)+"px";
	 		       everHeight.lie1.push(Wai_Ul_img[i].offsetHeight);//每次把图片i的高度加到数组中去
	 	           var hanShu=Math.floor(i/lie);//计算当前第i个图片第第几行
	 		       if (hanShu==0){
	 		       	  Wai_Ul_img[i].style.top=0+"px"
	 		       }else{//如果不是第一行就执行下面的代码
	 		       	  var sum=0;
	 		       	  for(var j=0;j<hanShu;j++){
	 		       	  	 sum=sum+everHeight.lie1[j]+marButt;
	 		       	  }
	 		       	  Wai_Ul_img[i].style.top=sum+"px";
	 		       }
	 		       break;
	 	    case 1:Wai_Ul_img[i].style.left=lieShu*(Wai_Ul_img[0].offsetWidth+marLeft)+"px";
	 	           everHeight.lie2.push(Wai_Ul_img[i].offsetHeight);//每次把图片i的高度加到数组中去
	 	           var hanShu=Math.floor(i/lie);//计算当前第i个图片第第几行
	 		       if (hanShu==0){
	 		       	  Wai_Ul_img[i].style.top=0+"px"
	 		       }else{//如果不是第一行就执行下面的代码
	 		       	  var sum=0;
	 		       	  for(var j=0;j<hanShu;j++){
	 		       	  	 sum=sum+everHeight.lie2[j]+marButt;
	 		       	  }
	 		       	  Wai_Ul_img[i].style.top=sum+"px";
	 		       }
	 	           break;
	 	    case 2:Wai_Ul_img[i].style.left=lieShu*(Wai_Ul_img[0].offsetWidth+marLeft)+"px";
	 	           everHeight.lie3.push(Wai_Ul_img[i].offsetHeight);//每次把图片i的高度加到数组中去
	 	           var hanShu=Math.floor(i/lie);//计算当前第i个图片第第几行
	 		       if (hanShu==0){
	 		       	  Wai_Ul_img[i].style.top=0+"px"
	 		       }else{//如果不是第一行就执行下面的代码
	 		       	  var sum=0;
	 		       	  for(var j=0;j<hanShu;j++){
	 		       	  	 sum=sum+everHeight.lie3[j]+marButt;
	 		       	  }
	 		       	  Wai_Ul_img[i].style.top=sum+"px";
	 		       }
	 	           break;
	 	    case 3:Wai_Ul_img[i].style.left=lieShu*(Wai_Ul_img[0].offsetWidth+marLeft)+"px";
	 	           everHeight.lie4.push(Wai_Ul_img[i].offsetHeight);//每次把图片i的高度加到数组中去
	 	           var hanShu=Math.floor(i/lie);//计算当前第i个图片第第几行
	 		       if (hanShu==0){
	 		       	  Wai_Ul_img[i].style.top=0+"px"
	 		       }else{//如果不是第一行就执行下面的代码
	 		       	  var sum=0;
	 		       	  for(var j=0;j<hanShu;j++){
	 		       	  	 sum=sum+everHeight.lie4[j]+marButt;
	 		       	  }
	 		       	  Wai_Ul_img[i].style.top=sum+"px";
	 		       }
	 	           break;
	 	    case 4:Wai_Ul_img[i].style.left=lieShu*(Wai_Ul_img[0].offsetWidth+marLeft)+"px";
	 	           everHeight.lie5.push(Wai_Ul_img[i].offsetHeight);//每次把图片i的高度加到数组中去
	 	           var hanShu=Math.floor(i/lie);//计算当前第i个图片第第几行
	 		       if (hanShu==0){
	 		       	  Wai_Ul_img[i].style.top=0+"px"
	 		       }else{//如果不是第一行就执行下面的代码
	 		       	  var sum=0;
	 		       	  for(var j=0;j<hanShu;j++){
	 		       	  	 sum=sum+everHeight.lie5[j]+marButt;
	 		       	  }
	 		       	  Wai_Ul_img[i].style.top=sum+"px";
	 		       }
	 	           break;
	 	}
	 }
}
/*滚动式添加*/
var fu=document.getElementById("pubuliu");
window.onscroll=function(){
	for(var i=0;i<3;i++){		
		var imgUrl=Math.floor(Math.random()*18+1);
		var oLi=document.createElement("li");
		var img=document.createElement("img");
		img.setAttribute("src","images/"+imgUrl+".jpg");
		img.setAttribute("width","200");
		oLi.appendChild(img);
		fu.appendChild(oLi);
		pubul("pubuliu",5,15,15);
	}
}
