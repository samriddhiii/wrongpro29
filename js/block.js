class Block{
    constructor(x,y,width,height){
        var option= {
            restitution:0.3,
            friction:1,
            density:1
            //isStatic:true
        }

        this.body = Bodies.rectangle(x,y,width,height,option)
        this.width=width
        this.height=height
        this.image = loadImage("polygon.png");
        World.add(world,this.body)
    }

    display(){
        push()
        imageMode(CENTER);
        image(this.image, 250, 400, this.width, this.height);
        pop()
    }
}