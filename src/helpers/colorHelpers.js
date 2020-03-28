import { v4 as uuid } from "uuid";
import faker from "faker";

// Gather shades takes a colorId and a palette and gets all shades of the colorId and the different brightness levels within the palette
function gatherShades(colorId, palette) {
  const { colors } = palette; //Extract just the colors from the palette
  const levels = Object.keys(colors); // The color levels are the keys

  const shades = []; // Color shades to return
  // Find the color at each color at each color level and push on to the shades array
  for (let level of levels) {
    const color = colors[level].find(color => color.id === colorId);
    shades.push(color);
  }
  return shades.slice(1); // shades[0] is always white
}

export { gatherShades };

// Make a random selection from an array
function randomChoice(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}
export { randomChoice };

// Get a random color object
function randomColor() {
  const colorParts = ["#"];
  const base16Chars = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "A",
    "B",
    "C",
    "D",
    "E",
    "F"
  ];
  for (let i = 0; i < 6; i++) {
    colorParts.push(randomChoice(base16Chars));
  }
  return { id: uuid(), name: faker.random.words(), hex: colorParts.join("") };
}

export { randomColor };
