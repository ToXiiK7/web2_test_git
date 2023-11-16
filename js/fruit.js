class Fruit {
	constructor() {
		this.velocityY = 0.1;
		this.speedY = -10;

		this.speedX = Math.random() * 2

		this.x = 300
		this.y = 500;
		this.cut = false;

		this.fruitNo =  Math.floor(Math.random() * 5 + 1)

		this.node = document.createElement("div");
		this.node.style.top = this.y + "px";

        this.node.classList.add("fruit");
        this.node.classList.add("fruit_" + this.fruitNo)

		this.node.onmouseover = () => this.score_slash()

		document.getElementById("game").append(this.node)
	}

	score_slash() {
        if (!this.cut) {
            this.cut = true
            this.node.classList.remove("fruit_" + this.fruitNo)
            this.node.classList.add("fruit_" + this.fruitNo + "-cut")
            score++;
            document.getElementById("score").innerHTML = score
        }
	}

	tick() {
		this.speedY += this.velocityY
		this.x += this.speedX
		this.y += this.speedY
		this.node.style.top = this.y + "px"
		this.node.style.left = this.x + "px"

		let alive = this.y < 500 && vie > 0

		if (!alive) {
			this.node.remove()

			if (this.cut == false) {
				hit()
			}
		}

		return alive
	}
}