import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { API_CONFIG } from "src/config/api.config";

@Injectable()   
export class AppointmentService {
    basePath = "/appointments";

    findAllProfessionalAppointments() {
        return this.http.get<any[]>(`${API_CONFIG.baseUrl}${this.basePath}/professional-appointments`);
    }

    deleteApp(id: any) {
        return this.http.post(`${API_CONFIG.baseUrl}${this.basePath}/${id}`,{});
    }

    findAllByProfessionalIdAndDate(id: any, date: string) {
        return this.http.get<any[]>(`${API_CONFIG.baseUrl}${this.basePath}/${id}/${date}`);
    }

    findAllByProfessionalId(id:number) {
        return this.http.get<any[]>(`${API_CONFIG.baseUrl}${this.basePath}/${id}`);
    }

    findAll() {
        return this.http.get<any[]>(`${API_CONFIG.baseUrl}${this.basePath}`);
    }

    newAppointment(professionalId: String, time: String, date: String) {
        let data = { professionalId: professionalId, time: time, date: date}
        return this.http.post<String>(`${API_CONFIG.baseUrl}${this.basePath}`, data);
    }

    constructor(private http: HttpClient) { }


}