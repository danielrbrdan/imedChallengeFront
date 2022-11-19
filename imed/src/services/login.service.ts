import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_CONFIG } from "src/config/api.config";

@Injectable()
export class LoginService {
    newUserPatient(login: String, password: String, name: String) {
        let data = { login: login, password: password, name: name}
        let HTTPOptions:Object = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            responseType: 'text'
         }
        return this.http.post<String>(`${API_CONFIG.baseUrl}/api/user/save/patient`, data, HTTPOptions);
    }

    newUserProfessional(login: String, password: String, name: String, crm: String) {
        let data = { login: login, password: password , name: name , crm: crm}
        let HTTPOptions:Object = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }),
            responseType: 'text'
         }
        return this.http.post<String>(`${API_CONFIG.baseUrl}/api/user/save/professional`, data, HTTPOptions);
    }

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

    constructor(private http: HttpClient) { }


}