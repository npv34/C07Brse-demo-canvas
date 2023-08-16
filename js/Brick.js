class Brick {
    x;
    y;
    w;
    h;
    color;

    constructor(x,y,w, h) {
        this.x = x ;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = 'red';
        this.canvas =document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext('2d');
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, this.w, this.h);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }
}