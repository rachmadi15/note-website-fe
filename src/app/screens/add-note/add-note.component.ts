import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html', 
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent {

  @Input() control!: FormControl;

  constructor(private router: Router, private taskService: TaskService, private activedRoute: ActivatedRoute) {}

  ngOnInit(){
    this.control = this.control ?? new FormControl()
  }

  onSubmit(title: string) {
    this.taskService.createNote(title, this.control.value).subscribe(
      () => {
        this.router.navigate(['home']);
      }
    )
  }

}
