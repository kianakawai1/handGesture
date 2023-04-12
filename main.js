Webcam.set({
    width:350,
    height:290,
    image_format:'png',
    png_quality:90,
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function captureImg(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML="<img id='capturedImg' src='"+data_uri+"'/>";
    });
}
function speak(){
    var synth=window.speechSynthesis;
    data1="The first prediction is"+prediction1;
    data2="And the second prediction is"+prediction2;
    var utterThis = new SpeechSynthesisUtterance(data1=data2);
    synth.speak(utterThis);
}

classifier.ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/9BrjcADqo/model.json', modelLoaded);
function modelLoaded(){
    console.log("yellow");
}