/*
    Paste the code for your week 5 exercise below.
*/


var x=200; 
var y=200; 
var Vx=2; 
var Vy=3; 
 
function setup() {  
   createCanvas(400, 400); 
}  
 
function heart(x,y,size,width){
    let h1x=x-size/2
    let h1y=y+size/2
    let h2x=x
    let h2y=y+size
    let h3x=x+size/2
    let h3y=y+size/2
    let h4x=x+size
    let h4y=y
    let h5x=x+size+(size/8)
    let h5y=y-size/1.25
    let h6x=x+size/1.5
    let h6y=y-size-size/2
    let h7x=x
    let h7y=h5y-size/3.5
    let h8x=x-size/1.5
    let h8y=y-size-size/2
    let h9x=x-size-(size/8)
    let h9y=y-size/1.25
    let h10x=x-size
    let h10y=y
    let h11x=x-size/2
    let h11y=y+size/2
    stroke(0)
    strokeWeight(width)
    beginShape()
    vertex(h1x,h1y)
    vertex(h2x,h2y)
    vertex(h3x,h3y)
    vertex(h4x,h4y)
    vertex(h5x,h5y)
    vertex(h6x,h6y)
    vertex(h7x,h7y)
    vertex(h8x,h8y)
    vertex(h9x,h9y)
    vertex(h10x,h10y)
    vertex(h11x,h11y)
    endShape()
    c = color(255, 80, 100);
    fill(c);
}
function draw() {  
    background(220); 
    heart(x,y,30,10);
    x+=Vx; 
    y+=Vy; 
    if(x>width-30||x<30){ 
        Vx*=-1; 
    } 
    if(y>height-30||y<30){ 
        Vy*=-1; 
    } 
}