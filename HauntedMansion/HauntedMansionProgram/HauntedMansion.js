/*
Programer: Mason Levely
Team member: Clayton
Date: 1-26-2022
Program: we will be makeing a program that will allow a spherobolt to go through a a haunted mansion were it must make lights and move through obsticles.
*/

async function startProgram() {
// Write code here
await scrollMatrixText('Start', {r: 66, g: 56, b: 225 }, 60, false);
// ScrollMatrixText begins the process of scrolling start, the RGB code sets the color, and 60 is the FPS of the scroll
//false starts the line of code without delay
await roll(0, 50, 2.8);
// await roll starts the roll at 0 degrees from start, at 50 speed, for 2.8 seconds
setMainLed({ r: 0, g: 0, b: 255 }, 10, false);
//set main led sets the color code to blue
await roll(45, 50, 1);
//Makes the sohero go at a 45 degreee angle and go forward
await roll(130, 50, 1.4);
//Changes angle & moves to the sound key
await Sound.Animal.Chicken.play(true);
//Plays chicken sound
await roll(220, 50, 1);
//Moves bolt direction to the red dot
setMainLed({ r: 255, g: 0, b: 0 }, 10, false);
await roll(90, 50, 1);
}


