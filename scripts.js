const fonts = [
  "customTitleChanger1",
  "customTitleChanger2",
  "customTitleChanger3",
  "customTitleChanger4",
  "customTitleChanger5",
  "customTitleChanger6",
  "customTitleChanger7",
  "customTitleChanger8"
];

let fontIndex = 0

function updateFont() {
    // Update the CSS variable
    document.documentElement.style.setProperty('--dynamic-font', fonts[currentFontIndex]);
    currentFontIndex = (currentFontIndex + 1) % fonts.length; // Cycle to the next font
}

setInterval(updateFont, 2000);
