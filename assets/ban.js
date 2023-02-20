var baban = '<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"><div>У вас больше нет доступа к сайту.</div>'
if (localStorage.getItem('ban') == 'true') {
    eval('document.write(baban);');
} else {}