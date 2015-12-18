/*头部 表单*/
var headerText=$(".sosouk")[0];
var headerBtn=$(".sosoBtn")[0];
var inputInfo=$("div.input_info");
headerText.onfocus=function(){
	  this.style.boxShadow="inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)";
	  if (this.value=="输入关键字搜索"){
	  	 this.value="";
	  };
	  
	  this.autocomplete="off";
}
headerText.onblur=function(){
	this.style.boxShadow="none";
	  if (this.value==""){
	  	 this.value="输入关键字搜索";
	  };
}
headerText.onclick=function(){
	inputInfo.slideDown(50);
}
headerText.onmouseout=function(){
	inputInfo[0].style.display="none";
}

inputInfo[0].addEventListener("mouseover",overInfo,false);
inputInfo[0].addEventListener("mouseout",outInfo,false);
function outInfo(){
 	inputInfo[0].style.display="none";
}
function overInfo(){
	inputInfo[0].style.display="block";
}
//------------------------------nav导航js样式------------------------
var $nav_li=$("ul.nav_mid_ul li");
var $nav=$("#nav");
var $nav_ul=$("ul.nav_mid_ul");
$nav_li.mouseover(function(){
	var _this=$(this);
	_this.mouseout=null;
	$nav_li.eq(8).show().stop(true,true).animate({"width":_this.width(),"left":_this.position().left},270);
    
})
 $("ul.nav_mid_ul").mouseleave(function(){
     $(this).find("li").eq(8).animate({"width":0,"left":0},500);
 })
//左边
var allShop=$("#allShop");
var minIco=$("#allShop span");
var allShop_show=$("#allShop div.allShop_show");
allShopShowEndHide(allShop,minIco,allShop_show);
function allShopShowEndHide(Eventobj,czobj,czobj2){
	Eventobj.mouseenter(function(){
        czobj.slideDown(2,function(){
        	czobj2.slideDown(400);
        });
	})
	Eventobj.mouseleave(function(){
        czobj2.slideUp(400,function(){
        	czobj.slideUp(2);
        });
	})
}
 //右边
 var goShop=$("#goShop");
 var goShop_sp=$('#goShop div.goods');

 // goShop.onmouseover=function(e){
 //      goShop_sp.slideDown(500);
 //      goShop_sp.fadeIn(500);
 // }
 //  goShop.onmouseout=function(e){
 //      goShop_sp.slideUp(500);
 //      goShop_sp.fadeOut(500);
 // }  //子元素继承父元素事件问题
showEndHide(goShop,goShop_sp);
function showEndHide(Eventobj,czobj){
	Eventobj.hover(function(){
		czobj.slideDown(350);
	    czobj.fadeIn(350);
	},function(){
		czobj.slideUp(350);
	    czobj.fadeOut(350);
	})
}
//---------------------0导航吸顶盒=================
$(document).scroll(function(){
       var nav_top=$nav.position().top;
       var scro_height=$(window).scrollTop();
       if(nav_top<scro_height&&scro_height<1700){
        	$nav.addClass("Fixed");
       }else{
        	$nav.removeClass("Fixed");
       }
})
//联系我们
var lianXi=$("#lianXi");
var lianXi_li=$("#lianXi li");

//-------------banner效果============================================
var header=$("#header .hea_mid")[0];//获取箭头 固定箭头左右位置
var arrLeft=$("span.arrLeft");
var arrRight=$("span.arrRight");
var juli=header.offsetLeft;
if (juli<=60){
	juli=70;
};
arrLeft.css("left",juli+"px")
arrRight.css("right",juli+"px")
//-----------获取滚动图片---------------------
var banner=$("#banner");
var banner_ul=$("#banner ul");
var banner_ul_li=$("#banner ul.ban_img li");
var bannerBgSrc=["images/banner1.jpg",
                 "images/banner2.png",
                 "images/banner3.png",
                 "images/banner4.jpg",
                 "images/banner5.png",
                 "images/banner6.jpg"];
