const fonts = [
  "customTitleSwitcher1",
  "customTitleSwitcher2",
  "customTitleSwitcher3",
  "customTitleSwitcher4",
  "customTitleSwitcher5",
  "customTitleSwitcher6",
  "customTitleSwitcher7",
  "customTitleSwitcher8"
];

let fontIndex = 0

function updateFont() {
    // Update the CSS variable
    document.documentElement.style.setProperty('--dynamic-font', fonts[fontIndex]);
    fontIndex = (fontIndex + 1) % fonts.length; // Cycle to the next font
}

updateFont(); /*get rid of the default IMMEDIATELY*/

setInterval(updateFont, 2000);