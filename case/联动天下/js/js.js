/*导航栏*/
var status_w=$("#status div.stat_mid ul.stat_mid_ul li a");
var status=$("#status div.stat_mid");
// status.hover(function(){
// 	alert("c");
// })为什么hover不能用
//var status_wx=$("#status div.stat_mid ul.stat_mid_ul li.wx a");
status_w.hover(function(){
    $(this).animate({"background-position-y":-21},250);
},function(){
    $(this).animate({"background-position-y":0},250);
})
/*==========================menu效果===================*/
var menu_mid=$("#nav div.menu div.menu_mid");
var menu=$("#nav div.menu");
var nav_li=$("#nav div.nav_mid ul.nav_mid_ul li");
var nav_ul=$("#nav div.nav_mid ul.nav_mid_ul");
var nav=$("#nav");
var nav_index=0;
menu.hide();
nav_li.hover(function(){
    nav_index=$(this).index();
    $(this).addClass("hover").siblings().removeClass("hover");
    menu_mid.eq(nav_index).stop().slideDown();
    menu_mid.eq(nav_index).siblings().stop().slideUp();
    menu.fadeIn();
    menu.find("p").show();
},function(){

});
 nav_ul.mouseleave(function(){
 	menu.fadeOut();
 	menu_mid.eq(nav_index).stop().slideUp();
 	setTimeout(function(){
 	   nav_li.eq(nav_index).removeClass("hover");
 	},100)
 })
 menu.css("width",nav.width());
 /*==================banner效果==================*/
 var banner_ulimg_li=$("#banner ul.ban_img li");
 var banner_ulimg=$("#banner ul.ban_img");
 var banner_uldian_li=$("#banner ul.ban_ul li");
 var banner=$("#banner");
 var time=null;
 var ban_index=0;
 for(var i=0;i<banner_ulimg_li.length;i++){
 	banner_ulimg_li.eq(i).css("backgroundImage","url('images/banner"+i+".jpg')");
 }
 banner_uldian_li.eq(0).css({"background-position-y":-12+"px"});
 banner_uldian_li.click(function(){
     ban_index=$(this).index();
     $(this).animate({"background-position-y":-12+"px"},200).siblings().animate({"background-position-y":0+"px"},200);
     banner_ulimg.animate({"left":-ban_index*banner.width()},500);
 })
banner.hover(function(){
	clearInterval(time);
},function(){
	dingTime();
})
 function dingTime(){
        time=setInterval(function(){
     	ban_index++;
     	if (ban_index==banner_uldian_li.length){
     		ban_index=0;
     	}
     	banner_uldian_li.eq(ban_index).animate({"background-position-y":-12+"px"},200).siblings().animate({"background-position-y":0+"px"},200);
     	banner_ulimg.animate({"left":-ban_index*banner.width()},500);
     },2000)
 }
 dingTime();

 //选项卡效果
 var seleTab_li=$("#optionTab ul.opTab_mid li.tab");
 var seleTab_ol=$("#optionTab ul.opTab_mid li.tab ol.selectOl");
 var Tab_index=0;
 seleTab_li.hover(function(){
    Tab_index=$(this).index();
    $(this).find("a").addClass("hover").parent().siblings("li").find("a").removeClass("hover");
    if (Tab_index==0){
         seleTab_ol.slideDown(300);
    };
 },function(){
    seleTab_ol.slideUp(100);
 })
 //选项卡 吸顶盒效果
 var seleTab=$("#optionTab");
 var seleTop=seleTab.offset().top;
 $(window).scroll(function(){
     if ($(document).scrollTop()>=seleTop){
        seleTab.addClass("xidinghe");
     }else{
        seleTab.removeClass("xidinghe");
     }
 })
 //=============================main mod1===============================
