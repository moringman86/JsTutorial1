const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext('2d');
const widht = 640;
const height = 360;
var keys = {};

document.addEventListener('keydown', (event) => {
    keys[event.key] = true;
});
document.addEventListener('keyup', (event) => {
    keys[event.key] = false;
});

function clearCanvas(){
    ctx.clearRect(0, 0, widht, height);
}

var x = 10;
var fps = 30;
function update(){
    clearCanvas();    
    ctx.fillStyle = '#f00';
    ctx.fillRect(x, 10, 100, 100);
    if(keys["d"]){
        x += 10;
    }
    if(keys["a"]){
        x -= 10;
    }
}
setInterval(update, 1000/fps);