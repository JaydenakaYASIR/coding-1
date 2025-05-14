const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// this is where the images go. Just replace the image file name. 
const playerImage = new Image();
playerImage.src = "carterGolfing.png";

const projectileImage = new Image();
projectileImage.src = "customPixelClub.png";

const enemyImage = new Image();
enemyImage.src = "enemyCustom.png";

const player = {
  x: 400,
  y: 300,
  radius: 50,
  speed: 3,
};

let keys = {};
let projectiles = []; // MIGHT NEED TO CHANGE
let enemies = [];
let score = 0;

class HealthBar {
  
  }
  constructor(x, y, w, h, maxHealth, color) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.maxHealth = maxHealth;
    this.maxWidth = w;
    this.health = maxHealth;
    this.color = color;
  }

  show(context) {
    context.lineWidth = 4;
    context.strokeStyle = "#333";
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.w, this.h);
    context.strokeRect(this.x, this.y, this.maxWidth, this.h);
  }

  updateHealth(val) {
    if (val >= 0) {
      this.health = val;
      this.w = (this.health / this.maxHealth) * this.maxWidth;
    }
  }
}

document.addEventListener("keydown", (e) => (keys[e.key] = true));
document.addEventListener("keyup", (e) => (keys[e.key] = false));

function spawnEnemy() {
  const angle = Math.random() * Math.PI * 2;
  const distance = 700;
  enemies.push({
    x: player.x + Math.cos(angle) * distance,
    y: player.y + Math.sin(angle) * distance,
    radius: 50,
    speed: 1.5,
  });
}

function shootProjectile() { 
  const angle = Math.random() * Math.PI * 2; // change this to either move on the x or y axis
  projectiles.push({
    x: player.x,
    y: player.y,
    radius: 50,
    dx: Math.cos(angle) * 5,
    dy: Math.sin(angle) * 5,
  });
}

setInterval(() => shootProjectile(), 500);
setInterval(() => spawnEnemy(), 1000);

// game controls
function update() {
  if (keys["w"]) player.y -= player.speed;
  if (keys["s"]) player.y += player.speed;
  if (keys["a"]) player.x -= player.speed;
  if (keys["d"]) player.x += player.speed;


  // Update projectiles -- CHANGE THIS LOGIC 
  projectiles.forEach((p) => {
    p.x += p.dx;
    p.y += p.dy;
  });

  // Remove off-screen projectiles
  projectiles = projectiles.filter(
    (p) => p.x > 0 && p.x < canvas.width && p.y > 0 && p.y < canvas.height
  );

  // Update enemies
  enemies.forEach((e) => {
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

function drawImageCentered(img, x, y, size) {
  ctx.drawImage(img, x - size / 2, y - size / 2, size, size);
}

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawImageCentered(playerImage, player.x, player.y, player.radius * 2);

  projectiles.forEach((p) =>
    drawImageCentered(projectileImage, p.x, p.y, p.radius * 2)
  );
  enemies.forEach((e) => drawImageCentered(enemyImage, e.x, e.y, e.radius * 2));

  ctx.fillStyle = "white";
  ctx.fillText(`Score: ${score}`, 10, 20);

  //HealthBar.show()
}

function gameLoop() {
  update();
  render();
  requestAnimationFrame(gameLoop);
}

gameLoop();
