class Rope {
    constructor(BodyA,BodyB,offsetX,)

{
    this.offsetX=offsetX;
    this.offsetY=10;
 
    var options={

bodyA:BodyA,
bodyB:BodyB,
pointB:{x:offsetX,y:10}

    }
this.rope=Constraint.create(options);
World.add(world,this.rope);

}
display(){

var posA=this.rope.bodyA.position;
var posB=this.rope.bodyB.position;
strokeWeight(2);
 line (posA.x,posA.y,posB.x,posB.y);

}
}
