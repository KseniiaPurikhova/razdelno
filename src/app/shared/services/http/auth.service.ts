import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay } from 'rxjs';

interface User {
  uuid: string;
  name: string;
}

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  login(login: string, password: string) {
    return (
      this.http
        .post<User>('/api/login', { login, password })
        // this is just the HTTP call,
        // we still need to handle the reception of the token
        .pipe(shareReplay())
    );
  }
}
