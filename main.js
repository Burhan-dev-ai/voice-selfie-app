var SpeechRecognition=window.webkitSpeechRecognition;
var Recognition=new SpeechRecognition();
 function start() {
     document.getElementById("textbox").innerHTML="";
     Recognition.start();

 }
 Recognition.onresult=function(event){
     console.log(event);
     content=event.results[0][0].transcript;
     document.getElementById("textbox").innerHTML=content;
     if(content=="take my selfie"){
         speak();
     }
    

 }

 function speak(){
     var synth=window.speechSynthesis;
     speak_data="taking your selfie in 5 seconds";
    var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot();
        save();
    },5000);

    

 }

 Webcam.set({
     width: 360,
     height: 250,
     image_format:'png',
     png_quality: 90
 });

 camera=document.getElementById("camera");
 function take_snapshot(){
     Webcam.snap(function(data_uri){
         document.getElementById("result").innerHTML='<img src='+data_uri+' id="capture_img">';
     });
 }
 function save(){
     link=document.getElementById("link");
     image=document.getElementById("capture_img").src;
     link.href=image;
     link.click();
 }