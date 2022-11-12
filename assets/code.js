const images = [
  "mcjava.jpg",
  "mcbedrock.jpg",
  "csgo.jpg",
  "gmod.jpg",
  "tf2.jpg",
  "pavlov.jpg",
  "rust.jpg",
  "unturned.jpg",
  "terraria.jpg",
  "dayz.jpg",
];
let i = 0;

function rotateHeroImage() {
  const blurElement = document.getElementById("heroblur");
  blurElement.style.background = `url("./assets/hero_images/${images[i]}") no-repeat center center fixed`;
  blurElement.style.backgroundSize = `cover`;
  i++;
  if (i >= images.length) i = 0;

  setTimeout(rotateHeroImage, 8000);
}

window.onload = () => {
  rotateHeroImage();
};
