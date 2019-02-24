function onDomLoaded() {
    console.log(document);
    console.log(document.getElementById('test'));
    document.getElementById('test').innerHTML = 'dfgdfhdf';

    let listItems = document.getElementsByClassName('list-item');

    for (let i = 0; i < listItems.length; i++) {
        let text = listItems[i].innerHTML;
        listItems[i].innerHTML = text + ' <3';
    }

    console.log(document.getElementById('test2').title);
    document.getElementById('test2').title = 'mw';
    document.getElementById('test3').style.color = 'green';


    let child = document.createElement('li');
    child.innerText = 'ryewre';

    document.getElementById('list').appendChild(child);

    let elementToDel = document.getElementById('remove-me');
    let body = elementToDel.parentNode;
    body.removeChild(elementToDel);

    document.getElementById('test4').addEventListener('click', function () {
        alert('<3');
    })

    document.getElementById('test4').onclick = function () {
        alert('<3 <3 <3');
    };
}

document.addEventListener("DOMContentLoaded", onDomLoaded);
