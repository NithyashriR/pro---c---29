const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function preload(){

    }
    function setup(){
        var canvas = createCanvas(1200,400);
        engine = Engine.create();
        world = engine.world;
        
        
        ground = new Ground(600,0,1200,20)
        ground1 = new Ground(600,height,100,20)
        ground2 = new Ground(600,height,100,20)
       
        box1 = new Box(390,155,30,40)
        box2 = new Box(360,195,30,40)
        box3 = new Box(390,195,30,40)
        box4 = new Box(420,195,30,40)
        box5 = new Box(450,235,30,40)
        box6 = new Box(420,235,30,40)
        box7 = new Box(390,235,30,40)
        box8 = new Box(360,235,30,40)
        box9 = new Box(330,235,30,40)

        
        box10= new Box(600,height,30,40)
        box11 = new Box(600,height,30,40)
        box12 = new Box(600,height,30,40)
        box13 = new Box(600,height,30,40)
        box14 = new Box(600,height,30,40)
        box15 = new Box(600,height,30,40)
        box16 = new Box(600,height,30,40)
        box17 = new Box(600,height,30,40)
        box18 = new Box(600,height,30,40)
        box19 = new Box(600,height,30,40)
        box20 = new Box(600,height,30,40)
        box21 = new Box(600,height,30,40)
        box22 = new Box(600,height,30,40)
        box23 = new Box(600,height,30,40)
        box24 = new Box(600,height,30,40)
        box25 = new Box(600,height,30,40)
        
        hexa = Bodies.circle(50,200,20);
        World.add(world,hexa);

    
       
        slingShot = new Slingshot(hexa.body,{x:100 , y:200});
    
    } 
    
    
    function draw(){
        background(back);
        Engine.update(engine);
        
        ground.display();
        ground1.display();

        box1.display();
        box2.display();
        box3.display();
        box4.display();
        box5.display();
        box6.display();
        box7.display();
        box8.display();
        box9.display();

        box10.display();
        box11.display();
        box12.display();
        box13.display();
        box14.display();
        box15.display();
        box16.display();
        box17.display();
        box18.display();
        box19.display();
        box20.display();
        box21.display();
        box22.display();
        box23.display();
        box24.display();
        box25.display();
        
        hexa.display();
        
        slingShot.display();
    }
    
    function mouseDragged(){
    
    Matter.Body.setPosition(hexa.body,{x:mouseX, y:mouseY})
    }
    
    function mouseReleased(){
    
        slingShot.fly();
    }
