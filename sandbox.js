/*
Programmer Mason Levely
Date: 1.12.2022
in sandbox we can test out different codes in without runing my main code




async function startProgram() {
	// Write code here
	setHeading(270);
	await speak('hello world!', true);
	setMainLed({ r: 255, g: 0, b: 0});
		for (var _il = 0; _il < 4; _il++) {
			// loop this 4 times to creat a aquar
			await Sound.Game.Coin.play(true);
			setMainLed({ r: 0, g: 255, b: 0})
			await roll((getHeading() + 90, 50, 2);
			setMainLed(
}

