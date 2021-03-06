var Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 800,
    height: 600,
    pixelRatio: 1,
    background: '#fafafa',
    wireframeBackground: '#222',
    hasBounds: false,
    enabled: true,
    wireframes: true,
    showSleeping: true,
    showDebug: false,
    showBroadphase: false,
    showBounds: false,
    showVelocity: false,
    showCollisions: false,
    showSeparations: false,
    showAxes: false,
    showPositions: false,
    showAngleIndicator: false,
    showIds: false,
    showShadows: false,
    showVertexNumbers: false,
    showConvexHulls: false,
    showInternalEdges: false,
    showMousePosition: false
  }
});

// create two boxes and a ground
var boxA = Bodies.rectangle(400, 200, 80, 80);
var boxB = Bodies.rectangle(450, 50, 80, 80);
let circle = Bodies.circle(430, 50, 30);
var ground = Bodies.rectangle(400, 610, 810, 60, {
  isStatic: true
});

// add all of the bodies to the world
World.add(engine.world, [circle, boxA, boxB, ground]);

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);