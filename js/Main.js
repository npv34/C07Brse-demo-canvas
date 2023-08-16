let ball = new Ball(200, 100, 10, "red");



ball.draw();
let bricks = [];

function createBrick() {
    
    for (let i = 1; i < 10; i++) {
        let brick = new Brick(20 + (i - 1) * (30 + 5), 10, 30, 10);
        bricks.push(brick)
    }


}
console.log(bricks);

createBrick();

function drawBricks() {
    for (let i = 0; i < bricks.length; i++) {
        bricks[i].draw();
    }
}

function play() {
    ball.move();
    ball.draw();
    drawBricks();
    requestAnimationFrame(play)
}

play();

// bat evennt ban phim
window.addEventListener('keyup', (evt) => {
    switch (evt.code) {
        case 'ArrowUp':
            ball.flag = 'top';
            break;
        case 'ArrowDown':
            ball.flag = 'down';
            break;
        case 'ArrowLeft':
            ball.flag = 'left';
            break;
        case 'ArrowRight':
            ball.flag = 'right';
            break;
    }
})