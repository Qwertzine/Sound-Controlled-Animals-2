function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/JQF4XOt3l/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}