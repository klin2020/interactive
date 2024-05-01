const canvas = document.getElementById('drawing-board');
const toolbar = document.getElementById('toolbar');
const ctx = canvas.getContext('2d');

const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

canvas.width = window.innerWidth - canvasOffsetX;
canvas.height = window.innerHeight - canvasOffsetY;

let isDrawing = false;
let lineWidth = 5;
let startX;
let startY;

toolbar.addEventListener('click', e => {
    if (e.target.id == 'clear'){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    if (e.target.id == 'save'){
        let save_canvas = document.getElementById('drawing-board');
        let canvas_url = save_canvas.toDataURL();
        const url_el = document.createElement('a');
        url_el.href = canvas_url;
        url_el.download = "my-hand-turkey"
        url_el.click();
        url_el.remove();
    }
});


toolbar.addEventListener('change', e => {
    if (e.target.id == 'stroke'){
        ctx.strokeStyle = e.target.value;
    }
    if(e.target.id == 'lineWidth') {
        lineWidth = e.target.value;
    }
});

const draw = (e) => {
    if(!isDrawing){
        return;
    }
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';
    ctx.lineTo(e.clientX - canvasOffsetX, e.clientY);
    ctx.stroke();
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    startX = e.clientX;
    startY = e.clientY;

});

canvas.addEventListener('mouseup', e => {
    isDrawing = false;
    ctx.stroke();
    ctx.beginPath();
});

canvas.addEventListener('mousemove', draw);






