class Bob{


    constructor(x,y,r){
        var options={
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2,
    
    
    
        }
        this.body=Bodies.circle(x,y,r/2,options);
        this.x=x;
        this.y=y;
        this.r=r;
        World.add(world, this.body);
            
            
            
            }
            
            display(){
                var paperoes=this.body.position;
                push ();
             translate (paperoes.x,paperoes.y);
             rectMode(CENTER);
             stroke("magenta");
             strokeWeight(3);
             fill ("yellow");
    
             ellipse(0,0,this.r,this.r);
                pop ();
        
    }}
        
        
        