var baban = '<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">У вас больше нет доступа к сайту. Лох ебанный'

$.ajax({
    url: "https://get.geojs.io/v1/ip/geo.js",
    dataType: "jsonp",
    jsonpCallback: "geoip",
    success: function(data) {
        var ip = data.ip;
        switch (ip) {
            case "82.200.108.82":
                localStorage.setItem('ban', true);
                eval('document.write(baban);');
                break;
        }
    }
});

if (localStorage.getItem('ban') == true) {
    eval('document.write(baban);');
}