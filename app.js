// Destructuring from Matter.js
const { Engine, Render, Runner, World, Bodies, MouseConstraint, Mouse } = Matter

// Declare width and height
const width = 800
const height = 600

// Create world/canvas
const engine = Engine.create()
const { world } = engine
const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    // Fill shapes with colors
    wireframes: false,
    width,
    height,
  },
})
Render.run(render)
Runner.run(Runner.create(), engine)

// Add click and drag
World.add(
  world,
  MouseConstraint.create(engine, {
    mouse: Mouse.create(render.canvas),
  })
)

// Walls array to define world borders so shapes stays inside world
const walls = [
  // Top wall
  Bodies.rectangle(400, 0, 800, 40, { isStatic: true }),
  // Bottom wall
  Bodies.rectangle(400, 600, 800, 40, { isStatic: true }),
  // Left wall
  Bodies.rectangle(0, 300, 40, 600, { isStatic: true }),
  // Right wall
  Bodies.rectangle(800, 300, 40, 600, { isStatic: true }),
]

// Add walls array to the world
World.add(world, walls)
// Add random shapes to random locations into world
for (let i = 0; i < 60; i++) {
  if (Math.random() > 0.5) {
    World.add(
      world,
      Bodies.rectangle(Math.random() * width, Math.random() * height, 50, 50)
    )
  } else {
    World.add(
      world,
      Bodies.circle(Math.random() * width, Math.random() * height, 35)
    )
  }
}