for(var i=0;i<banner_ul_li.length;i++){
   banner_ul_li[i].style.background="url('"+bannerBgSrc[i]+"') center";
    
}
//---------------获取ul控制滚动对象
var ulSubScribe=$("ul.ban_subScript");
var ulSubScribe_li=$("ul.ban_subScript li");
//---------------开始滚动设置=================
var li_index1=0;
var shangYiGe=0;
var moveWidth=banner[0].offsetWidth;
banner_ul_li.eq(0).show().siblings().hide();
ulSubScribe_li.hover(function(){
	clearInterval(time);
	li_index1=$(this).index();
	$(this).addClass("hover").siblings().removeClass("hover");
	if(li_index1>shangYiGe){
		banner_ul_li.eq(li_index1).show().css("left",moveWidth);
		banner_ul_li.eq(shangYiGe).stop(true,true).animate({"left":-moveWidth},1000);
		banner_ul_li.eq(li_index1).stop(true,true).animate({"left":0},1000)
	}else if(li_index1<shangYiGe){
		banner_ul_li.eq(li_index1).show().css("left",-moveWidth);
		banner_ul_li.eq(shangYiGe).stop(true,true).animate({"left":moveWidth},1000);
		banner_ul_li.eq(li_index1).stop(true,true).animate({"left":0},1000)
	}
	//banner_ul_li.eq(li_index1).show().siblings().hide();
	shangYiGe=li_index1;
},function(){
})
//自动轮播
var time=null;
function ziDongLunBo(){
	time=setInterval(function(){
		li_index1++;

		if (li_index1<=5){
			banner_ul_li.eq(li_index1).show().css("left",moveWidth);
			banner_ul_li.eq(li_index1-1).stop(true,true).animate({"left":-moveWidth},1000);
			banner_ul_li.eq(li_index1).stop(true,true).animate({"left":0},1000)
	    }else if(li_index1==6){
	    	li_index1=0;
	    	banner_ul_li.eq(li_index1).show().css("left",moveWidth);
			banner_ul_li.eq(5).stop(true,true).animate({"left":-moveWidth},1000);
			banner_ul_li.eq(li_index1).stop(true,true).animate({"left":0},1000)
	    }
		ulSubScribe_li.eq(li_index1).addClass("hover").siblings().removeClass("hover");
		shangYiGe=li_index1;
	},2000);
}
ziDongLunBo();
//===================鼠标移入停止 箭头出现=========================
banner.hover(function(){
   arrLeft.show();
   arrRight.show();
   clearInterval(time);
},function(){
   arrLeft.hide();
   arrRight.hide();
   ziDongLunBo();
})
//单击左右切换========================
var starTime=new Date();
arrLeft.click(function(){
	var endTime=new Date();
	if(endTime-starTime>1000){
	li_index1++;
    	if (li_index1<=5){
    		banner_ul_li.eq(li_index1).show().css("left",moveWidth);
    		banner_ul_li.eq(li_index1-1).stop(true,true).animate({"left":-moveWidth},1000);
    		banner_ul_li.eq(li_index1).stop(true,true).animate({"left":0},1000)
        }else if(li_index1==6){
        	li_index1=0;
        	banner_ul_li.eq(li_index1).show().css("left",moveWidth);
    		banner_ul_li.eq(5).stop(true,true).animate({"left":-moveWidth},1000);
    		banner_ul_li.eq(li_index1).stop(true,true).animate({"left":0},1000)
        }
    	ulSubScribe_li.eq(li_index1).addClass("hover").siblings().removeClass("hover");
	    shangYiGe=li_index1;
    }
    starTime=endTime;
})
arrRight.click(function(){
	var endTime=new Date();
	if(endTime-starTime>1000){
	li_index1--;
    	if (li_index1>=0){
    		banner_ul_li.eq(li_index1).show().css("left",-moveWidth);
    		banner_ul_li.eq(li_index1+1).stop(true,true).animate({"left":moveWidth},1000);
    		banner_ul_li.eq(li_index1).stop(true,true).animate({"left":0},1000)
        }else if(li_index1==-1){
        	li_index1=5;
        	banner_ul_li.eq(li_index1).show().css("left",-moveWidth);
    		banner_ul_li.eq(0).stop(true,true).animate({"left":moveWidth},1000);
    		banner_ul_li.eq(li_index1).stop(true,true).animate({"left":0},1000)
        }
    	ulSubScribe_li.eq(li_index1).addClass("hover").siblings().removeClass("hover");
	    shangYiGe=li_index1;
	}
	starTime=endTime;
})
//=============主体 模块一部分==========================
var module1=$(".module1");
var mod1_p=$(".module1 p");
var mod1_p_span=$(".module1 p a span");

