/*=========================topboxjs效果============*/
$(function(){
	var $topnav=$("#topbox ul.topnav li");
	var $topright=$("#topbox .topright");
	var $index=0;
	var deg=360;

	$topnav.click(function(){;
		$(this).addClass("btnActive hover").siblings("li").removeClass("btnActive hover");
	})

	$topright.hover(function(){
		$(this).addClass("btnActive");
		$(this).find("div.login").stop().slideDown(200);
	},function(){
		$(this).find("div.login").stop().slideUp(200,function(){
		});
	})
})
/*=========================topboxjs效果结束============*/
/*===============midBox nav管理选项卡切换===left效果开始============*/
$(function(){
   var $inputText=$(".leftbox input.search");
   $inputText.inputValue("Search...")
})
$(function(){
	var left_li=$(".leftbox ul.leftbtn li");
	var midBox_switchTab=$("#midbox .switchTab");
	var tab_index=0;
	midBox_switchTab.eq(0).show();
    left_li.click(function(){
    	tab_index=$(this).index();
    	$(this).addClass("active").siblings("li").removeClass("active");
    	midBox_switchTab.eq(tab_index).show().siblings(".switchTab").hide();
    })
})
/*mainbox部分js特效*/
/*rightbox部分*/
$(function(){
	function getTime(zhou,riqi){
	    var date=new Date();
	    var n=date.getFullYear();
	    var y=date.getMonth()+1;
	    var r=date.getDate();
	    var h=date.getHours() ;
	    var f=date.getMinutes();
	    var xinqi=date.getDay();
	    var xin="";
	    var arr=[y,r,h,f];
	    for(var i=0;i<arr.length;i++){
	    	if (arr[i].toString().length<2){
	    		arr[i]="0"+arr[i];
	    	};
	    }
	    var riq=n+"."+arr[0]+"."+arr[1]+"."+arr[2]+":"+arr[3];
	    // switch(xinqi){
	    // 	case 0:xin="星期天";break;
	    // 	case 1:xin="星期一";break;
	    // 	case 2:xin="星期二";break;
	    // 	case 3:xin="星期三";break;
	    // 	case 4:xin="星期四";break;
	    // 	case 5:xin="星期五";break;
	    // }
	    if (xinqi==0){
	    	xin="星期天";
	    }else if (xinqi==1){
            xin="星期一";
	    }else if (xinqi==2){
            xin="星期二";
	    }else if (xinqi==3){
            xin="星期三";
	    }else if (xinqi==4){
            xin="星期四";
	    }else if (xinqi==5){
            xin="星期五";
	    }else if (xinqi==6){
            xin="星期六";
	    }
	    riqi.append(riq);
	    zhou.append(xin);
	}
	setInterval(function(){
		$(".zhou").html("");
		$(".riqi").html("");
		getTime($(".zhou"),$(".riqi"))
	},1000)
	getTime($(".zhou"),$(".riqi"));
})
/*右侧滚动条*/
$(function(){
	if($(".ove_mid").height()<10){
	    $(".scroTiao").hide();
	    $(".overflow").css({
	    	"width":"188",
	    	"border-radius":"0px",
	    	"border":"1px solid #585858"
	    })
	    $(".ove_mid").css({"width":170});
	}	
})
function scroll(gdg,gdt,gddx,gdgd){
	var _top=0;
	var dy=0;
	var nowTop=0;
	var y=0;
	var height=$(gdt).height()-$(gdg).height();
	var bili=0;

	$(gdg).mousedown(function(e){
	    y=e.clientY;//鼠标点击的y轴坐标
	    _top=$(gdg).offset().top;//scrollObj离上面的距离
	    _gutop=$(gdt).offset().top;//固定的杆的top值
	    dy=y-_top;

	    $(document).mousemove(function(e){
	   	    nowTop=e.clientY-dy-_gutop;//滑动的高度
	   	    if (nowTop<1){
	   	   	    nowTop=1;
	   	    }else if (nowTop>height){
	   	   	    nowTop=height;
	   	    };
	   	    bili=nowTop/height;
	   	    //设置滚动对象
	        var scrollHeight=($(gddx).height()-gdgd)*bili;
	   	    $(gdg).css("top",nowTop);
	   	    $(gddx).css("top",-scrollHeight);
	   })

	   $(document).mouseup(function(e){
	   	  $(document).unbind("mousemove");
	   })

	   return false;
	})
}
scroll(".scroGan",".scroTiao",".ove_mid",173);
/*第三块*/
$(function(){
	var jxxx_r_row=$(".rightbox .rlist2 .jxxx_mid .r_row");
	var jxxx_r_row_i=$(".rightbox .rlist2 .jxxx_mid .r_row i");
	var x;
	var offLeft;
	var wid;
	var kaiguan;
	jxxx_r_row.hover(function(e){
		var $This=$(this);
		kaiguan=true;
		x=e.clientX;
		offLeft=jxxx_r_row.offset().left;
        wid=x-offLeft;
	    $(this).find("i").stop().animate({"width":wid+10},400);
	    $(this).siblings().find("i").stop().animate({"width":5},400);
	    $(this).bind("mousemove",function(e){
		     x=e.clientX;
		     wid=x-offLeft;
	    	 $This.find("i").stop().css({"width":wid+10});
	    })
		$(this).click(function(){
			kaiguan=!kaiguan;
			$This.find("i").stop().animate({"width":190},400);
			$This.unbind("mousemove")
		})
	},function(){
	    $(this).unbind("mousemove")
		if(kaiguan){
		    $(this).find("i").stop().animate({"width":5},400);
		}
	})
})