var mod1_li=$("#module1 ul.mod1_ul li");
var mod1_img=$("a div.mod1_li_img");
var mod1_word=$("a div.mod1_li_word");
var mod1_color=["#4a9ebd","#90d73d","#f37f21"];
var mod1_index=0;
mod1_li.hover(function(){
    mod1_index=$(this).index();
    $(this).find(mod1_img).stop().animate({"right":-340},300);
    $(this).find(mod1_word).stop().animate({"left":-340},300);
    $(this).animate({"background-color":mod1_color[mod1_index]},300)
},function(){
    $(this).animate({"background-color":"#fff"},300)
    $(this).find(mod1_img).stop().animate({"right":0},300);
    $(this).find(mod1_word).stop().animate({"left":0},300);
})
//mod2 效果=========================
var mod2_gekuai=$("#module2 div.mod2_main div.gekuai");
var mod2_right=$("#module2 div.mod2_main div.gekuai div.mod2_right");
var mod2_li=$("#module2 ul.mod2_ul li");
var mod2_index=0;
var mod2_right_bgcolor=["#57c7a3","#2c77bc","#D64A6B","#D64A6B","#F07532","#5A5FEF"];
mod2_gekuai.eq(0).show();
mod2_li.eq(0).addClass("hover");
for(var i=0;i<mod2_gekuai.length;i++){
    mod2_right.eq(i).css({"background-color":mod2_right_bgcolor[i]});
}
mod2_li.hover(function(){
    mod2_index=$(this).index();
    $(this).addClass("hover").siblings().removeClass("hover");
    mod2_gekuai.eq(mod2_index).stop().fadeIn(100).siblings("div").stop().fadeOut(100);
},function(){})
//--------------------mod3 模块三效果-----------------
//无缝滚动
var scrollParent=$("div.mod3_main div.center_show div.scrollParent");
scrollParent[0].innerHTML+=scrollParent[0].innerHTML;
//==li遮罩效果
var mod3_ulImg_li=$("div.center_show div.scrollParent ul li");
var mod3_ulImg=$("div.center_show div.scrollParent ul");
var mod3_ulImg_mask=$("div span");
mod3_ulImg_li.hover(function(){
    $(this).find("div span.top").animate({"top":0},250);
    $(this).find("div span.bottom").animate({"bottom":0},250);
},function(){
    $(this).find("div span.top").animate({"top":-95},250);
    $(this).find("div span.bottom").animate({"bottom":-95},250);
})
//滚动
var mod3_arrowRL=$("div.mod3_main a.arrow");
var mod3_ulImg=$("div.center_show div.scrollParent ul");
var mod3_coun=0;
mod3_arrowRL.eq(0).click(function(){
  mod3_coun--;
  if (mod3_coun<-mod3_ulImg.length/2){
     mod3_coun=-1;
     scrollParent.eq(0).css({"left":0});
     scrollParent.eq(0).stop().animate({"left":mod3_ulImg.width()*mod3_coun},300);
  }
  scrollParent.eq(0).stop().animate({"left":mod3_ulImg.width()*mod3_coun},300);
})
mod3_arrowRL.eq(1).click(function(){
  mod3_coun++;
  if (mod3_coun>0){
     mod3_coun=-mod3_ulImg.length/2+1;
     scrollParent.eq(0).css({"left":-mod3_ulImg.length*mod3_ulImg.width()/2});
     scrollParent.eq(0).stop().animate({"left":mod3_ulImg.width()*mod3_coun},300);
  }
  scrollParent.eq(0).stop().animate({"left":mod3_ulImg.width()*mod3_coun},300);
})
//===================索引 索引选择=====================
var mod3_dian_ul=$("#module3 div.mod3_mid div.mod3_main ul.mod3_li_dian");
var creatLi=null;
for(var i=0;i<mod3_ulImg.length/2-2;i++){
    creatLi=$("<li>")
    mod3_dian_ul.append(creatLi);
}
var mod3_dian_li=$("#module3 div.mod3_mid div.mod3_main ul.mod3_li_dian li");
mod3_dian_ul.find("li").eq(0).addClass("hover");
mod3_dian_li.hover(function(){
    mod3_coun=$(this).index();
    $(this).addClass("hover").siblings().removeClass("hover");   
    scrollParent.eq(0).stop().animate({"left":-mod3_ulImg.width()*mod3_coun},300);
})

var gengduo=$("#module3 div.mod3_mid div.mod3_main a.gengduo");
mod3_arrowRL.hover(function(){
    mod3_dian_ul.fadeOut();
    gengduo.animate({"bottom":70},500);
},function(){
    mod3_dian_ul.fadeIn();
    gengduo.animate({"bottom":30},500);
})
//====================mod4 效果================================
var mod4_arrowLR=$("#module4 div.mod4_min a.mod4_arrow");
var mod4=$("#module4");
var mod4_ul=$("#module4 div.mod4_min div.mod4_show ul.mod4_ul");
mod4_ul[0].innerHTML+=mod4_ul[0].innerHTML;
var mod4_li=$("#module4 div.mod4_min div.mod4_show ul.mod4_ul li");
var mod4_coun=0;
//li移入效果
mod4_li.hover(function(){
    $(this).find("p.mask").animate({"bottom":0},250);
},function(){
    $(this).find("p.mask").animate({"bottom":-240},250);
})
//左右点击切换
mod4_arrowLR.eq(0).click(function(){
    mod4_coun--;
    if (mod4_coun<-mod4_li.length/2){
        mod4_coun=-1;
        mod4_ul.eq(0).css("left",0);
        mod4_ul.eq(0).stop().animate({"left":(mod4_li.width()+20)*mod4_coun},500);
    };
    mod4_ul.eq(0).stop().animate({"left":(mod4_li.width()+20)*mod4_coun},500);
})
mod4_arrowLR.eq(1).click(function(){
    mod4_coun++;
    if (mod4_coun>0){
        mod4_coun=-mod4_li.length/2+1;
        mod4_ul.eq(0).css("left",-(mod4_li.width()+20)*mod4_li.length/2);
        mod4_ul.eq(0).stop().animate({"left":(mod4_li.width()+20)*mod4_coun},500);
    };
    mod4_ul.eq(0).stop().animate({"left":(mod4_li.width()+20)*mod4_coun},500);
})
//右侧悬浮 联系
var lianx=$("#xuanfu");
lianx.css("right",(window.innerWidth-1100)/2-90);

//导航跳转
var seleTab_ol_li=$("#optionTab ul.opTab_mid li.tab ol.selectOl li");
var main=$("#main");
var module=$("#main div.main_mod");
var main_index=0;
var offsettop=0;
//alert(main.offset().top)
//alert(module.eq(1).offset().top)
seleTab_ol_li.click(function(){
    main_index=$(this).index();
    offsettop=module.eq(main_index).offset().top;
   $("html,body").animate({scrollTop:offsettop-60},500);  
})


