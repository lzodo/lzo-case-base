/* pageViewer(回调函数,动画类,索引切换页面ul,li单击是的类)

*/
(function($){
     $.fn.pageViewer=function(huiDiao,DH,ulsy,liLei){
     	this.huiDiao=huiDiao;
        this.DH=DH;
        this.ulsy=ulsy;
        this.liLei=liLei;
     	init.call(this);
     	zhiXing.call(this);
     }
     function init(){
        var $this=this;
        var $ul=$("<ul class='"+this.ulsy+"' style='position:fixed;z-index:1'></ul>");
        this.index=0;
        this.addClass("ui-pageViewer");
        this.children().addClass("ui-page").each(function(i){
            $ul.append($("<li></li>"))
        });
        $ul.find("li").eq(0).addClass($this.liLei);
        $ul.find("li").click(function(){
            $(this).addClass($this.liLei).siblings().removeClass($this.liLei);
            $this.trigger("mousewheel",$(this).index());
        })//给ul li单击时触发这个对象的滚动事件 得到li的索引 传到下面函数中
        this.prepend($ul);
     }
     function zhiXing(){
        var $this=this;
        $this.bind("mousewheel DOMMouseScroll",function(e,ind){//ind 是触发器传来的
            var index=$this.index;
            $(this).children().removeClass($this.DH);//在这删除页面动画有退场效果
         	//console.log(e.originalEvent.detail) 3 -3
         	//console.log(e.originalEvent.wheelDelta) 120 -120
            if (typeof ind!=="number"){//如果单击了li index就为li索引

               var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
                           (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox
               if (delta > 0) {
                  // index--;
                   // if (index<0){return;};
                      if (--index<0){
                          return;
                      };
               } else if (delta < 0) {
                   // index++;
                   // if (index>$this.children("div").size()-1){return;};
                   if (++index>$this.children().size()-2){
                      return;
                   };
               }
               if(!$this.is(':animated')){//如果正在执行动画是就不执行这个
                   $this.animate({"top":"-"+index+"00%"},800,function(){
                      $this.huiDiao&&$this.huiDiao(index,$this.children().eq(index));
                      $this.find("ul li").eq(index).addClass($this.liLei).siblings().removeClass($this.liLei);
                   })
                   $this.index=index;
               }
            }else{//如果单击按钮切换时就用这个样式
               index=ind;
               $this.stop().animate({"top":"-"+index+"00%"},800,function(){
                  $this.huiDiao&&$this.huiDiao(index,$this.children().eq(index));
                  $this.find("ul li").eq(index).addClass($this.liLei).siblings().removeClass($this.liLei);
               })
               $this.index=index;

            }
        });
     	$this.huiDiao&&$this.huiDiao(this.index);
     }
})(jQuery)