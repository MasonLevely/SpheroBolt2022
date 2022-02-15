async function startProgram() {

await scrollMatrixText('Start', {r: 66, g: 56, b: 225 }, 60, false);
// ScrollMatrixText begins the process of scrolling start, the RGB code sets the color, and 60 is the FPS of the scroll
//false starts the line of code without delay
await roll(0, 50, 2.8);
// await roll starts the roll at 0 degrees from start, at 50 speed, for 2.8 seconds
setMainLed({ r: 0, g: 0, b: 255 }, 10, false);
//set main led sets the color code to blue
await roll(45, 50, 1);
//Makes the sphero go at a 45 degreee angle and go forward
await roll(130, 50, 1.5);
//Changes angle & moves to the sound key
await Sound.Animal.Chicken.play(true);
//Plays chicken sound
await roll(220, 50, 1);
//Moves bolt direction towards the red dot
setMainLed({ r: 255, g: 0, b: 0 }, 10, false);
//Sets main Led to Red dot
await roll(140, 50, 0.9)
//Moves Sphero to move towards the next checkpoint
await roll(45, 50, 2);
//Moves the sphero up
await roll(135, 50, 2);
//moves the sphero to the right and have it roll
await Sound.Animal.Dolphin.play(true);
//plays a Dolphin sound
await roll(135, 50, 1.9);
//Moves towards checkpoint
setMainLed({ r: 0, g: 255, b: 0 }, 10, false);
//sets LED to green
await roll(25, 50, 1);
//moves the sphero to the green dot
await roll(295, 50, 3);
//moves the sphero towards the next checkpoint
awit Sound.Animal.Elephant.Play(true);
//plays a Elephant sound
setMainLed({ r: 128, g: 0, b: 128 ), 10, false);
//Changes the main LED to purple
await roll(270, 50, 1);
//Moves the sphero to the last Dot and finish the course



