const robot = require('robotjs');

//Get a 100x100 screen capture starting at 0, 0.
var img = robot.screen.capture(0, 0, 1, 1);

console.log(img.width)

//Get pixel color at 50, 50.
var hex = img.colorAt(0, 0);
console.log(hex);

