$(function(){
	var suoyin=$("div.banner ul.index_li li.cenli");
	var banImg=$("div.banner div");
	var suoyinFather=$("div.banner ul.index_li");
	var left=$("div.banner ul.index_li a.a1");
	var right=$("div.banner ul.index_li a.a2");
	(function(){
		var coun=0;
		banImg.eq(0).show().siblings("div").hide();
		suoyin.each(function(i){
			$(this).click(function(){
                 coun=i;
                 banImg.eq(i).fadeIn().siblings("div").fadeOut();
                 $(this).addClass("active").siblings("li.cenli").removeClass("active");
			})
		})
		var qianHouFan=function(flag){//跳转函数 flag=ture向左 否则向右
			if (flag){
		    	if ( coun == 0){
		          c = suoyin.length-1;
		    	}else{
		    		c = coun-1;
		    	}
			}else{
                c = ( coun+1 ) % suoyin.length;//当等于循环个数时变成0
			}
			suoyin.eq(c).click();//调用click函数

		}
		left.click(function(){//点击左边是执行
			qianHouFan(true);
		})
		right.click(function(){//点击右边的时候执行
			qianHouFan(false);
		})
		function dingShi(){//设置定时器
			time=setInterval(function(){
				qianHouFan(false);
			},1500);
		}
		dingShi();

		suoyinFather.hover(function(){//移入索引ul是停止定时器
			clearInterval(time);
		},function(){
			dingShi()
		});

	})("souyin","banImg","left","right","suoyinFather")//调用匿名函数
})