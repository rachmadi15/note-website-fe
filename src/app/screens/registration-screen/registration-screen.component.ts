import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-registration-screen',
  templateUrl: './registration-screen.component.html',
  styleUrls: ['./registration-screen.component.scss']
})
export class RegistrationScreenComponent {


  constructor(private router: Router, private taskService: TaskService, private activedRoute: ActivatedRoute) {}

  registration(username: string, email: string, password:string) {
    this.taskService.registration(username, email, password).subscribe(
      () => {
        this.router.navigate(['']);
      }
    )
  }
}
