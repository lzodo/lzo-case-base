function FloatTarget(id,dingtop){
	this.id=id;
    this.dingtop=dingtop;//输入一个距离浏览器顶部的高度
    this.duiXiang=document.getElementById(this.id);
    this.scrollHeight=0;//滚动高度变两
    this.jianGeTime=10;
}
FloatTarget.prototype.zhiXing=function(){
    if (window.innerHeight) {
           this.scrollHeight= window.pageYOffset;
    }else if (document.documentElement && document.documentElement.scrollTop){
        this.scrollHeight= document.documentElement.scrollTop;
    }else if (document.body) {
        this.scrollHeight= document.body.scrollTop;
    }//获取可视区的高度
    this.scrollHeight=this.scrollHeight-this.duiXiang.offsetTop+this.dingtop;//去掉对象原本的高度
    this.scrollHeight=this.duiXiang.offsetTop+this.scrollHeight/8;
    //没次执行都this.scrollHeight都为当前duiXiang.offsetTop加减 十分之一下上滑动的距离
    //直到平衡  this.scrollHeight/10 的值无限小
    if (this.scrollHeight<this.dingtop){
        this.scrollHeight=this.dingtop;
    }//当向上滑时如果this.scrollHeight比我们定的top小得时候，就让他等于top值；
    this.duiXiang.style.top=this.scrollHeight+"px";
    setTimeout(add,this.jianGeTime);//过一定的时间执行一次
}

var Float=new FloatTarget("lianXi",290);
 Float.zhiXing();
 function add(){
     Float.zhiXing();
 }
