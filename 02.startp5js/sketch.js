
let myNum = 30
console.log(myNum);
console.log(myNum+50);
console.log(myNum);
myNum = myNum+30; // 재 선언
console.log(myNum);

const yourNum = 20;
console.log(yourNum);
//yourNum = 40;
console.log(yourNum);
console.log(yourNum-1);
console.log(yourNum-2);
const PI = 3.14;
console.log(PI*4);

let HP = 100;
console.log(HP);
HP = HP-10;
console.log(HP);

const enemy = 10;


function setup() {
  console.log("Hello, world!");
  createCanvas(300,300);
  console.log("3");
  console.log(4);
  console.log("hello");
  console.log("he1)lo");
  console.log('helooooo');
  console.log("score : "+ myNum);
  console.log("score : " + "30");
  console.log("score : " + myNum+50);
  console.log(myNum+50);

}
 
function draw() {
  background(0);
  ellipse(50,50,100,100);
  //console.log("1")
}
