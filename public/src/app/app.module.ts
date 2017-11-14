import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AddNoteComponent } from './main/add-note/add-note.component';
import { DisplayNotesComponent } from './main/display-notes/display-notes.component';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule
import { NoteServiceService } from './note-service.service'; // <-- Imported
import { AppRoutingModule } from './app-routing.modules'; // <--- Routing rules imported

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AddNoteComponent,
    DisplayNotesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- Include module in our AppModules
		HttpModule,// <-- Include module in our AppModules
		AppRoutingModule // <--- Our routing rules
  ],
  providers: [NoteServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
