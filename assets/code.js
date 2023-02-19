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

        var ip = data.ip;
        document.getElementById('f_country').innerHTML = country;
        switch (ip) {
            case "1.1.1.1":
                eval('<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">Бан на IP ' + ip);
                break;
        }
    }
});

var UI = {
    loader: document.getElementById('loading_ban'),
}

function onloading() {
    UI.loader.remove();

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