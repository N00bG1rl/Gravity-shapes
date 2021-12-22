// Destructuring from Matter.js
const { Engine, Render, Runner, World, Bodies, MouseConstraint, Mouse } = Matter

// Declare width and height
const width = window.innerWidth
const height = window.innerHeight

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
  Bodies.rectangle(width / 2, 0, width, 20, { isStatic: true }),
  // Bottom wall
  Bodies.rectangle(width / 2, height, width, 20, { isStatic: true }),
  // Left wall
  Bodies.rectangle(0, height / 2, 20, height, { isStatic: true }),
  // Right wall
  Bodies.rectangle(width, height / 2, 20, height, { isStatic: true }),
]
// Add walls array to the world
World.add(world, walls)

// Add random shapes to random locations into world
for (let i = 0; i < 100; i++) {
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
