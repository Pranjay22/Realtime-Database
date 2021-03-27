noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristY=0;

function setup() {
    video = createCapture(VIDEO); 
    video.size(550,500);

    canvas = createCanvas(550,550); 
    canvas.position(560,150);

    m15=m15poseNet(video,modelLoaded);
    poseNet.on('poses',getPoses)
}
function modelLoaded() {
    console.log('PoseNet Is Initialized!');
  }
  
  
  function gotPoses(results)
  {
      if(results.length > 0)
      {
          console.log(results)
          noseX = results[0].pose.nose.x;
          noseY = results[0].pose.nose.noseY;
          console.log("noseX = " + noseX +" noseY = " + noseY);

          leftWristX = results[0].poseleftWrist.x;
          rightWristX = results[0].poserightWrist.x;
          difference = floor(leftWristX - rightWristX);

          console.log("leftWristX  = " + leftWristX  + " rightWristX = "+ rightWristX + " difference = " + difference);
      
      }
  }
  function draw() {
    background('#969A97');
    
      document.getElementById("square_side").innerHTML = "Width And Height of a Square will be = " + difference +"px";
      fill('#F90093');
      stroke('#F90093');
      square(noseX, noseY, difference);
    }
    