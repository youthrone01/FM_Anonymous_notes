
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class NoteServiceService {
  all_notes;
  constructor(private _http:Http) { }


  getNotes(callback){
    this._http.get('http://localhost:8000/notes').subscribe(
      (response)=>{
        // console.log(response.json());
        callback( response.json());
      },
      (error)=> {
        console.log("can not get notes ");
      }
    )
  }


  addNote(data){
    this._http.post('http://localhost:8000/notes', data).subscribe(
      (response) => {
        console.log("add a new note! ");
        
      },
      (error) => {
        console.log("can not add note!");
      }
    )

    
  }

}

