let spriteList = [];
let score = 0;
let vie = 0;

window.addEventListener("load", () => {
	document.getElementById("game-over").onclick= () => {
		if (vie == 0) {
			resetPartie()
		}
	}

	resetPartie()

	tick()
});

const resetPartie = () => {
	score = 0
	vie = 3
	document.getElementById("score").innerHTML = score
	document.getElementById("life").innerHTML = vie
	document.getElementById("game").style.display = "block"
	document.getElementById("game-over").style.display = "none"
}

const hit = () => {
	if (vie > 0) {
		vie--
		document.getElementById("life").innerHTML = vie

		if (vie == 0) {
			document.getElementById("game").style.display = "none"
			document.getElementById("game-over").style.display = "block"
		}
	}
}

const tick = () => {
	if (vie > 0) {
		if (Math.random() < 0.01) {
			spriteList.push(new Fruit())
		}
	}

	for (let i = 0; i < spriteList.length; i++) {
		if (!spriteList[i].tick()) {
			spriteList.splice(i, 1)
		}
	}

	window.requestAnimationFrame(tick)
}