noseX=0;
noseY=0;
rightwristX=0;
leftwristX=0;
difference=0;
function setup(){
    canvas=createCanvas(400,400);
    canvas.position(550, 150);
    video=createCapture(VIDEO);
    video.size(400,400);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    background('#808080');
    square(noseX, noseY, difference);
    fill('#237d36');
    stroke('black');

    document.getElementById("difference").innerHTML="Width and Height of the square is = "+ difference;
}

function modelLoaded(){
    console.log("Model Loaded");
}

function gotPoses(results){
    if(results.length>0){
    console.log(results);

    noseX= results[0].pose.nose.x;
    noseY= results[0].pose.nose.y;
    console.log("noseX = " + noseX + " noseY = " + noseY);

    rightwristX=results[0].pose.rightWrist.x;
    leftwristX=results[0].pose.leftWrist.x;
    difference=floor(leftwristX-rightwristX);

    console.log("rightwristX = " + rightwristX + " leftwristX = " + leftwristX + " difference = " +difference);
    }
}