class Ch{
    constructor(bodyA,bodyB){
var options={
    bodyA:bodyA,
    bodyB:bodyB,
    length:5,
stiffness:0.1

}
this.ch=Constraint.create(options)
World.add(world,this.ch)
    }
display(){
    var pointA=this.ch.bodyA.position;
    var pointB=this.ch.bodyB.position;
    strokeWeight(3)
    line(pointA.x,pointA.y,pointB.x,pointB.y)
}
}