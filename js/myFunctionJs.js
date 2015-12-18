/*切换背景*/
var bg_li=$("#switchTab ul li");
var bg_switchTab=$("#switchTab");
var bg_xiala=$("#xiala");
for(var i=0;i<bg_li.length;i++){
	bg_li.eq(i).css({"background":"url('img/bj"+i+".png') no-repeat center","background-size":"100%"});
	bg_li.eq(i).attr("src","img/bj"+i+".png")
}
bg_li.bind({
	mouseover:function(){
	 $(this).stop().animate({"background-size":"110%"},800).siblings().stop().animate({"background-size":"100%"},1000);
    },
    click:function(){
    	var src=$(this).attr("Src");
    	$("body").css({"backgroundImage":"url("+src+")"});
    	bg_switchTab.slideUp(200);
    	bg_xiala.css({"top":0})
    }
})
bg_xiala.click(function(){
	$(this).animate({"top":window.innerHeight},1000)
	bg_switchTab.slideDown(1000);
})