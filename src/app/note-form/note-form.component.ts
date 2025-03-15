import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent {
  @Output() noteAdded = new EventEmitter<any>();

  title: string = '';
  content: string = '';

  addNote() {
    const note = { title: this.title, content: this.content };
    this.noteAdded.emit(note);
    this.title = '';
    this.content = '';
  }
}
