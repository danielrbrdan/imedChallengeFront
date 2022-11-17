import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/AuthService';

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
    private authService: AuthService
    ) { }

  ngOnInit(): void {
  }

  loginForm = this.formBuilder.group({
    login: '',
    pass: ''
  });

  onSubmit(): void {
    let reponse = this.authService.login(this.loginForm.value.login!, this.loginForm.value.pass!)
    if(reponse){
      console.log(reponse)
      this.router.navigate(['/patient/patientAppointments'])
    }else{
      this.msg = "Login ou senha invalidos, por favor tente novamente!"
    }
  }

}
