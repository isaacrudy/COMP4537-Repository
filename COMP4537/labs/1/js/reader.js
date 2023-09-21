import {Note} from './lab1.js';

if (localStorage.getItem('notes') != null) {
    let notes = JSON.parse(localStorage.getItem('notes'));
    for (let i = 0; i < notes.length; i++) {
        document.getElementById('NoteSpace').innerHTML += notes[i].display();
    }
}

document.getElementsByClassName('editable').readOnly = true;