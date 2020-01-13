﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../_models/user';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthenticationService   {
    currentUserSubject: BehaviorSubject<User>;
    currentUser: Observable<User>;
    username: string;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    get currentUserValue(): User {
        return this.currentUserSubject.value;
    }   

    login(Username: string, password: string) {
        var Email='';

        return this.http.post<any>(environment.api_url + '/auth/login', { Username, password, Email })
            .pipe(map(response => {
                 
                console.log('user >> ', response);
                localStorage.setItem('currentUser', JSON.stringify(response));
                this.currentUserSubject.next(response);

                //    if (response.token.token && response.jwt) {

                //     response.user.token = response.jwt;
                    
                //     console.log('user >> ', response.user);

                //     localStorage.setItem('currentUser', JSON.stringify(response.user));
                //     this.currentUserSubject.next(response.user);
                // }

                return response;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}