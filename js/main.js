// function Ticker() {
// 	this._i = 0
// };
//
// Ticker.prototype = {
// 	tick: function() {
// 		console.log(this._i++);
// 	}
// };
//
// var ticker = new Ticker();
//
// setInterval(function () {
//     ticker.tick()}, 1000);


class Ticker {
	constructor() {
		this._i = 0;
	}
	tick() {
		console.log(this._i++);
	}
}

let ticker = new Ticker();

setInterval(() => {ticker.tick()}, 1000);
