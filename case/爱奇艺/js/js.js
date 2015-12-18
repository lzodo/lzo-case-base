//导航栏效果
// 导航栏样式更换
  $(window).scroll(function(){
  	if ($(document).scrollTop()>0){
        replacejscssfile("css/status1.css", "css/status2.css", "css");
        input_text.css({"background-color":"#fff","color":"#333"})
  	}else{
        replacejscssfile("css/status2.css", "css/status1.css", "css");
        input_text.css({"background-color":"rgba(0,0,0,0)","color":"#fff"})
  	}
  })
//导航栏 a导航的单机效果
var aNav=$("#status div.stat_mid a.nav_up");
var aNav_coun=1;
aNav.click(function(){
    if (aNav_coun){
       aNav.css({"background-position-y":-180});
       aNav.find("p").show();
       aNav_coun=0;
    }else{
       aNav.css({"background-position-y":-110});
       aNav.find("p").hide();
       aNav_coun=1;
    }
})
//input text 历史信息
var input_text=$("#status div.stat_mid form input.statu_text");
var lishi_info=$("#status div.stat_mid div.liShi");
input_text.bind("click focus mouseover",function(e){
	lishi_info.slideDown(50);
	input_text.css({"background-color":"#fff","color":"#333"})
	e.stopPropagation();
})
$(document).click(function(){
	lishi_info.hide()
})//单机文档 因此历史信息
lishi_info.find("p").bind({
	 click:function(e){
	      input_text.val($(this).html());
	      $(this).parent().slideUp(50);
	      if(/status1.css$/.test(document.styleSheets[1].href)){	
	          input_text.css({"background-color":"rgba(0,0,0,0)","color":"#fff"})
	      }//如果是用status1.css 时才执行
	      e.stopPropagation();
          },
      mouseover:function(){input_text.css("background-color","#fff")},

})


//banner滚动div背景图片
var scroImg=$("#banner div.scroImg");
var index_ulwai=$("#banner div.waibian");
var index_LI=$("#banner div.waibian ul.index_ul li");
var bann_index=0;
var bann_time=null;
if (window.innerWidth>=1180){
   index_ulwai.css({"right":(window.innerWidth-1180)/2-15});
}else{
	index_ulwai.css({"right":0});
}
for(var i=0;i<scroImg.length;i++){
	scroImg.eq(i).css("background","url('images/banner"+i+".jpg') no-repeat center");
}
scroImg.eq(0).show().siblings("div.scroImg").hide();
index_LI.hover(function(){
   clearInterval(bann_time);
   bann_index=$(this).index();
   $(this).addClass("hover").siblings().removeClass("hover");
   scroImg.eq(bann_index).fadeIn().siblings("div.scroImg").fadeOut();
},function(){
   zidong();
})
function zidong(){
  bann_time=setInterval(function(){
      bann_index++;
      if (bann_index==9){
          scroImg.eq(bann_index).fadeIn().siblings("div.scroImg").fadeOut();
          bann_index=-1;
      };
      index_LI.eq(bann_index).addClass("hover").siblings().removeClass("hover");
      scroImg.eq(bann_index).fadeIn().siblings("div.scroImg").fadeOut();
  },1000)
}
zidong();
//小广告效果
var div_left=$("#banner div.smollBanner div.smollBan_mid div.banImg1 div.left");
var div_right=$("#banner div.smollBanner div.smollBan_mid div.banImg1 div.right");
var div_banImg1=$("#banner div.smollBanner div.smollBan_mid div.banImg1");
var scrollBan_index=0;
div_banImg1.hover(function(){
   scrollBan_index=$(this).index();
   $(this).find("div.right").stop().animate({"width":740,"margin-right":20},200);
   $(this).siblings().find("div.right").stop().animate({"width":0,"margin-right":0},1500);
   if (scrollBan_index!=div_banImg1.length-1){
     $(this).siblings().not($(this).next()).find("div.left").stop().animate({"width":0,"margin-right":0},300);
     $(this).next().find("div.left").stop().animate({"width":170,"margin-right":20},50)
   }else{
     $(this).siblings().not($(this).prev()).find("div.left").stop().animate({"width":0,"margin-right":0},300);
     $(this).prev().find("div.left").stop().animate({"width":170,"margin-right":20},50)
   }

},function(){
   $(this).find("div.right").stop().animate({"width":0,"margin-right":0},500);
   div_left.stop().animate({"width":170,"margin-right":20},500);
})



