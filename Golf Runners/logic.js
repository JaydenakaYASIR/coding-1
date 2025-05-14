const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const player = {
  x: 400,
  y: 300,
  radius: 15,
  speed: 3,
};

let keys = {};
let projectiles = [];
let enemies = [];
let score = 0;

document.addEventListener("keydown", e => keys[e.key] = true);
document.addEventListener("keyup", e => keys[e.key] = false);

golferCanvas = new Image()
golferCanvas.src = 'golfer.jpg'
const golfPat = ctx.createPattern(golferCanvas, "no-repeat");

function spawnEnemy() {
  const angle = Math.random() * Math.PI * 2;
  const distance = 700;
  enemies.push({
    x: player.x + Math.cos(angle) * distance,
    y: player.y + Math.sin(angle) * distance,
    radius: 12,
    speed: 1.5
  });
}

function shootProjectile() {
  const angle = Math.random() * Math.PI * 2;
  projectiles.push({
    x: player.x,
    y: player.y,
    radius: 5,
    dx: Math.cos(angle) * 5,
    dy: Math.sin(angle) * 5
  });
}

setInterval(() => shootProjectile(), 500);
setInterval(() => spawnEnemy(), 1000);

function update() {
  if (keys['w']) player.y -= player.speed;
  if (keys['s']) player.y += player.speed;
  if (keys['a']) player.x -= player.speed;
  if (keys['d']) player.x += player.speed;

  // Update projectiles
  projectiles.forEach(p => {
    p.x += p.dx;
    p.y += p.dy;
  });

  // Remove off-screen projectiles
  projectiles = projectiles.filter(p => p.x > 0 && p.x < canvas.width && p.y > 0 && p.y < canvas.height);

  // Update enemies
  enemies.forEach(e => {
    const dx = player.x - e.x;
    const dy = player.y - e.y;
    const dist = Math.hypot(dx, dy);
    e.x += (dx / dist) * e.speed;
    e.y += (dy / dist) * e.speed;
  });

  // Collision detection
  projectiles.forEach((p, pi) => {
    enemies.forEach((e, ei) => {
      const dist = Math.hypot(p.x - e.x, p.y - e.y);
      if (dist < p.radius + e.radius) {
        enemies.splice(ei, 1);
        projectiles.splice(pi, 1);
        score++;
      }
    });
  });
}

function drawCircle(x, y, radius, color) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = golfPat;
  ctx.fill();
}

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawCircle(player.x, player.y, player.radius, 'green'); // add player art

  projectiles.forEach(p => drawCircle(p.x, p.y, p.radius, 'cyan')); // add projectile art = golf club
  <canvas id="canvas" width="100" height="100"></canvas>
<script>
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  const image = new Image();
  image.src = 'pixel_art.png'; // Your small pixel art image
  image.onload = () => {
    // Draw the image scaled up to keep pixelated style
    ctx.imageSmoothingEnabled = false; // Important!
    ctx.drawImage(image, 0, 0, 20, 20, 0, 0, 100, 100); // scale 20x to 100x
  };
</script> // add enemy art

  ctx.fillStyle = 'black'; // image for background
  ctx.fillText(`Score: ${score}`, 10, 20);
}

function gameLoop() {
  update();
  render();
  requestAnimationFrame(gameLoop);
}

gameLoop();