import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NoteServiceService } from './../note-service.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {
  notes;
  constructor(private _noteServiceService: NoteServiceService) {
    
   }

  sendnote(event){
    this._noteServiceService.addNote(event);
    this._noteServiceService.getNotes((res)=>{
      this.notes = res;
    })
  }

  ngOnInit() {
    this._noteServiceService.getNotes((res)=>{
      this.notes = res;
    })
  }

}
