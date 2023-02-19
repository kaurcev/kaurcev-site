var recognizer = new webkitSpeechRecognition();
recognizer.interimResults = true;


recognizer.lang = 'ru-Ru';

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

var synth = window.speechSynthesis;

function stop() {
    synth.pause();
}

function endspeack() {
    document.getElementById('assistpan').style.display = 'none'
}