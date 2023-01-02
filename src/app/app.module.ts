import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { QuillModule } from 'ngx-quill'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { RegistrationScreenComponent } from './screens/registration-screen/registration-screen.component';
import { ListNoteComponent } from './screens/list-note/list-note.component';
import { AddNoteComponent } from './screens/add-note/add-note.component';
import { DetailNoteComponent } from './screens/detail-note/detail-note.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    RegistrationScreenComponent,
    ListNoteComponent,
    AddNoteComponent,
    DetailNoteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    QuillModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