/*页面部分适应页面适应*/
$(function(){
	var leftheight=$(document).height()-80;
	$(".leftbox").css({height:leftheight});
	/*中间宽度*/
	var winwidth;
	var mainboxwidth;
	var mbox1;
	var cbox;
	var cbox1;
	var midwidth=function(){
		winwidth=$(document).width();
		if(winwidth>1080){
			$(".rightbox").show();
			if (window.attachEvent){
			    mainboxwidth=$(document).width()-466;/*430 414*/
			    ziYeWidth=$(document).width()-253;/*430 414*/
			    $(".mbox2").css({width:mainboxwidth-329})
			}else{
			    mainboxwidth=$(document).width()-446;/*430 414*/
			    ziYeWidth=$(document).width()-235;/*430 414*/
			    $(".mbox2").css({width:mainboxwidth-327})
			}
			$(".mainbox").css({width:mainboxwidth});
			$(".mbox3").css({width:mainboxwidth-4})
			$(".fenge").css({width:mainboxwidth-4})
			$("div.ywglMain").css({width:ziYeWidth})
		}else{
			$(".rightbox").hide();
			mainboxwidth=$(document).width()-230;/*170 154*/
			$(".mainbox").css({width:mainboxwidth});
			$(".mbox2").css({width:mainboxwidth-329})
			$(".mbox3").css({width:mainboxwidth-4})
			$(".fenge").css({width:mainboxwidth-4})
			$("div.ywglMain").css({width:mainboxwidth-5})
		}
		$(".textboxtop").css({width:mbox1});
		$(".textboxpage").css({width:mbox1});
		$(".m_row").css({width:(mbox1)});
		$(".m_row_l").css({width:(mbox1-202)*0.7});
		$(".m_row_m").css({width:(mbox1-202)*0.3});
		$(".m_row_ll").css({width:(mbox1-202)});

		}
	$(window).resize(function(){
			midwidth();
		var leftheight=$(document).height()-80;
		$(".leftbox").css({height:leftheight});
	});
	window.onload=midwidth;
})
$(function(){
	var index=0;
	var bgcolorArr=[];
	var colorArr=[];
	$(".m_row:odd").css({"background":"#555","color":"#fff"});
	$(".m_row:even").css("background","#f5f5f5");
	for(var i=0;i<$("div.m_row").length;i++){
		colorArr[i]=$("div.m_row").eq(i).css("color");
		bgcolorArr[i]=$("div.m_row").eq(i).css("background-color");
	}
	$("div.m_row").hover(function(){
        index=$(this).index();
        $(this).css("color");
		$(this).stop().animate({
			"background-color":"#3993BF",
			"color":"#fff"
	    },300);
	},function(){
		$(this).stop().animate({
			"background-color":bgcolorArr[index],
			"color":colorArr[index]
		},300)
	})
})
/*main维修ul ico*/
$(function(){//维修项目排版
	 var  ico =$(".menico");//得到所有样式为menico 的元素
	 var colorArr=["#3993bf","#6041ff","#cc3d3d","#395dbb","#009900","#6ca733","#ff8e1e"]
	 var srcArr=["images/boxicon01.png","images/boxicon02.png","images/boxicon03.png","images/boxicon04.png","images/boxicon05.png","images/boxicon06.png","images/boxicon07.png"]
	 var ziArr=["待处理","待维护","处理中","提醒","待维修","待确认","待评价"]
	 var shuArr=[33,62,58,,15,5,45,55]
	 //alert(ico.length);
	 //toFixed 四舍五入 number  
	 for(var i= 0,l=ico.length; i<ico.length; i++){
	 	ico.eq(i).css({"left":50 - 35*Math.cos(-0.5 * Math.PI - 2*(1/l)*i*Math.PI).toFixed(4)+"%"})
	 	ico.eq(i).css({"top":50 + 35*Math.sin(-0.5 * Math.PI - 2*(1/l)*i*Math.PI).toFixed(4)+"%"});
	 	if (i==0){
            ico.eq(0).css({"background":""+colorArr[0]+" url(images/boxicon0"+1+".png) no-repeat center"})
	 	}else{
	 	    ico.eq(i).css({"background":"#fff url(images/boxicon"+(i+1)+"s.png) no-repeat center"})
	 	}
     }
     ico.click(function(){
        var $This=$(this);
     	index=$(this).index();
        $(this).css({"background":""+colorArr[index]+" url(images/boxicon0"+(index+1)+".png) no-repeat center"})
        for(var i= 0; i<ico.length; i++){
        	if (i!=index){
                 ico.eq(i).css({"background":"#fff url(images/boxicon"+(i+1)+"s.png) no-repeat center"})
        	}
         }
        // $("a.xiangXi div.xq").eq(index).show().siblings("div.xq").hide();
        $("a.xiangXi img").attr("src",srcArr[index]);
        $("a.xiangXi p span.zi").html(ziArr[index]);
        $("a.xiangXi p span.shu").html(shuArr[index]);
     })
})
$(function(){//动态效果
	var  ico =$(".menico");
	var ziDongZhuan=0;
    var x,zhuan=0,xcha=0;
    var time;
    function ziDong(){
	    time=setInterval(function(){
	    	ziDongZhuan+=1
	    	$("div.mbox1 .xiangmu").css({"transform":"rotate("+ziDongZhuan+"deg)"})
	    	zhuan=-ziDongZhuan;
	    	ico.css({"transform":"rotate("+-ziDongZhuan+"deg)"})
	    },30)	
    }
    ziDong();
    $("div.mbox1 .xiangmu").hover(function(){
    	clearInterval(time);
    },function(){
    	ziDong();
    })
    $("div.mbox1 .xiangmu").mousedown(function(e){
        x=e.clientX;
        y=e.clientY;
    	$(document).bind("mousemove",function(e){
    		clearInterval(time)
               xcha=e.clientX-x;
               x=e.clientX;
               y=e.clientY;
               fangX=e.pageY;//获取x坐标离页面顶端的距离
               if (fangX>268){
                   zhuan+=0.8*xcha;
                   ziDongZhuan=-zhuan;
	               $("div.mbox1 .xiangmu").css({
	               	  "transform":"rotate("+-zhuan+"deg)"
	               })
	               ico.css({"transform":"rotate("+zhuan+"deg)"})
               }else{
                   zhuan-=0.8*xcha;
                   ziDongZhuan=-zhuan;
               	   $("div.mbox1 .xiangmu").css({
               	   	  "transform":"rotate("+-zhuan+"deg)"
               	   })
	               ico.css({"transform":"rotate("+zhuan+"deg)"})
               }
    	})
    })
    $(document).mouseup(function(e){
    	$(document).unbind("mousemove");
    });
})
/*首页 main box2，3 表格样式*/
$(function(){
	function boxSwitch(box_li,switchTable){
		var box_li=$(box_li);
		var switchTable=$(switchTable);
		switchTable.eq(0).show();
		box_li.click(function(){
			index=$(this).index();
			$(this).addClass("hover").siblings("li").removeClass("hover");
			switchTable.eq(index).show().siblings("div.cen").hide();
		})
	}
	boxSwitch("div.mbox3 ul.textboxtitle li","div.mbox3 div.cenTable div.cen")
	boxSwitch("div.mbox2 ul.textboxtitle li","div.mbox2 div.cenTable div.cen")
})

