import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import userModel from './models/userModel';
import noteModel from './models/noteModel';
 
@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {

  API_BASE_URL = 'http://localhost:3000';
  api_key = localStorage.getItem('token');
  headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.api_key}`
    });

  requestOptions = { headers: this.headers };

  constructor(private httpClient: HttpClient) { }
  
  

  login(url: string, data: Object){
    return this.httpClient.post<userModel>(`${this.API_BASE_URL}/${url}`, data);
  }

  registration(url: string, data: Object){
    return this.httpClient.post<userModel>(`${this.API_BASE_URL}/${url}`, data);
  }

  get(url: string){
    return this.httpClient.get<noteModel[]>(`${this.API_BASE_URL}/${url}`, this.requestOptions);
  }

  post(url: string, data: Object){
    return this.httpClient.post<noteModel>(`${this.API_BASE_URL}/${url}`, data, this.requestOptions);
  }

  put(url: string, data: Object){
    return this.httpClient.put<noteModel>(`${this.API_BASE_URL}/${url}`, data, this.requestOptions);
  }

  delete(url: string){
    return this.httpClient.delete<noteModel>(`${this.API_BASE_URL}/${url}`, this.requestOptions);
  }
}
