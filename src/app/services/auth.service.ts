import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams,HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  public getUser(): Observable<any> {
    return this.http.get('https://43.254.177.106:44312/user/get_users');
  }
}
