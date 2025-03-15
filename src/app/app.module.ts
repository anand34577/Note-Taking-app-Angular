import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NoteFormComponent } from './note-form/note-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    NotesListComponent,
    NoteFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
