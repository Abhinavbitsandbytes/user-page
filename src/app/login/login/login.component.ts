import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isCredentailTrue:boolean
  constructor(private _formBuilder: FormBuilder, private _router: Router) {
    this.loginForm = this._formBuilder.group({
      id: [''],
      password: [''],
    });
   }
 
  ngOnInit() {
  }
  login(){
    if(this.loginForm.get('id').value==='admin' && this.loginForm.get('password').value==='admin123'){
      this._router.navigate(['/home'])
      this.isCredentailTrue=true
    }
    this.isCredentailTrue=false
    
  }

}
