class ground{
constructor(x,y,width,height){


var options = {
    isStatic : true
}
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }

display(){
    var gro =this.body.position;
    rectMode(CENTER);
    fill(255);
    rect(gro.x, gro.y, this.width, this.height);
    pop();
  }
}