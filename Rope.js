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

var posA=this.chain.bodyA.position;
var posB=this.chain.bodyB.position;
stroke("lemon");
strokeWeight(2);
 line (posA.x,posA.y,posB.x,posB.y);

}
}
