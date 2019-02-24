function onDomLoaded() {
    document.getElementById('up').onclick = function () {
        console.log('up');
    };

    document.getElementById('down').onclick = down;
    document.getElementById('up').onclick = up;
}

function down() {
    let number = document.getElementById('number').innerHTML;
    document.getElementById('number').innerHTML = Number(number) - 1;
}

function up() {
    let p = document.getElementById('number');
    let number = p.innerHTML;
    p.innerHTML = Number(number) + 1;
}

document.addEventListener("DOMContentLoaded", onDomLoaded);