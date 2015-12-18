$(function(){
	$("#viewer div.page").each(function(i){
		var $this=$(this);
		$this.index()==1?$this.css({"background-color":"#D97F5C"}):
		                 $this.css({"background-image":"url(images/"+(i+1)+".jpg)"})
	})
  $("ul.ulsy li").eq(0).addClass("hover");
  $("ul.ulsy li").click(function(){
    $(this).addClass("hover").siblings("li").removeClass("hover");
  })

})
$(function(){
   function getPage(index,page){
       $("#viewer div.page:eq("+index+")").addClass("ani");
       // switch(index){
       // 	   case 0:break;
       // 	   case 1:$("img").filter(".ani")?$("img.ani").animate({"top":100,opacity:1},1000):$("img.dh").animate({"top":250,opacity:0});
       // 	          break;
       // 	   case 2:break;
       // 	   case 3:break;
       // 	   case 4:break;
       // 	   case 5:break;
       // 	   case 6:break;
       // }
   }
   $("#viewer").pageViewer(getPage,"ani","ulsy","hover");
})
 // $(function(){     //on
 // 	$("#viewer").on("mousewheel DOMMouseScroll", function (e) {
 // 		var $this=$(this);
 // 		var index=$this.attr("index");
 // 		//console.log(e.originalEvent.detail) 3 -3
 // 		//console.log(e.originalEvent.wheelDelta) 120 -120
 // 	    var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
 // 	                (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox
 // 	    if (delta > 0) {
 // 	    	// index--;
 // 	        // if (index<0){return;};
 //             if (--index<0){
 //             	return;
 //             };
 // 	    } else if (delta < 0) {
 // 	        // index++;
 // 	        // if (index>$this.children("div").size()-1){return;};
 // 	        if (++index>$this.children("div").size()-1){
 // 	        	return;
 // 	        };
 // 	    }
 // 	    if(!$this.is(':animated')){//如果正在执行动画是就不执行这个
 // 	        $this.animate({"top":"-"+index+"00%"},1000)
 // 	        $this.attr("index",index)
 // 	    }
 //     });
 // })

