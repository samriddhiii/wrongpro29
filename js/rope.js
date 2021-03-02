class rope
{
    constructor(body1,point2)
    {
      var options =
      {
          bodyA : body1,
          pointB : point2,
          length : 20,
          stiffness : 0.03
      }
      this.Rope = Matter.Constraint.create(options);
      World.add(world,this.Rope)
    }
    display()
    {
        if (this.Rope.bodyA)
        {
            var blockpos = this.Rope.bodyA.position;
            var startpos = this.Rope.pointB;

            push()
            strokeWeight(2);
            line(blockpos.x, blockpos.y, startpos.x, startpos.y)
            pop()

        }
    }

    fly()
    {
        this.Rope.bodyA = null;
    }

    attach(bodyA)
    {
        this.Rope.bodyA = bodyA;
    }
}