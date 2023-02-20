var year = document.getElementById("f_year");
if (year != null) {
    year.innerHTML = new Date().getFullYear();
}
$.ajax({
    url: "https://get.geojs.io/v1/ip/geo.js",
    dataType: "jsonp",
    jsonpCallback: "geoip",
    success: function(data) {
        var region = data.region;
        var country = data.country;
        document.getElementById('country').innerHTML = country + " (" + region + ")";
        var ip = data.ip;
        switch (ip) {
            case "82.200.108.82":
                banana(ip);
                break;
            default:
                console.log("Всё хорошо");
                break;
                ''
        }
    }
});

function banana(ipban) {
    var baban = '<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"><div style="text-align:center"><h1>Упс.. Сработало ограничение.</h1><h2>Ваш IP (' + ipban + ') внесен в список заблокированных.</h2><p class="mini">Обратитесь в службу поддержки: <b>support@kaurcev.tk</b></p></div>'
    eval('document.write(baban);')
}

var UI = {
    loader: document.getElementById('loading_ban'),
    imagepan: document.getElementById('imageopens'),
    imagesrc: document.getElementById('imagesrc'),
    imagealt: document.getElementById('imagealt'),
}

function onloading() {
    UI.loader.remove();
    /*
        document.getElementsByTagName('img')[3].addEventListener('click', function(event) {
        imageopen(this.src, this.alt)
    });
    */
    console.log(navigator);
}

function imageopen(src, alt) {
    UI.imagepan.style.display = 'flex';
    UI.imagesrc.src = src;
    UI.imagealt.innerHTML = alt;
}

function imageexit() {
    UI.imagepan.style.display = 'none';
}

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}


function checkCookies() {
    let cookieNote = document.getElementById('cookie_note');
    let cookieBtnAccept = cookieNote.querySelector('.cookie_accept');

    if (!getCookie('cookies_policy')) {
        cookieNote.classList.add('show');
    }

    cookieBtnAccept.addEventListener('click', function() {
        setCookie('cookies_policy', 'true', 365);
        cookieNote.classList.remove('show');
    });
}

checkCookies();