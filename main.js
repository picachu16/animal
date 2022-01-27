
function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/imwvKUlHK/model.json',modelready)
    }
    function modelready(){
        classifier.classify(gotresults)
    }
    function gotresults(error,results){
        if(error){
            console.error(error);
        }
        else{
            console.log(results);
            num1= Math.floor(Math.random()*255)+1;
            num2= Math.floor(Math.random()*255)+1;
            num3= Math.floor(Math.random()*255)+1;
            document.getElementById("result_label").innerHTML="I can hear "+results[0].label;
            document.getElementById("accuracy_label").innerHTML="Accuracy "+(results[0].confidence*100).toFixed(2)+" %";
            document.getElementById("result_label").style.color="rgb("+num1+","+num2+","+num3+")";
           img1=document.getElementById("cat");
           img2=document.getElementById("dog");
           img3=document.getElementById("elephant");
           img4=document.getElementById("background");
           if(results[0].label=="Cat"){
            img1.src="meow.gif";
            img2.src="Screenshot(1).png";
            img3.src="dumbo_image.jpg";
            img4.src="Screenshot(6).png";
           }
           else if(results[0].label=="Dog"){
            img1.src="meow.jpg";
            img2.src="bark.gif";
            img3.src="dumbo_image.jpg";
            img4.src="Screenshot(6).png";
           }
           else if(results[0].label=="Elephant"){
            img1.src="meow.jpg";
            img2.src="Screenshot(1).png";
            img3.src="baby_elephant.gif";
            img4.src="Screenshot(6).png";
           }
           else{
            img1.src="meow.jpg";
            img2.src="Screenshot(1).png";
            img3.src="dumbo_image.jpg";
            img4.src="listen.gif";
           }
        }
    }