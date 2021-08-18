noseX =0;
noseY =0;
RightWristX = 0;
RightWristY = 0;
LeftWristX = 0;
LeftWristY = 0;
difference = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500)
    
    canvas = createCanvas(550, 550);
    canvas.position(560,150);
    

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('Pose Net Is Initialized!!');
}

function gotPoses(results)
{
   if(results.length > 0)
   {
       console.log(results);
       noseX = results[0].poseNet.nose.x;
       noseY = results[0].poseNet.nose.y;

       LeftWristX = results[0].poseNet.leftWrist.x;
       RightWristX = results[0].poseNet.rightWrist.x;
       difference = floor(LeftWristX - RightWristX)

    
   }
}

function draw()
{
   
}

function preload()
{

}