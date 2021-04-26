class Hero {
    constructor(x,y,r){
        var option = {
            density : 1,
            frictionAir : 1
        };
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world,this.body);
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipse(0,0,this.width,this.height);
        pop();
    }
}