let x = 20, y = 80, w = 460, h = 50;
let size = 100, slider = 20;

function setup(){

  createCanvas(500,500)

}

function draw(){

  background(0);

  if(mouseIsPressed)
  {
    if((x <= mouseX && mouseX <= x+w) && (y <= mouseY && mouseY && mouseY <= y+h))
    {
      slider = mouseX;
      size = map(slider, x, x+w, 100, width);
    }
  }

  fill (0, 0, 255)
  ellipse(width/2, height/2, size, size);

  fill(255);
  textSize(30);
  textAlign(CENTER);
  text('Size:' + int(size), width/2, 50);
  rect(x, y, w, h);
  fill(255, 0, 0);

  rect(slider, y, 10, h);


}




// function setup(){
//   createCanvas(300,300);
//   textSize(100);
//   textAlign(CENTER);
// } 

// function draw(){

// background(0);
// fill(255);

// switch(key)
// {

//   case 'a':
//   text('a', width/2, height/2)  
//   break;


//   /*
  
//   case 'a':
//   case 'b':
//     text(~~)
  
//     두 케이스 물리기

//   */ 

//   case 'b':
//   text('b', width/2, height/2)
//   break;

//   case 'c':
//   text('c', width/2, height/2)
//   break;
  
//   default:  // 항상 else 랑 비슷함 
//     text('None', width/2, height/2)
//     break;

// }

// }
// if(key === 'a')
// {
//   text('a', width/2, height/2);
// }
// else if ( key === 'b')
// {
//   text('b', width/2, height/2);
// }
// else if (key === 'c')
// {
//   text('c', width/2, height/2);
// }
// else
// {
//   text('None', width/2, height/2);
// }

//}




// 묶는 이유 : 1. 불러오기 편함, 2. 관리하기 편함



// let x = 150; y = 150;

// function setup(){

//   createCanvas(300,300);

// }

// function draw(){
  
// background(0);

// if(keyIsPressed)
// {
//   if( key === 'a' || keyCode == LEFT_ARROW)
//   {
//     x = x-5;
//   } 
//   else if (key === 'd' || keyCode == RIGHT_ARROW)
//   {
//     x = x+5;
//   } 
//   else if (key === 'w' || keyCode == UP_ARROW)
//   {
//     y = y-5;
//   } 
//   else if (key === 's' || keyCode == DOWN_ARROW)
//   {
//     y = y+5;
//   }
// }
// ellipse(x, y, 100, 100)
// }



// let degree = 90;

// function setup(){

//   createCanvas(300,300);

// }

// function draw(){

//   background(0);
  
//   if(keyIsPressed)
//   {
//     if((key >= '0') && (key <= '9'))
//     {

//       degree = map(key, '0', '9', 0, 360);

//     }
//   }

//   arc(width/2, height/2, 200, 200, 0, radians(degree));

// }

// function setup(){
//   createCanvas(300,300);
//   background(0);
// }

// function draw(){
//   // background(0);

//   if(keyIsPressed && ((key == 'a') || (key =='A')))
// // p5js 는 엄격한 비교 안해도 됨 (언어 스위치시 주의)
//   {
//     fill(255,0,0);
//   }
//    else if (keyIsPressed && ((key == 'd') || (key == 'D')))
//   {
//     fill(0,255,0);
//   } 
//   else 
//   {
//     fill(0,0,255);
//   } 
//   ellipse(width/2, height/2, 200, 200);
// }
// function mouseReleased(){
//   background(0);
// }


// function setup(){

//   createCanvas(300,300)

// }

// function draw(){

//   background(0);

//   if(mouseIsPressed && (mouseButton === LEFT))
//   {

//     fill(255,0,0)

//   } 
//   else if (mouseIsPressed && (mouseButton === RIGHT))
//   {

//     fill(0,255,0);

//   }
//    else
//   {

//     fill(0,0,255)

//   }

//   ellipse(width/2, height/2, 200, 200);

// }



// function setup(){

//   createCanvas(300,300)

