$(function () {
    // 轮播图
    var swiper = new Swiper('.swiper-container', {
        // 居中
        centeredSlides: true,
        // 自动重拨
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        // 按钮键
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // 切换键
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // layui
    layui.use([
        'layer',
        'form',
        'util',
    ], function () {
        var
            layer = layui.layer,
            util = layui.util,
            form = layui.form;

        //监听提交
        // formBrand-品牌名称搜索
        form.on('submit(formBrand)', function (data) {
            layer.msg(JSON.stringify(data.field));
            return false;
        });
        // formScope-自定义价格
        form.on('submit(formScope)', function (data) {
            layer.msg(JSON.stringify(data.field));
            return false;
        });
        // 发送地址
        // $(".WindowBut").click(function () {
        //     layer.open({
        //         type: 1,
        //         title: "全国 1000+家体验馆 免费发送地址到手机",
        //         // 皮肤
        //         skin: 'WindowBut-cont',
        //         area: ['420px', '527px'],
        //         // 是否点击遮罩关闭
        //         shadeClose: true,

        //         // 按钮方案1
        //         // btn: ['免费发送短信'],
        //         // yes: function (index, layero) {
        //         //     //按钮【免费发送短信】的回调
        //         //     console.log(1)
        //         // },
        //         content: '传入任意的文本或html',
        //     });
        // })
        // 控制li的显示
        $(".index_smenu>ul>li").hover(function () {
            var submenu = $(this).children("div.submenu");
            submenu.show();
        }, function () {
            var submenu = $(this).children("div.submenu");
            submenu.hide();
        });
        // 控制品牌首字母的显示
        $(".classify dd").click(function () {
            $(".cur").removeClass("cur");
            $(this).addClass("cur");
        })
        // 控制li的显示
        $(".brand>li a").hover(function () {
            var brandName = $(this).children("div.c_hover");
            brandName.stop(false, true).slideDown("fast");
        }, function () {
            var brandName = $(this).children("div.c_hover");
            brandName.stop(false, true).slideUp("fast");
        });



        //倒计时
        //假设为结束日期
        var endTime = new Date("2019, 3, 14"),
            //假设为当前服务器时间，这里采用的是本地时间，实际使用一般是取服务端的
            serverTime = new Date().getTime();

        util.countdown(endTime, serverTime, function (date, serverTime, timer) {
            var str = date[0] + '天' + date[1] + '时' + date[2] + '分' + date[3] + '秒';
            // 正在进行
            layui.$('#inTime').html('活动结束仅剩余：' + str);
            // 结束时间
            layui.$('#getEndTime').html(str + '后活动开启');
        });
        // 补零
        util.digit(9, 2);
        // 结束日期
        layui.$('#endTime').html(util.toDateString(endTime, 'yyyy-MM-dd'));

    });

})