import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_CONFIG } from "src/config/api.config";

@Injectable()
export class DoctorService {
    
    findAll() {
        return this.http.get(`${API_CONFIG.baseUrl}/professional`);
    }

    constructor(private http: HttpClient) { }
}