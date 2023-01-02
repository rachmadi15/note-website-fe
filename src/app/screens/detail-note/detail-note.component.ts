import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import noteModel from 'src/app/models/noteModel';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-detail-note',
  templateUrl: './detail-note.component.html',
  styleUrls: ['./detail-note.component.scss']
})
export class DetailNoteComponent {

  note: noteModel[] = [];
  Id: string = '';
  @Input() control!: FormControl;
  constructor(private router: Router, private taskService: TaskService, private activedRoute: ActivatedRoute) {
    this.activedRoute.params.subscribe(params => {
      this.Id = params['Id'];
    })
  }

  ngOnInit(): void {
    this.control = this.control ?? new FormControl()
    this.taskService.getDetailNote(this.Id).subscribe((allnote) => {
      this.note = allnote;
      this.control.setValue(allnote[0].content)
    });
  }

  onSubmit(){
    this.taskService.updateNote(this.control.value, this.Id).subscribe(
      () => {
        this.router.navigate(['home'])
      }
    )
  }
}
