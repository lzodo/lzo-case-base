/*nav单击效果*/
$(function(){
	var ban_mid=$("#banner div.ban_mid");
	var ban_mid_div=$("#banner div.ban_mid div");
	var ban_mid_div_p=$("#banner div.ban_mid div p");
	var ban_mid_div_xiao=$("#banner div.ban_mid div.xiao");
	var header_li=$("#header div.head_mid ul.nav li");
	var arrLeft=["30","220","740","930"];
	for(var i=0;i<ban_mid_div.length;i++){	
	    if(ban_mid_div.eq(i).attr("AA")){
	        ban_mid_div.eq(i).css({"width":300,"height":300,"left":400,"top":90})
	    }  
	    ban_mid_div.eq(i).css("background","url(images/"+i+".jpg) center")
	    ban_mid_div.eq(i).css("background-size","100%")
	}
	for(var j=0;j<ban_mid_div_xiao.length;j++){
        ban_mid_div_xiao.eq(j).css({"width":130,"height":130,"top":70,"left":arrLeft[j]+"px"})
	}
	/*li移入效果*/
	header_li
	/*======*/
    header_li.click(function(){
    	ban_mid_div.each(function(){
    		$(this).attr("AA",0);
    		$(this).addClass("xiao");
    		$(this).addClass("zhuan");
    	})
    	ban_mid_div.eq($(this).index()).removeClass("xiao");
    	ban_mid_div.eq($(this).index()).removeClass("zhuan");
    	ban_mid_div.eq($(this).index()).attr("AA",1);
    	$(this).addClass("hover").siblings().removeClass("hover");
    	zhixing1();
    })
	/*======*/
	ban_mid_div.click(function(){
    	ban_mid_div.each(function(){
    		$(this).attr("AA",0);
    		$(this).addClass("xiao");
    		$(this).addClass("zhuan");

    	})
    	ban_mid_div.eq($(this).index()).removeClass("xiao");
    	ban_mid_div.eq($(this).index()).removeClass("zhuan");
    	ban_mid_div.eq($(this).index()).attr("AA",1);
    	header_li.eq($(this).index()).addClass("hover").siblings().removeClass("hover");
    	zhixing2();
    })
    /**/
    // setInterval(function(){
	   //  for(var i=0;i<ban_mid_div.length;i++){	
	   //  	if($("#banner div.ban_mid div").eq(i).attr("AA")==1){	
			 //    $("#banner div.ban_mid div").eq(i).hover(function(){
			 //    	$(this).stop(true,true).animate({"background-size":"120%"},1000)
			 //    },function(){
			 //    	$(this).stop(true,true).animate({"background-size":"100%"},1000)
			 //    })
	   //  	}
	   //  }
    // },5000)
    /**/
    /*p的样式*/

	function zhixing1(){
		for(var i=0;i<ban_mid_div.length;i++){	
		    if(ban_mid_div.eq(i).attr("AA")){
		        ban_mid_div.eq(i).animate({"width":300,"height":300,"left":400,"top":90},500)
		    }  
		}
		for(var j=0;j<$("#banner div.ban_mid div.xiao").length;j++){
		       $("#banner div.ban_mid div.xiao").eq(j).animate({"width":130,"height":130,"top":70,"left":arrLeft[j]+"px"},1000)
		}
	}
	function zhixing2(){
		for(var i=0;i<ban_mid_div.length;i++){	
		    if(ban_mid_div.eq(i).attr("AA")==1){
		        ban_mid_div.eq(i).animate({"width":300,"height":300,"left":400,"top":90},500)
		    }  
		}
		for(var j=0;j<$("#banner div.ban_mid div.xiao").length;j++){
		       $("#banner div.ban_mid div.xiao").eq(j).animate({"width":130,"height":130,"top":70,"left":arrLeft[j]+"px"},1000)
		}
	}
	//遮罩效果
	var mask=$("#jiesao div.jies_mid div.jies_mid div");
	mask.eq(0).animate({"width":200},1300,function(){
		mask.eq(1).animate({"width":900},4000,function(){
			mask.eq(2).animate({"width":900},4000,function(){
				mask.eq(3).animate({"width":900},4000,function(){
					mask.eq(4).animate({"width":900},4000,function(){
						mask.eq(5).animate({"width":900},4000,function(){
							mask.eq(6).animate({"width":900},4000,function(){
								mask.eq(7).animate({"width":900},4000,function(){
									mask.eq(8).animate({"width":900},4000,function(){
										mask.eq(9).animate({"width":900},4000,function(){
                                              $("#jiesao").fadeOut(1000);
										})
									})
								})
							})
						})
					})
				})
			})
		})
	})
	/*关闭*/
	$("#jiesao div.jies_mid button.close").click(function(){
		alert("不行,必须看完")
	})
})