//alert($(".module1 p").eq(0).css("backgroundPosition"));
for(var i=0;i<=mod1_p.length;i++){	
	mod1_p.eq(i).hover(function(){
		$(this).animate({"background-position-x":"-12px"},220);
		$(this).find(mod1_p_span).fadeIn();
	},function(){
		$(this).animate({"background-position-x":"0px"},220);
		mod1_p_span.fadeOut();
	})
}

//=============主体 模块二部分==========================
var module2_li=$(".module2 ul.mod_2_ul li");
module2_li.find("p.info").hover(function(){
   $(this).animate({"bottom":17+"px"},200);
},function(){
   $(this).animate({"bottom":0+"px"},200);
})
//=============主体 模快四部分==========================
var module4_li=$("#main div.module4 ul.mod4_ul li");
var module4_ul=$("#main div.module4 ul.mod4_ul");
var mod4_mask=$("#main div.module4 ul.mod4_ul div.last");
var mod4_mask_a=$("#main div.module4 ul.mod4_ul div.last a");
var mod4_index=0;
var mask_value=[
"站酷网 | 中国最具人气的设计师互动平台<br/>国内最活跃的原创设计交流平台",
"植美村 | 中国最受消费者欢迎的二十大品牌<br/>中国著名品牌之一",
"上海添香 | 拥有国内顶尖整合营销团队<br/>防辐射服装行业的第一品牌",
"零食够 | 各类进口食品、健康零食<br/>全球采购，吃出健康国际范",
"澳优乳业 | 中国高端奶粉市场五强中唯一的奶源<br/>来自澳洲的中国品牌"
]
var li_Left=0;
for(var i=0;i<5;i++){
	module4_li.eq(i).css("backgroundImage","url('images/part4_"+(i+1)+".png')");
}
module4_li.hover(function(){
	mod4_index=$(this).index();
   $(this).stop().animate({"background-size":"110%"},180).
   siblings("li").stop().animate({"background-size":"100%"},180);
   li_Left=$(this).position().left;
   mod4_mask.show().stop().animate({"left":li_Left,"width":"242px","top":"0px","height":"242px"},180);
   mod4_mask_a.html(mask_value[mod4_index]);
})
//方向js文件

 module4_ul.mouseleave(function(){
    mod4_mask.animate({"top":-242},200);
 })
 //联系方式
 //普通方式============
//  var _top=100;
//  var xianzhi=_top;
//  var scrollHeight=0;
//  var dingHeight=0;
//  var bianHeight=0;
//  var duix;
//  function aa(){
//      duix=document.getElementById("lianXi");
//  	 zhiXing();
//  }
//  function zhiXing(){
//  	var jgTime=10;
//  	if (window.innerHeight) {
//            scrollHeight= window.pageYOffset;
//        }else if (document.documentElement && document.documentElement.scrollTop){
//            scrollHeight= document.documentElement.scrollTop;
//        }else if (document.body) {
//            scrollHeight= document.body.scrollTop;
//        }
//     dingHeight=scrollHeight-duix.offsetTop+_top;
//     bianHeight=duix.offsetTop+dingHeight/10;
//     if (bianHeight<_top){
//     	bianHeight=_top;
//     };
//     if (bianHeight != xianzhi){
//     	duix.style.top = bianHeight +"px";
//     	jgTime=10;
//     };
//     xianzhi=bianHeight;
//     setTimeout(zhiXing,jgTime);
//  } 
// aa();
var lianXi=$("#lianXi");
var lianXi_li=$("#lianXi li");
var lianXi_span=$("#lianXi li a span");
$(window).scroll(function(){
	if (lianXi.offset().top<700){
		lianXi.hide();
	}else{
		lianXi.show();
	}
})
lianXi_li.eq(3).css("background-color","#797979").hover(function(){
	$(this).css("background-color","#fc7878");
},function(){
	$(this).css("background-color","#797979");
}).click(function(){
	lianXi.hide();
	/*sssssssssssssssssssssssssssssssssssssssssssssssssss*/
    $("html,body").animate({scrollTop:0},500);
	
	/*sssssssssssssssssssssssssssssssssssssssssssssssssss*/
})

lianXi_li.eq(1).hover(function(){
	$(this).find("p").fadeIn();
},function(){
	$(this).find("p").fadeOut();
})


lianXi_span.eq(1).css("background-position-x",-26);
lianXi_span.eq(2).css({"background-position-y":23,"backgroundPosition-x":2});
lianXi_span.eq(3).css({"background-position-y":23,"backgroundPosition-x":-29});
