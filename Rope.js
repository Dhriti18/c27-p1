class Rope {
    constructor(BodyA,BodyB,xOffset)
{
    var options={

bodyA:BodyA,
bodyB:BodyB,
pointB:{x:xOffset,y:10}

    }
this.chain=Constraint.create(options);
this.xOffset=xOffset;
World.add(world,this.chain);

}
display(){

var pointA=this.chain.bodyA.position;
var pointB=this.chain.bodyB.position;
stroke("lemon");
strokeWeight(2);
 line (pointA.x,pointA.y,pointB.x+this.xOffset,pointB.y+10);

}
}
