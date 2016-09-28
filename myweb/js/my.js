/**
 * Created by lenovo on 16-9-29.
 */
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 100) {
            // $("#bs-example-navbar-collapse-1").addClass("navbar-fixed-top");
            $(".header-top").addClass("navbar-fixed-top");
            // $(".centerimages").css("");
            $(".centerimages").addClass("alpha");
            // $(".navbar-fixed-top").css("color", "#0f376f");
            //这个问题解决的很疯狂，把addClass的要加载的放到CSS文件最底下加载
        } else {
            $(".centerimages").removeClass("alpha");
            // $("#bs-example-navbar-collapse-1").removeClass("navbar-fixed-top");
            $(".header-top").removeClass("navbar-fixed-top");
        }
        if ($(document).scrollTop() + $(window).height() >= $(document).height()) {
            //alert("哦哦,到底了."+($(document).scrollTop()+ + $(window).height()));
        }
    });
});