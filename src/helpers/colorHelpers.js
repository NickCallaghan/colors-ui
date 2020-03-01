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
