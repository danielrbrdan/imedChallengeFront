import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from "src/config/api.config";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class AuthService {
    private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
    isLoggedIn$ = this._isLoggedIn$.asObservable();

    constructor(private http: HttpClient) { 
        this._isLoggedIn$.next(!!this.token);
    }

    get token(){
        return localStorage.getItem('token')!;
    }

    login(user: String, pass: String) {
        //return this.http.get(`${API_CONFIG.baseUrl}/user/addUser/${value.name}/${value.surname}/${value.email}/${value.address}`);
        localStorage.setItem('token','dksajdklajdsdskldjasd')
        this._isLoggedIn$.next(true);
        return {
            token:"dksajdklajdsdskldjasd"
        };
    }
}