/*运维管理页nav*/
$(function(){
	var $nav_li=$("ul.nav_mid_ul li");//一级导航
	var $ywgl_li=$("ul.ywgl_mid li.ywgl_li");//一级导航对应内容
	var $sjgl_li=$("ul.ywgl_mid li.ywgl_li ul.sjgl_ul li");//二级导航
	var $sjgl_mid=$("ul.ywgl_mid li.ywgl_li ul.sjgl_mid li");//二级导航对应内容
	$ywgl_li.eq(2).show().siblings("li").hide();
	$nav_li.eq(2).css("background-color","#1171BA")
	$sjgl_mid.eq(0).show();
	$nav_li.mouseover(function(){
		var _this=$(this);
		_this.mouseout=null;
		$nav_li.eq(10).show().stop(true,true).animate({"width":_this.width(),"left":_this.position().left},270);    
	})
	$nav_li.click(function(){
        $(this).css("background-color","#1171BA").siblings("li").css("background-color",'');
        $ywgl_li.eq($(this).index()).show().siblings("li").hide();
	})
	$sjgl_li.click(function(){
		$(this).css("background","#EA5703").siblings("li").css("background","")
		$(this).addClass("hover").siblings("li").removeClass("hover");
		$sjgl_mid.eq($(this).index()).show().siblings("li").hide();
	})
	 $("ul.nav_mid_ul").mouseleave(function(){
	     $(this).find("li").eq(10).animate({"width":0,"left":0},500);
	 })
})
/*运维管理页表单元素*/
$(function(){
	$("input.zzjg").inputValue("组织机构")
	$("input.fqr").inputValue("请输入...")
	$("input.yxj").inputValue("所有")
})
/*表格*/
// $(function(){
// 	var tr,td;
// 	var table=$("table.eventMinute");
// 	for(var i=0;i<11;i++){
//        table.append($("<tr class=tr"+i+"></tr>"));
//        for(var j=0;j<10;j++){
//        	  $("tr.tr"+i).append($("<td></td>"))
//        }
// 	}
// })
/*扩展函数*/
$.fn.extend({
	  inputValue:function(value){
	  	$(this).focus(function(){
	        if ($(this).val()==value){
	        	$(this).val("");
	        }
	    })
	    $(this).blur(function(){
	      	if ($(this).val()==""){
	        	$(this).val(value);
	        }
	    })
	  }/*inputValue函数*/
})

