function setup()
{
    createCanvas(400,269);

}

function draw()
{
    createCanvas(400,269);
    background(100);
    //hair 
    stroke(0);
    strokeWeight(5)
    fill(225,188,44)
    ellipse(12,190,280,260)

    ellipse(7,184,279,227)

    ellipse(7,184,279,210)

    ellipse(3,184,279,200)

    ellipse(3,185,276,190)
    //bent hair lines
    noFill();
    strokeWeight(10);
    curve(6,200,-7,113,70,200,64,260);

    strokeWeight(15);
    curve(6,200,-7,165,70,200,64,260);

    strokeWeight(8)
    curve(6,200,-7,194,70,200,64,250);

    ellipse(3,202,6,0);

    //blue tint
    //begin end shape verticies 
    stroke(1,23,130);
    fill(1,23,130);
    curve(750,1,400,10,170,250,300,480);
   
    beginShape(TRIANGLES)
    
    fill(1,23,130);
    vertex(176, 298);
    vertex(304, 78);
    vertex(-100, 600);

    endShape()

    //rect
    noStroke();
    fill(137,1,0);
    rect(0,0,width,63);
    //rect lines
    fill(0);
    rect(0,28,width,8)
    //rect bottom line
    beginShape()
    vertex(0,60);
    vertex(0,52);
    vertex(width, 45);
    vertex(width,55);
    endShape(CLOSE);
    //skin
    stroke(0);
    strokeWeight(6)
    //fill(r,g,b)
    fill(255,208,192);
    ellipse(80,286,250,186);
    
    //mouse location
    fill(225);
    text(mouseX,10,10);
    text(mouseY,10,20);
    //dots
    //strokeWright(5)
    //for(i=10 <1000, i+=10)
    //for(i=10 i<1000 i+=10)
    //point(i,n)
    //(use javascripts drawingcontest?  )
}