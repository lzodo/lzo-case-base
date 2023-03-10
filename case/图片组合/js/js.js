$(function () {
    var winWid = $(window).width();
    var winHei = $(window).height();
    var index = 0;
    var kaiGuan = true;//开关 li点击的二次的时候散开
    for (var i = 0; i < 24; i++) {
        // var jiaodu = Math.random() * 40 - 20;
        var Li = $("<li><img src=images/" + (i + 1) + ".jpg /></li>");
        Li.data("x", i % 6);//给每个li一个坐标
        Li.data("y", Math.floor(i / 6));//给每个li一个坐标
        $("#warp").append(Li);
        Li.css({
            "transform": "rotate(" + (Math.random() * 40 - 20) + "deg)",
            "backgroundPosition": -(Li.data("x") * 125) + "px " + -(Li.data("y") * 125) + "px",//这个空格一定要加上
            "left": "50%",
            "margin-left": -62,
            "top": "50%",
            "margin-top": -62
        })//给li添加初始化样式
        dingJuLi(Li, winWid, winHei);//固定位置
        Li.click(function () {//当点击li时
            if (kaiGuan) {//如果点击奇数次执行
                var $This = $(this);
                index = $This.index();
                $("ul li img").animate({//先把img的外边距去掉 宽高变大
                    "width": 125,
                    "height": 125,
                    "margin": 0
                }, 500, function () {//之后遍历li
                    $("ul li").each(function (i) {
                        quJuLi($(this), winHei, winWid);
                    })//遍历结束
                    $("ul li").css({//点击的时候给li加背景图片(大图)
                        "backgroundImage": "url(images/big/" + (index + 1) + ".jpg)",
                        "transform": "rotate(0deg)",
                        "transition": ".5s transform"
                    })
                    $(this).fadeOut();//隐藏小img
                })//img animate动画结束
                $("input").show();//按钮显示
                $("#zhtp_left").click(function () { //点击左边按钮时	
                    var liArr = [];
                    for (var i = 0; i < 24; i++) {
                        liArr[i] = i;
                    }
                    if (index > 0) { index-- } else { index = 23 }
                    var time = setInterval(function () {//逐个li背景切换
                        var ran = Math.floor(Math.random() * liArr.length);
                        $("ul li").eq(liArr[ran]).css({
                            "backgroundImage": "url(images/big/" + (index + 1) + ".jpg)"
                        })
                        liArr.splice(ran, 1);
                        if (liArr.length == 0) { clearInterval(time) };
                    }, 30)

                })
                $("#zhtp_right").click(function () {
                    var liArr = [];
                    for (var i = 0; i < 24; i++) {
                        liArr[i] = i;
                    }
                    index++;
                    if (index == 24) {
                        index = 0;
                    };
                    var time = setInterval(function () {
                        var ran = Math.floor(Math.random() * liArr.length);
                        $("ul li").eq(liArr[ran]).css({
                            "backgroundImage": "url(images/big/" + (index + 1) + ".jpg)"
                        })
                        liArr.splice(ran, 1);
                        if (liArr.length == 0) { clearInterval(time) };
                    }, 30)
                })
                kaiGuan = !kaiGuan;
            } else {//当点击li偶数次时
                $("input").hide();
                $("#warp li").each(function (i) {
                    $(this).css({
                        "backgroundImage": "",
                        "transform": "rotate(" + (Math.random() * 40 - 20) + "deg)"
                    })
                })
                $("ul li img").fadeIn(200).animate({
                    "width": 115,
                    "height": 115,
                    "margin": 5,
                }, 500)
                $("#warp li").each(function (i) {
                    dingJuLi($(this), winWid, winHei)
                })
                kaiGuan = !kaiGuan;
            }
        })//单击li结束
    }//for循环结束

    function quJuLi(obj, winHei, winWid) {//去距离函数
        switch (obj.data("y")) {//重新定每行的位置(无间距)
            case 0: obj.css({
                "top": winHei / 2 - 187
            })
                break;
            case 1: obj.css({
                "top": winHei / 2 - 62
            })
                break;
            case 2: obj.css({
                "top": winHei / 2 + 63
            })
                break;
            case 3: obj.css({
                "top": winHei / 2 + 188
            })
                break;
        }
        switch (obj.data("x")) {//重新定每列的位置(无间距)
            case 0: obj.css({
                "left": winWid / 2 - 312
            })
                break;
            case 1: obj.css({
                "left": winWid / 2 - 187
            })
                break;
            case 2: obj.css({
                "left": winWid / 2 - 62
            })
                break;
            case 3: obj.css({
                "left": winWid / 2 + 63
            })
                break;
            case 4: obj.css({
                "left": winWid / 2 + 188
            })
                break;
            case 5: obj.css({
                "left": winWid / 2 + 313
            })
                break;
        }
    }
    function dingJuLi(obj, winWid, winHei) {//定距离函数
        switch (obj.data("x")) {//计算每一列的位置
            case 0: obj.css({
                "left": (winWid / 2 - 62) - 0.22 * winWid,
                "transition": ".5s left"
            });
                break;
            case 1: obj.css({
                "left": (winWid / 2 - 62) - 0.11 * winWid,
                "transition": ".5s left"
            });
                break;
            case 2: obj.css({
                "left": (winWid / 2 - 62),
                "transition": ".5s left"
            });
                break;
            case 3: obj.css({
                "left": (winWid / 2 - 62) + 0.11 * winWid,
                "transition": ".5s left"
            });
                break;
            case 4: obj.css({
                "left": (winWid / 2 - 62) + 0.22 * winWid,
                "transition": ".5s left"
            });
                break;
            case 5: obj.css({
                "left": (winWid / 2 - 62) + 0.33 * winWid,
                "transition": ".5s left"
            });
                break;
        }
        switch (obj.data("y")) {//计算每一行的位置
            case 0: obj.css({
                "top": (winHei / 2) - 0.33 * winHei,
                "transition": ".5s top"
            });
                break;
            case 1: obj.css({
                "top": (winHei / 2) - 0.11 * winHei,
                "transition": ".5s top"
            });
                break;
            case 2: obj.css({
                "top": (winHei / 2) + 0.11 * winHei,
                "transition": ".5s top"
            });
                break;
            case 3: obj.css({
                "top": (winHei / 2) + 0.33 * winHei,
                "transition": ".5s top"
            });
                break;
        }
    }
})//jQuery函数结束