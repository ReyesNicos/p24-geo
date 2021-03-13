class Sand {
    constructor(x,y){
    
      var options={
    
      'restitution':1.3,
      'friction':5,
      'density':1
    }
    this.body= Bodies.circle(x,y,5,options);
    this.width=10;
    this.height=10;
    World.add(world,this.body);
    
    }
    display(){
    
    var pos=this.body.position;
    var angle= this.body.angle;
    push ();
    translate(pos.x,pos.y);
    rotate(angle);
    strokeWeight(4);
    stroke("black");
    fill("white");
    ellipse(0,0,this.width,this.height);
    pop();
    }
}