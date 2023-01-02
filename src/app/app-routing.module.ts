import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNoteComponent } from './screens/add-note/add-note.component';
import { DetailNoteComponent } from './screens/detail-note/detail-note.component';
import { ListNoteComponent } from './screens/list-note/list-note.component';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { RegistrationScreenComponent } from './screens/registration-screen/registration-screen.component';

const routes: Routes = [
  { path: '', component: LoginScreenComponent },
  { path: 'registration', component: RegistrationScreenComponent },
  { path: 'home', component: ListNoteComponent },
  { path: 'add-note', component: AddNoteComponent },
  { path: 'detail/:Id', component: DetailNoteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
