noseX = 0;
noseY = 0;

leftWristX = 0;
rightWristX = 0;

diffrence = 0;


function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,400);
    canvas.position(700,150);
    poseNet = ml5.poseNet(video,modellodded);
    poseNet.on('pose' , gotPoses);
}

function draw()
{
    background('grey');
    text("Sanvi",noseX,noseY);
    fill("purple");
    textSize(diffrence);
    document.getElementById("font_size").innerHTML = "Width and height of Font will be " + diffrence + "px";
}

function modellodded()
{
    console.log("Your Model is Lodded");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose X = " + noseX + "Nose Y = " + noseY );
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        diffrence = floor(leftWristX - rightWristX);
        console.log("Left Wrist X = " + leftWristX + "Right Wrist X = " + rightWristX );
    }
}