export const sounds = {
  hover: new Audio("/sounds/hover.mp3"),
  hit: new Audio("/sounds/hit.mp3"),
  hum: new Audio("/sounds/hum.mp3"),
};

sounds.hum.loop = true;
sounds.hum.volume = 0.2;
