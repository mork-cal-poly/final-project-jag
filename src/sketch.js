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

  //_________ Background x, y, floor,cloud
  drawBackground(0,0,color(202, 240, 248),color(255))
  
  //_______________Dog________________
    //x,y,colorDark,colorLight,colorEye
     drawDog(250,390,color(29,53,87),color(241,233,218),color(0));

  //draw super 
     drawSuper(200,390,color(29,53,87),color(241,233,218),color(0));

}
//_________________Draw Background____________

function drawBackground(x,y,colorFloor,colorCloud){
  push();
    //—Floor
    translate(x,y)
    fill(colorFloor)
    noStroke();
    rect(0, 300, 400, 100) 
  
    //dream cloud 
    fill(colorCloud);
    ellipse(200,90,400,200);
    ellipse(120,210,30);
    ellipse(120,260,20);
  
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


//_________________Function for Super___________________
function drawSuper(x,y,colorDark,colorLight,colorEye){

  push();
    translate(x, y);
    //noStroke();
  
  //leg
    fill(colorDark);
    ellipse(-80,-278,50,25);
    ellipse(-70,-270,60,30);
    
  //tail
    fill(colorLight);
    ellipse(-87.5,-300,60,20);


  //----body
    fill(colorDark);
    ellipse(5,-295,150,80);

  //arms
    fill(colorDark);
    ellipse(70,-280,60,30);
  
  //cape
    fill(colorEye);
    quad(-125,-305,-100,-375,64,-325,55,-315);

  //head
    fill(colorLight);
    ellipse(50,-337.5,80,65);

  //mask
    fill(colorDark);
    rect(10,-350,80,20);

  //ears
    push(); 
      translate(0, -340); 
      rotate(3*PI / 4); 
      fill(colorDark);
      ellipse(0, 0, 70, 25); 
    pop(); 
    
  //nose
    fill(colorDark);
   
  //eyes
    fill(colorEye);
    ellipse(70,-340,7);
    
    
  pop(); 
  



}


