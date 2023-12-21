var SpeechRecognition = window.webkitSpeechRecognition
var recognition = new SpeechRecognition()
imgid=""
function takeSnapshot() {
    Webcam.snap(function (data) {
        if (imgid == "s1") {
            document.getElementById("result1").innerHTML = "<img id='s1' src='" + data + "'>"
        }
        if (imgid == "s2") {
            document.getElementById("result2").innerHTML = "<img id='s2' src='" + data + "'>"
        } if (imgid == "s3") {
            document.getElementById("result3").innerHTML = "<img id='s3' src='" + data + "'>"
        }
    })
}

Webcam.set({
    width: 360, height: 250, image_format: "png", png_quality: 90

})
camera = document.getElementById("camera")
function speak() {
    Synth = window.speechSynthesis
    // speakData=document.getElementById("textbox").value

    Webcam.attach(camera)
    speakdata = "taking your selfie in 5 seconds"
    utterthis = new SpeechSynthesisUtterance(speakdata)
    Synth.speak(utterthis)

    setTimeout(function () {
        imgid = "s1"
        takeSnapshot()
        speakdata = "taking your selfie in 10 seconds"
        utterthis = new SpeechSynthesisUtterance(speakdata)
        Synth.speak(utterthis)
    },5000)
    setTimeout(function () {
        imgid = "s2"
        takeSnapshot()
        speakdata = "taking your selfie in 15 seconds"
        utterthis = new SpeechSynthesisUtterance(speakdata)
        Synth.speak(utterthis)
    },10000)
    setTimeout(function () {
        imgid = "s3"
        takeSnapshot()
      
    },15000)
}
function start() {
    recognition.start()
}
recognition.onresult = function (event) {
    // console.log(event);
    var content = event.results[0][0].transcript
    console.log(content);
    if (content == "selfie") {
        speak()

    }
}
