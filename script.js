const canvas = document.getElementById('eddyCanvas');
const ctx = canvas.getContext('2d');

let magnet = { x: 250, y: 150, width: 100, height: 50 };
let dragging = false;

canvas.addEventListener('mousedown', (e) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    if (
        mouseX > magnet.x &&
        mouseX < magnet.x + magnet.width &&
        mouseY > magnet.y &&
        mouseY < magnet.y + magnet.height
    ) {
        dragging = true;
    }
});

canvas.addEventListener('mousemove', (e) => {
    if (dragging) {
        const rect = canvas.getBoundingClientRect();
        magnet.x = e.clientX - rect.left - magnet.width / 2;
        magnet.y = e.clientY - rect.top - magnet.height / 2;
        draw();
    }
});

canvas.addEvent