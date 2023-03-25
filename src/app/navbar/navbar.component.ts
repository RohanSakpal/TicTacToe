import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  registerForm:FormGroup;
  loginForm:FormGroup;
  lastURL: string;
  isLogin:boolean;
  constructor(
    private fb: FormBuilder,
    private router:Router,
  ) {
    this.registerForm = this.fb.group({
      firstName: new FormControl(null),
      lastName: new FormControl(null),
      email: new FormControl(null,Validators.compose([Validators.required, Validators.email])),
      password: new FormControl(null,Validators.minLength(8))
    });
    this.loginForm = this.fb.group({
      email: new FormControl(null,Validators.compose([Validators.required, Validators.email])),
      password: new FormControl(null,Validators.minLength(8)), 
    });

   }

  ngOnInit(): void {
    this.lastURL = this.router.url.substring(this.router.url.lastIndexOf('/') + 1);
    this.checkURL(this.lastURL);
    this.router.events.subscribe((val) => {
      if(val instanceof NavigationEnd) {
        this.lastURL = val.url.substring(val.url.lastIndexOf('/') + 1)
        this.checkURL(this.lastURL);
      }
    });
  }
  checkURL(URL) {
    if(URL == '/') {
      this.isLogin = false;
    } else {
      this.isLogin = true;
    }
  }
  get r() { return this.registerForm.controls; }
  get l() { return this.loginForm.controls; }

  onLogSubmit(form:any) {
    if (form.invalid) {
      return false;
    }
    const model = {
      'email':this.loginForm.value.email,
      'password':this.loginForm.value.password
    }
    console.log('loginModel',model);
    this.router.navigate(['/dashboard']);
  }
  onRegSubmit(form:any) {
    if (form.invalid) {
      return false;
    }
    const model = {
      'firstName':form.value.firstName,
      'lastName': form.value.lastName,
      'email': form.value.email,
      'password': form.value.password
    }
    console.log('regModel',model);
  }

  logout() {
    this.router.navigate(['/']);
    this.isLogin = false;
  }
}
