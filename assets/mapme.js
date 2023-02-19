navigator.geolocation.getCurrentPosition(success, error, {
    // высокая точность
    enableHighAccuracy: true
})

function success({ coords }) {
    // получаем широту и долготу
    const { latitude, longitude } = coords
    const position = [latitude, longitude]
    document.getElementById('mapme').innerHTML = position;
}

function error({ message }) {
    document.getElementById('mapme').innerHTML = message // при отказе в доступе получаем PositionError: User denied Geolocation
}