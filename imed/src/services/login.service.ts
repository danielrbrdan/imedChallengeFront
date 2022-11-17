import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_CONFIG } from "src/config/api.config";

@Injectable()
export class LoginService {
    constructor(private http: HttpClient) { }

    login(login: String, password: String):Observable<Object>{
        let data = { login: login, password: password }
        let HTTPOptions:Object = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            responseType: 'text'
         }
        return this.http.post<String>(`${API_CONFIG.baseUrl}/login`, data, HTTPOptions);
    }

}