
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { NoteServiceService } from '../../note-service.service';
@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class DisplayNotesComponent implements OnInit {

  @Input() notes;

  constructor(private _noteServiceService: NoteServiceService) { 
   
  }
  
  ngOnInit() {
  }

}
