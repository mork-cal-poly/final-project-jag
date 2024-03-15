let timer = 0;

function setup() {
  // For ordering nodes in the DOM
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}

function draw() {
  background(220);

 /* if (timer > 60 && timer < 100) {
    text("Hi!", 200, 200);
  }
  timer++; */

  //_________ Background x, y, floor
  drawBackground(0,0,color(202, 240, 248),color(255))
  
  //_______________Dog________________
    //x,y,colorDark,colorLight,colorEye
     drawDog(250,390,color(29,53,87),color(241,233,218),color(0));
     
}
//_________________Draw Background____________

function drawBackground(x,y,colorFloor,colorSnow){
  push();
    //—Floor
    translate(x,y)
    fill(colorFloor)
    noStroke();
    rect(0, 300, 400, 100) 
   pop();

}

//_________________Function for Dog___________________
function drawDog(x,y,colorDark,colorLight,colorEye){

  push();
    translate(x, y);
    //noStroke();
  
  //arms
    fill(colorDark);
    ellipse(-90,-23,25,50);
    ellipse(-75,-23,25,50);

  //tail
    fill(colorLight);
    ellipse(0,-50,100,20);


  //----body
    fill(colorDark);
    ellipse(-40,-65,130,90);

  //head
    fill(colorLight);
    ellipse(-100,-62.5,80);

  //leg
    fill(colorDark);
    ellipse(-5,-35,60);
    ellipse(-25,-10,25,20);
  
  //ears
    fill(colorDark);
    ellipse(-72,-87.5,25,40);
    ellipse(-135,-55,25,50);
  
  //nose
    fill(colorDark);
    ellipse(-87.5,-50,8);

  //eyes
    fill(colorEye);
    strokeWeight(4);
    line(-112.5,-50,-105,-60);
    line(-87.5,-65,-77,-70);

  pop(); 





}


