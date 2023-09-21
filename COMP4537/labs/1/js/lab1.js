function Note(text) {
    this.text = text;
    this.date = new Date();
    this.id = this.date.getTime();

    function getNoteText() {
        return this.text;
    }

    function getId() {
        return this.id;
    }

    function display() {
        html = '<textarea id="' + this.id + '" class="editable">' + this.text + '</textarea>';
        html += '<button onClick="remove(' + this.id + ')">Remove</button>';
        return html;
    }

    function remove() {
        document.getElementById(this.id).remove();
        let notes = JSON.parse(localStorage.getItem('notes'));
        notes.remove(this);
    }
}

export {Note};
