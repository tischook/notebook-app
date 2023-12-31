import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NotesComponent } from './notes/notes.component';
import { NoteStartComponent } from './notes/note-start/note-start.component';
import { NoteListComponent } from './notes/note-list/note-list.component';
import { NoteDetailComponent } from './notes/note-detail/note-detail.component';
import { NoteEditComponent } from './notes/note-edit/note-edit.component';
import { NoteItemComponent } from './notes/note-list/note-item/note-item.component';
import { DropedownDirective } from './shared/dropedown.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotesComponent,
    NoteStartComponent,
    NoteListComponent,
    NoteDetailComponent,
    NoteEditComponent,
    NoteItemComponent,
    DropedownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
