class Hero {
  constructor(x,y,width,height)
	{
		var options = { 
			isStatic:false,
			density: 1, 
			restitution:0,
			frictionAir: 1
		};
		this.body= Bodies.rectangle(x,y,width,height,options)
		/*this.x=x;
		this.y=y;*/
		this.width=width;
		this.height=height;
		this.image=loadImage("superhero.png");
		//this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);
		World.add(world, this.body);

	}
	
	display()
	{
			var angle=this.body.angle;
			var heroPos=this.body.position;		
			push()
			translate(heroPos.x, heroPos.y);
			imageMode(CENTER)
			//fill(255,0,255)
			//imageMode(CENTER);
			image(this.image, 0,0,this.width, this.height)
			pop()
			
	}
}
