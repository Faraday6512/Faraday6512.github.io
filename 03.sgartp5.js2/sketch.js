let num = 150;

function setup() {
  createCanvas(300, 300);
  background(230);
  // ellipse(num,150,30,30);
  //text("hello",0,10); //corner = left bottom
  //text("hello",0,0,10,100); // corner = left top

  //text("hello",136.5,155);
  //text("hello my name is sumyung",10,10,100,30); 
  // 칸이 작다-> 문자열의 줄 변환이 자동으로

  //textSize(30);
  //textAlign();
  //text("hello",100,100);

  //textSize(12);
  //text("안녕",100,140);

  // text("안녕",100,160);
  
  //textSize(20);
  // text("안녕",100,160);
  
  // line(150,0,150,300);
  // textSize(30);
  // line(0,100,300,100);
  // textAlign(CENTER,CENTER);
  // textSize(30);
  // text("hello world",150,100);

  noStroke();
  ellipse(50,50,100,100);
  
  fill(150,60); // 같은 fill function 이지만, 매개변수가 다를 수도 있다.
  textSize(50);
  //fill('red'); 잘 쓰지는 않을 것 (색깔 코드, RGB 픽셀 값)
  fill('#93b3b7'); //컬러 코드 쓰는법
  strokeWeight(3);
  stroke(255,0,0);
  text('word',10,30);

  noStroke();
  fill(0,102,153);
  text('word',10,60);
  fill(0,102,153,51);
  text('word',10,90);


}

function draw() {
 
  //num = num+10;
}
