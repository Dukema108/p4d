/*
    Paste the code for your week 3 exercise below.
*/


let W = 400;
let H = 400;
 
function setup() {  
 createCanvas(W, H); 
}  
 
class Heart{
    constructor(x,y,size,width,vx,vy,r,g,b){
        this.x = x
        this.y = y
        this.size = size;
        this.width = width;
        this.vx = vx;
        this.vy = vy;
        this.r = r;
        this.g = g;
        this.b = b;
    }
    genrate(){
        let x = this.x;
        let y = this.y;
        let size = this.size;
        let width = this.width;
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
        fill(color(this.r,this.g,this.b));
    }
    move(){
        this.x += this.vx;
        this.y += this.vy;
        if(this.x>W-30||this.x<30){ 
            this.reverse_vx();
        } 
        if(this.y>H-30||this.y<30){ 
            this.reverse_vy();
        } 
    }
    reverse_vx(){
        this.vx *= -1;
    }
    reverse_vy(){
        this.vy *= -1;
    }
    vx_multi(val){
        this.vx = val * Math.abs(this.vx);
    }
    vy_multi(val){
        this.vy *= val * Math.abs(this.vy);
    }
}

let heart = new Heart(200,200,30,10,2,3,100,100,100)

function draw() {  
    background(220); 
    heart.genrate();
    heart.move();
}

function mouseClicked() { 
    if (heart.r < 255 || heart.g< 255 || heart.b < 255) {
        heart.r += 50
        heart.g += 10
        heart.b += 30
    }else{
        heart.r = 0;
        heart.g = 0;
        heart.b = 0;
    }
}