// }

// function draw(){
//   background(0);
//   fill(255,255,0);

//      if(mouseY < height *1/2 || mouseX < width*1/2)
//    {
//      rect(0, 0, width/2, height/2);
     
//    } else if (mouseY< height *1/2 || mouseX> width*1/2){
//      rect(width/2,0,width/2,height/2);
//    }
//      else if (mouseY > height *1/2 || mouseX < width*1/2){
//        rect(0, height/2, width/2, height/2)
//      }
//      else {
//      rect(width/2,height/2,width/2,height/2);
//      }
//     }




// function setup(){

//   createCanvas(300,300);

// }

// function draw(){

//   background(0);

//   fill(255,255,0);

//   if(mouseY < height/3)
//   {
//     rect(0, 0, width, height/3);
//   } else if (mouseY < height*2/3){
//     rect(0, height/3, width, height/3);
//   }
//     else {
//       rect(0, height*2/3, width, height/3)
//     }
//   }




// let x = 150;

// function setup(){

//   createCanvas(300,300)

// }

// function draw(){

// background(0);
// stroke(255);

// line(mouseX, 0, mouseX, height);
// ellipse(x, height/2, 50, 50);

// if ( mouseX > x) 
// {

//   x++;

// }

// else

// {

//   x--;

// }

// }


// let interval = 0, current_time = 0, previous_time = 0;

// function setup(){
  
//   createCanvas(300,300);

// }

// function draw(){

//   background(0);

//   current_time = millis();
//   interval = current_time - previous_time;

//   if (interval > 1000)
//   {

//     previous_time = millis();
//     fill(random(255), random(255), random(255))

//   }
  
//   ellipse(width/2, height/2, 200, 200);
  
  // print(' ');
  // print('start');
  // print(current_time);
  // print(previous_time);
  // print(interval);
  // print('stop');
  // print(' ');

//  }


// let x, y, d, r = 50.0;
// //let tx = 0.0, ty = 0.5;

// function setup(){

//   createCanvas(300,300)

// }

// function draw(){

//   background(0);

//   // x = noise(tx) * width;
//   // y = noise(ty) * height;

//   d = dist(width/2, height/2, mouseX, mouseY);

//   if ( d < r)
//   {

//     fill(random(255), random(255), random(255));

//   }

//   ellipse(mouseX, mouseY, r, r);
//   ellipse(width/2, height/2, r, r);

//   // tx += 0.01;
//   // ty += 0.01;

// }



// let x = 0, velocity = 1;

// function setup(){

//   createCanvas(300,300)

// }

// function draw(){

//   background(0);
//   stroke(255);

//   line(x, 0, x, height);
//   x += velocity;

//   if ( x < 0 || x > width)
//   {

//     velocity *= -1; 

//   }

//   if ( x < 100 || x > 200)
//   {

//     ellipse(width/2, height/2, 100, 100);

//   }

// }

// let x = 0, y = 0;

// let velocity_x = 1;
// let velocity_y = 0.9;

// function setup(){

//   createCanvas(300,300);
//   background(0);

// }

// function draw(){

//   ellipse(x, y, 30, 30);

//   x += velocity_x;
//   y += velocity_y;

//   if( x < 0 || x > width)

//    {

//      velocity_x *= -1;
  
//    }

//    if( y < 0 || y > height)

//    {

//      velocity_y *= -1;

//    }


// }



// let x = 0, velocity = 1;

// function setup(){

//   createCanvas(300,300);

// }

// function draw(){

//   background(0);

//   ellipse(x, height/2, 30, 30);

//   x += velocity;
  
//   if( x < 0 || x > width)

//   {

//     velocity *= -1;
  
//   }
  
 
// }


// function setup() {

//   createCanvas(400, 400);

// }

// function draw() {

//   print(mouseIsPressed);

//  if(mouseIsPressed == true) {

//    fill(0);

//  }

//  else {

//    fill(255);

//  }

//  ellipse(mouseX, mouseY, 80, 80);

// }
