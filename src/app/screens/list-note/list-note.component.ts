import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import noteModel from 'src/app/models/noteModel';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-list-note',
  templateUrl: './list-note.component.html',
  styleUrls: ['./list-note.component.scss']
})
export class ListNoteComponent {

  notes: noteModel[] = [];

  constructor(private router: Router, private taskService: TaskService, private activedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.taskService.getAllNote().subscribe(allnote=> this.notes = allnote);
  }
  

  deleteNote(item: noteModel){
    this.taskService.deleteNote(item._id).subscribe(
      (itemDeleted: noteModel) => {
        this.notes = this.notes.filter(t => t._id != itemDeleted._id);
      }
    )
  }
}
