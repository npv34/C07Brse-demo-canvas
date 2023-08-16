class Ball {
    constructor(x, y, r, color) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = color;
        this.flag = 'left';
    }

    draw() {
        let canvas = document.getElementById('myCanvas');
        let ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    move() {
        let canvas = document.getElementById('myCanvas');
        let ctx = canvas.getContext('2d');
        // xoa het man hinh de ve lai
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        switch (this.flag) {
            case 'left':
                this.moveLeft();
                break;
            case 'right':
                this.moveRight();
                break;
            case 'top':
                this.moveTop();
                break;
            case 'down':
                this.moveDown();
                break;
        }

        // xu ly cham bien trai
        if (this.x <= this.r) {
            this.flag = 'right';
        }

        // xu ly tram bien phai
        if (this.x + this.r >= canvas.width) {
            this.flag = 'left';
        }
    }

    moveRight() {
        this.x += 5;
    }

    moveLeft() {
        this.x -= 5;

    }
    moveTop() {
        this.y -= 5;
    }

    moveDown() {
        this.y += 5;
    }

}