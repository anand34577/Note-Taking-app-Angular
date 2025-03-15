import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private notes: any[] = [];

  constructor() {}

  getNotes(): any[] {
    return this.notes;
  }

  addNote(note: any): void {
    this.notes.push(note);
  }
}
