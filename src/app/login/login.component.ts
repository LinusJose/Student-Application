import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = "abc";
  pswd: any = "123";
  loginForm = this.fb.group({
    username: [''],
    password: ['']
  })
  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  login() {
    let usr = this.loginForm.value.username;
    let pwd = this.loginForm.value.password;
    if (this.user == usr && this.pswd == pwd) {
      alert("Login Successfull")
      this.router.navigateByUrl("studenttable")
    }
    else {
      alert("Invalid")
    }
  }
}
