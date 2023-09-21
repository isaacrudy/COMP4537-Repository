import {Note} from './lab1.js';

function addNote() {
    let text = document.getElementById('AddingNote').value;
    let note = new Note(text);
    var notes = localStorage.getItem('notes');
    if (notes == null) {
        notes = [];
        notes.push(note);
        localStorage.setItem('notes', JSON.stringify(notes));
    } else {
        notes = JSON.parse(notes);
        notes.push(note);
        localStorage.setItem('notes', JSON.stringify(notes));
    }
    document.getElementById('NoteSpace').innerHTML += note.display();
}

document.getElementById('AddNote').addEventListener('click', addNote);

if (localStorage.getItem('notes') != null) {
    let notes = JSON.parse(localStorage.getItem('notes'));
    for (let i = 0; i < notes.length; i++) {
        document.getElementById('NoteSpace').innerHTML += notes[i].display();
    }
}