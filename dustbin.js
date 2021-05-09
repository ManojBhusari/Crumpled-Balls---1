class dustbin{
constructor(x,y){
    this.x = x 
    this.y = y
    this.Dwidth = 200 ;
    this.Dheight = 100 ;
    this.wallThickness = 20;
    this.angle = 0 ;
    this.bottomBody = Bodies.rectangle(this.x,this.y,this.Dwidth,this.wallThickness,{isStatic:true});
    this.leftWallbody = Bodies.rectangle(this.x-this.Dwidth/2,this.y-thisDheight/2,this.wallThichkess,this.Dheight,{isStatic:true});
    Matter.Body.SetAngle(this.leftWallbody,this.angle)
    
    this.rightWallBody = Bodies.rectangle(this.x+this.Dwidth/2,this.y-thisDheight/2,this.wallThichkess,this.Dheight,{isStatic:true});
    Matter.Body.setAngle = this.rightWallBody,-1*this.angle
    World.add(world,this.bottomBody)
    World.add(world,this.leftWallBody)
    World.add(world,this.rightWallBody)  
    
}

display(){
    var posBottom = this.bottomBody.position;
    var posleft = this.leftWallBody.position;
    var posright = this.rightWaallBody.position;

    push()
    translate(posLeft.x,posLeft.y);
    rectMode(CENTER);
    angleMode(RADIANS);
    fill(255);
    stroke(255);
    rotate(this.angle);
    rect(0,0,this.wallThickness,this.Dheight);
    pop()
    
    push()
    translate(posRight.x,posRight.y);
    rectMode(CENTER);
    angleMode(RADIANS);
    fill(255);
    stroke(255);
    rotate(-1*this.angle);
    rect(0,0,thiswallThickness,this.Dheight);
    pop()

    push()
    translate(posBottom.x,posBottom.y);
    rectMode(CENTER);
    angleMode(RADIANS);
    fill(255);
    stroke(255);
    rect(0,0,this.Dwidth,this.wallThickness);
    pop()


}

}

