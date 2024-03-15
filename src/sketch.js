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
     drawDog(250,390,color(29,53,87),color(241,233,218),color(0))
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

  //----body
    fill(colorDark);
    ellipse(-40,-65,130,90);

  //head
    fill(colorLight);
    ellipse(-100,-62.5,80);

  //

  


  /*//---Arms
  fill(colorDark);
  ellipse(-60,-40,25,40);
  ellipse(-75,-40,25,40);

  //----body
    fill(colorDark);
    ellipse(-15,-80,135,90);
    
  //----head
    fill(colorLight);
    ellipse(-75,-90,80,80);
  
  //---ears 
    fill(colorDark);
    ellipse(-60,-115,25,40);
    ellipse(-125,-90,25,45);
  
  //---Tail
  //  fill(colorDark);
    

  //---Leg
    fill(colorDark);
    ellipse(0,-50,75,50);
    ellipse(-50,-12.5,-25,10);

  //---Eyes
    fill(colorEye);
    //line(-112.5,-50,-105,-60);
    line(-87.5,-62.5,-77,-70); */








  
  pop(); 





}


