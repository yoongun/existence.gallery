const canvas = document.querySelector("canvas");

const resize = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

resize();
window.addEventListener("resize", resize);

var ctx = canvas.getContext("2d");

async function loadImage(src) {
  let img = new Image();
  await new Promise((r) => (img.onload = r), (img.src = src));
  return img;
}

(async () => {
  bottleImg = await loadImage("Bottle.png");
  flyImg = await loadImage("Fly.png");
  beeImg = await loadImage("Bee.png");
  ctx.drawImage(beeImg, 20, 20, 100, 100);
})();
