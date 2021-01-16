class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(48,22,8);

            if(pointA.x<220){
            strokeWeight(7);
           
            line(pointA.x-25, pointA.y-10, pointB.x-10, pointB.y-10);
            line(pointA.x-25, pointA.y-10, pointB.x+30, pointB.y-10);
            }
            else{
                strokeWeight(3);
           
                line(pointA.x+25, pointA.y-10, pointB.x-10, pointB.y-10);
                line(pointA.x+25, pointA.y-10, pointB.x+30, pointB.y-10);
            }

            pop();
        }
    }
    
}