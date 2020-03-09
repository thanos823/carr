var ball;
var Car,database,position;
function setup(){
    database = firebase.database();
    console.log(database)
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    Car = database.ref('car/position')
    Car.on("value",readValue,showerr)
}
function readValue(data){
    position = data.val();
    ball.x = position.x
    ball.y = position.y
}
function showerr(){
    console.log("error")
}
function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    //database.ref('car/position').set({
       // 'x': position.x + x,
        //'y': position.y + y
//
   // })
    ball.x = ball.x + x
    ball.y = ball.y + y
}
