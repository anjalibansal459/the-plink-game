class Particle{
    constructor(x,y,radius){
        var options={
            restitution:0.8
        }
        this.body=Bodies.circle(x,y,radius,options)
        this.x=x
        this.y=y
        this.radius=radius
        this.color=color(random(0, 255), random(0, 255), random(0, 255))
        World.add(world,this.body)
    }
    display()
    {
        var pos = this.body.position;
        

        push();
       
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y, this.radius,this.radius);
        pop();
    
    }
}