import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/AuthService';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  msg: string|undefined;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private loginService: LoginService
    ) { }

  ngOnInit(): void {
  }

  loginForm = this.formBuilder.group({
    login: '',
    pass: ''
  });

  onSubmit(): void {
    this.authService.login(this.loginForm.value.login!, this.loginForm.value.pass!).subscribe((response: any)=>{
      if(response){
        console.log(response)
        this.router.navigate(['/patient/patientAppointments'])
      }else{
        this.msg = "Login ou senha invalidos, por favor tente novamente!"
      }
    })
    
  }

}
