class Trash{
    constructor(x,y){
        var option={
            isStatic: true
        };
this.body=Matter.Bodies.rectangle(x,y,20,20,option)
this.width=20;
this.height=20;
this.image=loadImage("dustbingreen.png");
Matter.World.add(world,this.body);

    }
    display(){
var pos=this.body.position;


push();
imageMode(CENTER);
   translate(pos.x,pos.y);
    image(this.image,0,0,this.width,this.height);
    pop();
    }
}