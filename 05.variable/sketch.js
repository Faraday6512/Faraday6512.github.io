// // let y = 50;
// // let d = 40;
// // let x1 ,x2;

// // let y;

// // x1 = 50;
// // x2 = 250;
// // y = 60

// let x = 0;
// let y = 0;
// let d = 10;
// let c = 0;
// let r = 0, g = 0, b = 0;

// function setup() {
//   createCanvas(300, 300);
  
// }

// function draw() {



//   // ellipse(75,y,d,d);  // Left
//   // ellipse(175,y,d,d,);  // Middle
//   // ellipse(275,y,d,d,);  // Right  

// }

// function draw(){

//   background(200);
//   // fill(c)l;

//   fill(r,g,b); // 0 ~ 255
//   ellipse(x,y,d,d);
  
//   //noFill();
  
//   d ++; // d = d+1;
//   d %= 300; // d = d %300;

//   //c++;
//   c = c+10;
//   c %= 255;

//   r = r+20;
//   r %= 300;

//   x++;
//   y++;
//   x %= 300;
//   y %= 300;

// //   line(x1, y, x2, y);
// //   line(x1, y*2, x2, y*2);
// //   line(x1, y*3, x2, y*3);
// //   line(x1, y*4, x2, y*4);

// //  y = y+5;
// //  y %= 300;

// }

let x = 300, y = 200, c = 0, d = 100;
let theta = 0.0;

function setup(){

  createCanvas(700,400);

}

function draw(){

  background(0);

  stroke(255);
  fill(255);
  textSize(25);
  text("distance : "+x, 30, 50);
  text("color :"+c,400,50);

  x = map(sin(theta), -1,1,0,400);

  push();
  stroke(255,255,0);
  strokeWeight(5);
  line(0, y+d/2, 700, y+d/2);
  fill(c,0,0);
  ellipse(x,y,d,d);
  ellipse(x+d,y,d,d);
  noFill();
  triangle(x, y, x+d/2, y-d, x+d, y);
  pop();

  x += 5 ;

  theta += 0.1;

  c += 15;
  c %= 255; 

  
  

}