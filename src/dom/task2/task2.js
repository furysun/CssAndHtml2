function onTask2Loaded() {
    document.getElementById('check').onclick = check;
}

function check() {
    let text = document.getElementById('text').value;
    let result = document.getElementById('result');

    if (text === 'cat') {
        result.innerText = '=^^=';
        result.style.color = 'pink';
    } else if (text === 'heart') {
        result.innerText = '<3';
        result.style.color = 'red';
    } else if (text === '') {
        result.innerText = 'dont know';
        result.style.color = 'green';
    }
}

document.addEventListener("DOMContentLoaded", onTask2Loaded);



// function onTask2Loaded() {
//     document.getElementById('check').onclick = check;
// }
//
// const data = {
//     'cat': {
//         text: '=^^=',
//         color: 'pink'
//     },
//     'heart': {
//         text: 'heart',
//         color: 'red'
//     },
//     '': {
//         text: 'dont know',
//         color: 'green'
//     }
// };
//
// function check() {
//     let text = document.getElementById('text').value;
//     let result = document.getElementById('result');
//
//     result.innerText = data[text].text;
//     result.style.color = data[text].color;
// }
//
// document.addEventListener("DOMContentLoaded", onTask2Loaded);


