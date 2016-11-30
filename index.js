const robot = require('robotjs');
const tinycolor = require('tinycolor2');

module.exports = () => {
  const { width, height } = robot.getScreenSize();
  const columns = 8;
  const points = 32;
  const columnSize = width / columns;
  const pointsPerColumn = Math.floor(points / columns);
  const pointDistance = height / pointsPerColumn;

  let screenBrightness = 0;
  let currentColumn = -1;
  let currentRow = 0;

  for (let i = 0; i < points; i++) {
    if (i % pointsPerColumn === 0) {
      currentRow = 0;
      currentColumn++;
    } else {
      currentRow++;
    }

    const sample = robot.getPixelColor(
      (columnSize * currentColumn) + (columnSize / 2),
      (pointDistance * currentRow) + (pointDistance / 2)
    );

    const brightness = tinycolor(sample).getBrightness();

    screenBrightness += brightness;
  }

  return screenBrightness / points;
};
