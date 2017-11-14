import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { NoteServiceService } from '../../note-service.service'; 
@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class AddNoteComponent implements OnInit {
  @Output() addnote = new EventEmitter();

  note ={
    content:"",
  }
  constructor(private _noteServiceService: NoteServiceService) { }

  onSubmit(){
    this.addnote.emit(this.note);
    this.note.content = "";
  }


  ngOnInit() {
  }

}
