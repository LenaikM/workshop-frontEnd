import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl= 'http://localhost:8080/users';
  }

  public save(user: User){
    return this.http.post<User>(this.usersUrl, user);
  }
}
