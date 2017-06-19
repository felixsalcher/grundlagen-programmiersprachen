document.addEventListener('DOMContentLoaded', loadDom);

function loadDom(){
    let divEl = '';
    let pEl = '';
    let aEl = '';
    let inputEl = '';

    // ----------------------------------------
    // DIV 1
    // ----------------------------------------

    divEl = document.createElement('div');
    divEl.setAttribute('id', 'div1');

    for(let i = 1; i <= 3; i++) {
        pEl = document.createElement('p');
        pEl.appendChild(document.createTextNode('Test 0' + i));
        divEl.appendChild(pEl);
    }
    document.body.appendChild(divEl);

    // ----------------------------------------
    // DIV 2
    // ----------------------------------------

    divEl = document.createElement('div');
    divEl.setAttribute('id', 'div2');

    pEl = document.createElement('p');
    aEl = document.createElement('a');
    aEl.setAttribute('href', 'www.piilossa.com');
    aEl.appendChild(document.createTextNode('C L I C K  M E ! ! !'));
    pEl.appendChild(aEl);
    divEl.appendChild(pEl);
    document.body.appendChild(divEl);

    // ----------------------------------------
    // DIV 3
    // ----------------------------------------

    divEl = document.createElement('div');
    divEl.setAttribute('id', 'div3');

    inputEl = document.createElement('input');
    inputEl.setAttribute('type', 'button');
    inputEl.setAttribute('value', 'Start');
    inputEl.addEventListener('click', start);
    divEl.appendChild(inputEl);
    document.body.appendChild(divEl);
}


function start() {
    let sonnneblume = new klausur1.Sonnenblume("Tolle Sonnenblume", 42);
    document.getElementById("div1").getElementsByTagName('p')[1].innerHTML = sonnneblume.info();
}



