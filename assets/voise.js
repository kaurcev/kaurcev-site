function endspeack() {
    document.getElementById('assistpan').style.display = 'none'
}

function stop() {
    setTimeout(() => { endspeack(); }, 1000);
}

function assiststart() {
    try {
        var recognizer = new webkitSpeechRecognition();
        recognizer.interimResults = true;
        recognizer.lang = 'ru-Ru';
        speech();
        recognizer.onresult = function(event) {
            var result = event.results[event.resultIndex];
            if (result.isFinal) {
                document.getElementById('texted').innerHTML = result[0].transcript;
                setTimeout(() => { endspeack(); }, 5000);
            } else {
                document.getElementById('texted').innerHTML = result[0].transcript;
            }
        };

        function speech() {
            document.getElementById('texted').innerHTML = "";
            document.getElementById('assistpan').style.display = 'flex'
            recognizer.start();
        }


    } catch (error) {
        document.getElementById('texted').innerHTML = "Ассистент не поддерживается";
        document.getElementById('adds').style.display = 'none'
        document.getElementById('assistpan').style.display = 'flex'
        setTimeout(() => { endspeack(); }, 5000);
    }
}