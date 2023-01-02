import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent {


  constructor(private router: Router, private taskService: TaskService, private activedRoute: ActivatedRoute) {}

  login(username: string, password:string) {
    this.taskService.login(username, password).subscribe(
      (result) => {
        localStorage.setItem('token', result.accessToken);
        this.router.navigate(['home']);
      }
    )
  }
}
