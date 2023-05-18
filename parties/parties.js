
let EditorialNewItalic;
let EditorialNewRegular;
let bgColor;
let aboutTheProject = "This dataset contains all noise complaints calls that were received by the city police with complaint type 'Loud music/Party in 2016. The data contains the time of the call, time of the police response, coordinates, and part of the city. This data should help match taxi rides from 'New York City Taxi Trip Duration competition to the night rides of partygoers."
let circles = [];
let title = 'Click'

function prelaod () {
        //font preload
        EditorialNewItalic = loadFont('assets/fonts/ppeditorialnew-italic.ttf');
        EditorialNewRegular = loadFont('assets/fonts/ppeditorialnew-regular.ttf');
}

function setup() {
createCanvas(windowWidth, windowHeight);
colorMode(HSL)
bgColor = color(random(0,360), random(70,90), random(70, 100));
}

function draw() {

circle (mouseX , mouseY, 10);
color('white');
//line(mouseX, mouseY, pmouseX, pmouseY);

  //myCircle.display();
  //console.log(myCircle);
  
  //display all circles in the array
  for (let i = 0; i < circles.length; i = i+1) {
    circles[i].display();
  }
  
  
}
function mousePressed(){
    let myCircle = new Circle(mouseX, mouseY, random(30,70), random(30,70), random(255), random(255), random(255));
    circles.push(myCircle);
    colorMode(HSB)
    bgColor = color(random(0,360), random(70,90), random(70, 100));
    
    //console.log(myCircle); //myCircle is an object
    //console.log(circles);  //circles is an array
  }

function keyPressed(){
circles.pop();
}
    
  class Circle {
    constructor(x, y, w, h, r, g, b) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      //color for the circle
      this.r = r;
      this.g = g;
      this.b = b;
    }
    
    display() {
      fill(this.r, this.g, this.b);
      ellipse(this.x, this.y, this.w);
    }
  }

function windowCanvas() {
    resizeCanvas(windowWidth/2, windowHeight/2)
}

