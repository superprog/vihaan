class Bird {
  constructor(x, y) {
    var options={
			isStatic:false,
			restitution:0.3,
			friction:0.3,
			density:1.0

			
			}
    
    this.body = Bodies.circle(x, y, 25, options);

    this.radius = 25;
    this.width = 50;
    this.height = 50;
    this.image = loadImage("sprites/bird.png");
    Matter.Body.setMass(this.body,this.body.mass*3);
    
    World.add(world, this.body);
  }

    display(){
      var angle = this.body.angle;
      //this.body.position.x = 150;
     // this.body.position.y = 200
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
   
  
}