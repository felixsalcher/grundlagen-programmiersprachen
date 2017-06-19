document.addEventListener('DOMContentLoaded', loadDom);

function loadDom() {
    let container = document.createElement('div');
    let form = document.createElement('div');
    let ausgabe = document.createElement('div');

    form.appendChild(createElementWithTextNode('label', 'Text:'));
    form.appendChild(document.createElement('br'));

    form.appendChild(createInput('text', 'eingabe'));
    form.appendChild(document.createElement('br'));

    form.appendChild(createElementWithTextNode('label', 'Anzahl:'));
    form.appendChild(document.createElement('br'));

    form.appendChild(createInput('text', 'anzahl'));
    form.appendChild(document.createElement('br'));

    form.appendChild(createInputWithEventHandler('button', 'create', 'Erzeugen', 'click', createParagraphs));
    form.appendChild(createInputWithEventHandler('button', 'delete', 'Entfernen', 'click', deleteParagraphs));

    ausgabe.setAttribute('id', 'ausgabe');

    container.appendChild(form);
    container.appendChild(ausgabe);
    document.body.appendChild(container);

}

function createParagraphs() {
    try {
        let text = document.getElementById("eingabe").value;
        let ausgabe = document.getElementById("ausgabe");
        let anzahl = parseInt(document.getElementById("anzahl").value);

        for(let i = 0; i < parseInt(document.getElementById("anzahl").value); i++) {
            let test = createElementWithTextNode('p', text);
            console.log(test);
            ausgabe.appendChild(createElementWithTextNode('p', text));
        }
    }
    catch(e) {
        alert(e.message);
    }
}

function deleteParagraphs() {
    alert("delete");
}

function createElementWithTextNode(type, text) {
    return document.createElement(type).appendChild(document.createTextNode(text)).parentNode;
}

function createInput(type, id, value) {
    let input = document.createElement('input');
    input.setAttribute('type', type);
    input.setAttribute('id', id);

    if(value) {
        input.setAttribute('value', value);
    }

    return input;
}

function createInputWithEventHandler(type, id, value, event, eventhandler) {
    let button = createInput(type, id, value);
    button.addEventListener(event, eventhandler);
    return button;
}