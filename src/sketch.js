let timer = 0;
let clicked = false;
let scene = 0;

function setup() {
  // For ordering nodes in the DOM
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}

function draw() {
    if (scene == 0) {
    
        background(253,231,184);
      
        //_________ Background x, y, floor
        drawBackground(0,0,color(255,218,146))
        
      
        //draw surprise
         drawSurprise(0,0,color(253,231,184));
      
        //_______________Dog________________
          //x,y,colorDark,colorLight,colorEye
          drawDog(250,390,color(239,239,239),color('#F9F6EE'),color(0));
      
        //draw super
            if(clicked){
              drawCloud(0,0,color(181,230,252));
              drawSuper(200,390,color(239,239,239),color('#F9F6EE'),color(0),color('#89CFF0'));
            
          }
    } else if (scene == 1) {
      background(255);
    } else {
      drawBG()
      drawPuffy(350+dogX,0)
        if(dogX > -350){  
        dogX = dogX - 1
        }
        if(dogX <= -350){
          rotateP = rotateP - 0.1
          drawKitty(0,0)
          drawTail(270,300,7*PI/4+rotateP)
        }
          }
    timer++;
    if (timer > 400 && scene == 0) {
      scene = 1;
      timer = 0;

    } else if (timer > 200 && scene == 1) {
      scene = 2;
      timer = 0;

    } 
}
//_________________Draw Background____________



//_____________Draw Background
function drawBackground(x,y,colorFloor){
  push();
    //—Floor
    translate(x,y)
    fill(colorFloor)
    noStroke();
    rect(0, 300, 400, 100) 
  
  pop(); 
}

function drawCloud(x,y, colorCloud){
  push();
  
    //dream cloud 
    translate(x,y);
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
function drawSuper(x,y,colorDark,colorLight,colorEye,colorMask){

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
    fill(colorMask);
    quad(-125,-305,-100,-375,64,-325,55,-315);

  //head
    fill(colorLight);
    ellipse(50,-337.5,80,65);

  //mask
    fill(colorMask);
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

//_________________Draw Surprise____________


function drawSurprise(x,y,colorDream){
  push();
  
    //dream appears 
    fill(colorDream);
    noStroke();
    translate(x,y);
    rect(0,0,400,270);
  
  pop(); 
} 
  
  function mouseClicked() {
    if (mouseY > 270) { 
      clicked = !clicked;
    }

    
  }




