class Slingshot{

    constructor(pointA,pointB){

        var options = {

            pointA: pointA,
            pointB: pointB,
            length: 5,
            stiffness: 0.5
        }
        this.pointB = pointB
         this.sling = Matter.Constraint.create(options)
         World.add(world,this.sling)
    }


    fly(){

        this.sling.pointA = null;
    }

    display(){

        

if(this.sling.pointA){
var pointA = this.sling.pointA.position

var pointB = this.pointB

line(pointA.x-20,pointA.y,pointB.x-15,pointB.y+30)
line(pointA.x-20,pointA.y,pointB.x+20,pointB.y+30)


}
    }
}
