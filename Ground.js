class Ground {
constuctor(x,y,width,height){
var optiopns = {
    isStatic: true

}
this.body= Bodies.rectangle(x,y,width,height);
this.widht = width;
this.height = height;

World.add(world,this.body);



    }

    display(){
        var pos = this.body.position;
        fill("white");
        rect(pos.x,pos.y,this.width,this.height);
    }
}