noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;
function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function gotPoses(results) {
    if(results.length>0) {
        console.log(results);
        noseX = results[0].pose.noseX;
        noseY = results[0].pose.noseY;
        console.log("noseX = " + noseX + "noseY = " + noseY);

        leftWristX = results[0].pose.leftWristX;
        rightWristX = results[0].pose.rightWristX;
        difference = leftWristX-rightWristX;
        console.log("leftWristY = " + leftWristX + "rightWrightX = " + rightWristX + "difference= " + difference);
    }
}
function modelLoaded() {
    consoft.log('poseNet is initialized');
}
function draw() { 
    background('#969A97');
    fill('#FF0000');
    stroke('#FF0000');
    square(noseX,noseY,difference);
}