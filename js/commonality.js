$(function () {

    //注意：导航 依赖 element 模块，否则无法进行功能性操作
    layui.use([
        'element',
        'jquery',
        'util',
        'form',
    ], function () {
        var
            element = layui.element,
            $ = layui.jquery,
            util = layui.util,
            form = layui.form;

        //返回顶部
        util.fixbar({
            bar1: '&#xe698;'+'<span class="layui-badge" style="top:-72px;left:15px;">0</span>',
            bgcolor: "#393D49",
            css: {
                right: 60,
                bottom: 60,
            },
            click: function (type) {
                if (type === 'bar1') {
                    $(location).attr('href', 'http://www.baidu.com')
                }
            }
        });

        //监听提交
        // formAntistop-关键字搜索
        form.on('submit(formAntistop)', function (data) {
            layer.msg(JSON.stringify(data.field));
            return false;
        });

    });
})