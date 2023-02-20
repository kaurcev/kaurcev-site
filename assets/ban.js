$.ajax({
    url: "https://get.geojs.io/v1/ip/geo.js",
    dataType: "jsonp",
    jsonpCallback: "geoip",
    success: function(data) {
        var ip = data.ip;
        switch (ip) {
            case "82.200.108.82":
                eval('<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">У вас больше нет доступа к сайту.');
                break;
        }
    }
});