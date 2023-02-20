if (localStorage.getItem('test') == true) {
    eval('<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">У вас больше нет доступа к сайту.');
} else {
    window.location.href = '/';
}