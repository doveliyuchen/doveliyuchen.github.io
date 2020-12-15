var zan = document.getElementById('zan');

var num1 = document.getElementById('num1');

var flag1 = 0;

zan.onclick = function() {
    if (flag1 == 0) {
        num1.innerHTML++;
    }
    if (flag1 == 1) {
        num1.innerHTML--;
    }
    if (flag1 == 2) {
        num1.innerHTML++;
        flag1 = 0;
    }
    flag1++;
}

// refer link：https://blog.csdn.net/weixin_44089465/article/details/104795378