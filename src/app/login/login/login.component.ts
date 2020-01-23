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
  constructor(private _formBuilder: FormBuilder, private _router: Router) {
    this.loginForm = this._formBuilder.group({
      id: [''],
      password: [''],
    });
  }
  ngOnInit() {
  }
  login() {
    if (this.loginForm.get('id').value === 'admin' && this.loginForm.get('password').value === 'admin123') {
    }
    else {
      alert('Please enter correct credentials')
      this._router.navigate(['/home'])
    }
  }
}
