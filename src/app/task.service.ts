import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConfigService } from './api-config.service';
import noteModel from './models/noteModel';
import userModel from './models/userModel';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private apiConfigService: ApiConfigService) { }

  login(username: string, password: string): Observable<userModel>{
    let data = { 'username': username, 'password': password };
    return this.apiConfigService.login('login', data);
  }

  registration(username: string, email: string, password: string): Observable<userModel>{
    let data = { 'username': username, 'email': email, 'password': password };
    return this.apiConfigService.registration('registrasi', data);
  }

  getAllNote(): Observable<noteModel[]>{
    return this.apiConfigService.get('note');
  }

  getDetailNote(Id: string): Observable<noteModel[]>{
    return this.apiConfigService.get(`note/${Id}`);
  }

  createNote(title: string, content: string): Observable<noteModel>{
    let data = { 'title': title, 'content': content };
    return this.apiConfigService.post('note', data);
  }

  updateNote(content: string, Id: string): Observable<noteModel> {
    let data = { 'content': content };
    return this.apiConfigService.put(`note/${Id}`, data);
  }

  deleteNote(Id: string): Observable<noteModel> {
    return this.apiConfigService.delete(`note/${Id}`);
  }

}
