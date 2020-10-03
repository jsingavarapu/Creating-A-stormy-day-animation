class Umbrella{
constructor(x,y) {
var pick = {
    isStatic:true  
}
this.body = Bodies.circle(x,y,5,pick)
this.image = loadImage("images/walkingFrame/walking_1.png");

World.add(world, this.body);
}
display(){
    var pos=this.body.position
    imageMode(CENTER);
    image(this.image,pos.x,pos.y,300,300);
    
    }



}