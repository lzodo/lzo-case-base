
$(function(){
	var  X, Y, Xcha=0,Ycha=0,xzhuan=-15,yzhuan=0,time,liL;
	//鼠标x,y坐标 
	//Xcha,Ycha移动后与移动前x,y的差值
	//xzhuan=-15,yzhuan=0 然x与y轴转动的角度
	//time定时器
	for(var i=0;i<11;i++){//添加十一个li背景
		$("#warp ul li").eq(i).find("p").css({"background":"url(images/"+(i+1)+".jpg)"})
	 }//暂时不知的为什么直接在这添加li不能实现逐个出场的效果
	liL=$("#warp ul li").length;
	var jiaodu=360/liL;
	$("#warp ul li").each(function(i){//遍历li 定每一个旋转的角度与移动的距离
		fanx=liL-1-i;//从后往前出场
		$(this).css({
			transition:"1s "+(fanx*0.1)+"s transform",//出厂时间与延迟
		    transform:"rotatey("+jiaodu*i+"deg) translateZ(380px)"
	    })
	})
	// setTimeout(function(){//去掉边框
	//    $("#warp").css({"border":"0px"});
	// },1350)
	$(document).mousedown(function(e){//当鼠标按下时
		clearInterval(time);
		X=e.clientX;
		Y=e.clientY;
		$(document).bind("mousemove",function(e){//当鼠标有移动是
            Xcha=e.clientX-X;
            Ycha=e.clientY-Y;
            X=e.clientX;
		    Y=e.clientY;
		    yzhuan+=0.1*Xcha;
		    xzhuan-=0.1*Ycha;
            $("#warp").css({"transform":"perspective(800px) rotateX("+xzhuan+"deg) rotateY("+yzhuan+"deg)"})
		})
	})
	$(document).mouseup(function(e){
		$(document).unbind("mousemove");
		time=setInterval(function(){//惯性制作  最后一次移动的差值递减
			if(Xcha<0.1&&Ycha<0.1){
				clearInterval(time)
			}
			Xcha=Xcha*0.95;
			Ycha=Ycha*0.95;
			yzhuan+=0.1*Xcha;
		    xzhuan-=0.1*Ycha;
			$("#warp").css({"transform":"perspective(800px) rotateX("+xzhuan+"deg) rotateY("+yzhuan+"deg)"})
		},20)
	})
	/*p的变化*/
	$("#warp ul li p").mouseover(function(){
		$(this).css({
			// "transform-origin":"100px 1000px",
			transition:"2s transform",
			transform:"rotatey("+(Math.random()*360+150)+"deg)"
		})
	})
	$("#warp ul li p").click(function(){
		$(this).css({
			transition:"2s transform",
			transform:"rotatey(0deg)"
		})
	})
})//jQuery函数结束