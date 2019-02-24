let number = 5;

function onDomLoaded() {
    redraw();
    document.getElementById('down').onclick = down;
    document.getElementById('up').onclick = up;
}

function up() {
    number += 1;
    redraw();
}

function down() {
    number -= 1;
    redraw();
}

function redraw() {
    document.getElementById('number').innerText = number;
}

document.addEventListener("DOMContentLoaded", onDomLoaded);