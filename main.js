function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500)

    canvas = createCanvas(550, 500);
    canvas.position(550,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    background('#28334d');
    fill('#529dde');
    stroke('#529dde');
    square(noseX, noseY, difference);
}

function modelLoaded(){
    console.log("'PoseNet Is Online!");
}

function gotPoses(){
    
}