class paper
{
	constructor(x,y)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=70;

		this.image=loadImage("paper.png");
		this.body=Bodies.circle(this.x, this.y, 70/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			imageMode(CENTER)
			image(this.image,this.x,this.y,70/2)
			strokeWeight(3);
			fill(255,0,255)
			ellipse(0,0,70,70);
			pop()
			
	}

}