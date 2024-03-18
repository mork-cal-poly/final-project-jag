let timer = 0;
let clicked = false;
let scene = 0;
let dogX = 0
let rotateP = 0

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
      background('#ADD8E6');

  
   // Draw random hearts
  for (let i = 0; i < 15; i++) {
    drawHeart(random(width), random(height));
  }
  
  // Draw other elements
  drawBHeart(0, 0);
  drawPuffy(0, 0, color('#F9F6EE'), color('black'), color('#89CFF0'));
  drawLippy(0, 0, color('gray'), color('black'), color('pink'));
  
  
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

//----------function for background(Han's scene 3)
function drawBG(){
  fill("rgb(255,245,222)")
  noStroke()
  rect(0,0,400,400)
  
  // floor
  fill("rgb(255,218,146)")
  strokeWeight(5)
  stroke("rgb(194,178,148)") 
  triangle(400,400,250,250,0,400)

  // left wall  
  fill("rgb(253,231,184)")
  noStroke()
  quad(250,0,400,0,400,396,250,246)
  
  // window
  fill("rgb(181,230,252)")
  strokeWeight(7)
  stroke("rgb(196,194,194)") 
  quad(200,50, 200,210,50,300,50,100)
  strokeWeight(5)
  line(125,75,126,251)
  strokeWeight(10)
  stroke("rgb(255,255,255)") 
  line(47,313,210,215)
  line(45,92,205,40)
}

//----------function for kitty(Han's scene 3)
function drawKitty(x,y){
  push()
  translate(x,y)
  //kitty face
  fill("rgb(251,217,217)") //ear
  strokeWeight(3)
  stroke("rgb(114,111,111)")
  triangle(140,185,150,160,130,160) 
  triangle(165,160,185,145,180,175)
  
  fill("rgb(114,111,111)")//body
  noStroke()
  rect(145,190,30,50)
  
  fill("rgb(114,111,111)")//face
  ellipse(160,180,45,45)
  
  // eyes and nose
  fill(0)
  noStroke()
  ellipse(150,180,6,10)
  ellipse(170,180,6,10)
  fill("rgb(251,217,217)")
  ellipse(160,190,10,6)
  
  //kitty hand
  fill("rgb(136,133,133)")
  noStroke()
  ellipse(145,215,10,30)
  rotate(PI/4)
  ellipse(270,10,10,30)
  pop()
}
//----------function for dog (Han's scene 3)
  function drawPuffy(dogX,y) { 
  push()
  translate(dogX,y)
  //puffy body
  noStroke()
  fill(255)
  ellipse(235,310,85,65)
  
  
  //puffy face
  fill(255)
  ellipse(195,300,60,60)//head
  ellipse(175,310,30,20)//nose
  fill("rgb(239,239,239)")
  ellipse(205,305,20,45)//ear
  fill(0)
  ellipse(180,295,7,13)//eye
  ellipse(163,310,8,8)//nose
    
  //puffy leg
  fill(255)
  ellipse(220,340,20,25)
  ellipse(260,335,20,30)
  pop()
  }

//----------function for dog's tail (Han's scene 3)
function drawTail(x,y,rotateP){
  //puffy tails
  push()
  translate(x,y)
  rotate(rotateP)
  fill("rgb(255,255,255)")
  noStroke()
  arc(0,0, 15,50,0,PI)
  pop()

  }


// Function for Heart
function drawHeart(x, y) {
  push();
  translate(x, y);
  noStroke();
  fill('red');
  ellipse(0, 0, 20);
  ellipse(15, 0, 20);
  triangle(-9, 5, 24, 5, 7.5, 25);
  pop();
}

// Function for big heart
function drawBHeart(x, y) {
  push();
  translate(150, 150);
  scale(7.5);
  noStroke();
  fill('pink');
  ellipse(0, 0, 20);
  ellipse(15, 0, 20);
  triangle(-8.7, 5, 23.8, 5, 7.5, 25);
  pop();
}

// Function for drawing Puffy
function drawPuffy(x, y, colorFur, colorEye, colorMask) {
  push();
  translate(20, 0);
  noStroke();
  //tail
  fill(colorFur);
  ellipse(115, 225, 40, 20);
  //legs
  fill(colorFur);
  rect(140, 180, 40, 15);
  rect(140, 215, 40, 15);
  ellipse(135, 200, 60, 70);
  rect(135, 190, 40, 15);
  //ears
  ellipse(110, 150, 25, 15);
  ellipse(165, 150, 25, 15);
  //head
  ellipse(140, 160, 50, 40);
  rect(130, 220, 40, 15);
  //face
  fill(colorMask);
  rect(115, 150, 50, 15);
  fill(colorEye);
  ellipse(125, 160, 10);
  ellipse(155, 160, 10);
  ellipse(140, 165, 7, 5);
  pop();
}

// Function for drawing Lippy
function drawLippy(x, y, colorFur, colorEye, colorNose) {
  push();
  noStroke();
  //body
  fill(colorFur);
  ellipse(250, 250, 35, 80);
  triangle(225, 155, 245, 150, 235, 130);
  triangle(255, 150, 275, 155, 265, 130);
  ellipse(250, 200, 70, 80);
  //head
  ellipse(250, 160, 50, 40);
  //face
  fill(colorEye);
  ellipse(235, 160, 10);
  ellipse(260, 160, 10);
  fill(colorNose);
  triangle(242, 165, 253, 165, 248, 170);
  pop();
}



