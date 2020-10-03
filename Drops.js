class Drops{
constructor(x, y) {
var choose = {
'restitution':0.1,
'friction':0.001
}
this.body = Bodies.circle(x,y,5,choose)
this.radius=5;
World.add(world, this.body);
}
display(){
fill("blue")
ellipseMode(CENTER);
ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
}
updateY(){
  if (this.body.position.y>height)[
 Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})  
  ]  
}


}