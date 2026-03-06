const canvas = document.getElementById('bg');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const colors = ['#e0e0e0','#c0c0c0','#ffffff'];

for(let i=0;i<100;i++){
  particles.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    r: Math.random()*2+1,
    dx: (Math.random()-0.5)*0.5,
    dy: (Math.random()-0.5)*0.5,
    color: colors[Math.floor(Math.random()*colors.length)]
  });
}

function animate(){
  ctx.fillStyle = 'rgba(255,255,255,0.05)';
  ctx.fillRect(0,0,canvas.width,canvas.height);

  for(let i=0;i<particles.length;i++){
    let p = particles[i];
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle = p.color;
    ctx.fill();

    p.x += p.dx;
    p.y += p.dy;

    if(p.x>canvas.width) p.x=0;
    if(p.x<0) p.x=canvas.width;
    if(p.y>canvas.height) p.y=0;
    if(p.y<0) p.y=canvas.height;
  }

  requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize',()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
