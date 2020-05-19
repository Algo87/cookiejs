
let agreeBtn = document.querySelector('.cookies-policy__button');
//блок в котором находится весь текст о cookie;
let agreeElement = document.querySelector('.cookies-policy');


agreeBtn.addEventListener('click', function (e) {
    // console.log('agree');
    setCookie("cookies_agree", "true", 1);
    agreeElement.style.display="none";

});



function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    //время для куки 2 минуты
    d.setTime(d.getTime() + (exdays * 20 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}



function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}



function checkCookie() {
    let cookies_agree = getCookie("cookies_agree");

    if (cookies_agree !== "true") {
        agreeElement.style.display="block";
    }else{
        agreeElement.style.display="none";
    }

}

document.addEventListener("DOMContentLoaded", checkCookie);
// попап с текстом-соглашением
function cookiesFancyboxInit() {
    $('.argee-massage').fancybox({
        helpers: {
            overlay: {
                closeClick: false
            }
        },
        beforeShow: function (a, b) {
            // console.log(a);
            // console.log(b);
            // console.log('beforeShow');
        },
        afterShow: function (instance, current) {
            // console.log('Clicked element:');
            // console.log(current);
        }
    });
}

cookiesFancyboxInit();