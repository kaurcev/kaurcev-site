var recognizer = new webkitSpeechRecognition();
recognizer.interimResults = true;


recognizer.lang = 'ru-Ru';

recognizer.onresult = function(event) {
    var result = event.results[event.resultIndex];
    if (result.isFinal) {
        document.getElementById('texted').innerHTML = result[0].transcript;
    } else {
        document.getElementById('texted').innerHTML = result[0].transcript;
    }
};

function speech() {
    recognizer.start();
}

var synth = window.speechSynthesis;

function stop() {
    synth.pause();
}