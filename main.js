left_x = 0;
right_x = 0;


function preload(){

    mask = loadImage("https://i.postimg.cc/jS6dP6bj/gogles.png");
}

function take_snap(){
    save("myfilteredselfie.png");
    }

function setup(){
    canvas = createCanvas(300,300);
    canvas.center()
    video= createCapture(VIDEO)
    video.size(300,300);
    video.hide()
    posenet = ml5.poseNet(video,modelloaded);

    posenet.on('pose', gotPoses)


}   

function modelloaded(){
    console.log("Posenet is initialised");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("left x = " + results[0].pose.leftEye.x);
        console.log("right x " + results[0].pose.leftEye.y)

        left_x =  results[0].pose.leftEye.x-65;
        right_x = results[0].pose.leftEye.y-50;
    }
}

function draw(){
    image(video,0,0,300,300);
    image(mask,left_x,right_x,100,100);
}